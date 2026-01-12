import { Plugin } from 'vite';
import { cities, questionTypes } from '../src/data/locations';
import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = 'https://www.iskanvar.com.tr';

interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: number;
}

function generateSitemapUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];

  // Ana sayfa
  urls.push({ loc: `${SITE_URL}/`, changefreq: 'weekly', priority: 1.0 });

  // Soru sayfaları
  questionTypes.forEach(q => {
    urls.push({ loc: `${SITE_URL}/${q.slug}`, changefreq: 'monthly', priority: 0.9 });
  });

  // Ada Parsel
  urls.push({ loc: `${SITE_URL}/ada-parsel`, changefreq: 'monthly', priority: 0.8 });

  // İl, ilçe, mahalle ve kombinasyonlar
  cities.forEach(city => {
    urls.push({ loc: `${SITE_URL}/${city.slug}`, changefreq: 'monthly', priority: 0.8 });

    city.districts.forEach(district => {
      urls.push({ loc: `${SITE_URL}/${city.slug}/${district.slug}`, changefreq: 'monthly', priority: 0.7 });

      if (district.neighborhoods) {
        district.neighborhoods.forEach(neighborhood => {
          urls.push({ loc: `${SITE_URL}/${city.slug}/${district.slug}/${neighborhood}`, changefreq: 'monthly', priority: 0.6 });
        });
      }
    });

    questionTypes.forEach(q => {
      urls.push({ loc: `${SITE_URL}/${city.slug}/${q.slug}`, changefreq: 'monthly', priority: 0.7 });
    });

    // Official Terminology Phase 1
    urls.push({ loc: `${SITE_URL}/${city.slug}-yapi-kullanma-izin-belgesi`, changefreq: 'weekly', priority: 0.9 });

    city.districts.forEach(district => {
      urls.push({ loc: `${SITE_URL}/${city.slug}-${district.slug}-yapi-kullanma-izin-belgesi-sorgulama`, changefreq: 'weekly', priority: 0.8 });
    });
  });

  return urls;
}

function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      const urls = generateSitemapUrls();
      const sitemap = generateSitemapXml(urls);
      const outputPath = path.resolve(__dirname, '../dist/sitemap.xml');

      // Ensure dist folder exists
      const distDir = path.dirname(outputPath);
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }

      fs.writeFileSync(outputPath, sitemap, 'utf-8');
      console.log(`\n✅ Sitemap generated: ${urls.length} URLs`);
    }
  };
}
