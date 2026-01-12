// Client-side sitemap data for dynamic routing validation
import { cities, questionTypes } from '@/data/locations';

const SITE_URL = 'https://iskanvar.com';

export interface SitemapUrl {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export function generateAllUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];

  // Ana sayfa
  urls.push({
    loc: `${SITE_URL}/`,
    changefreq: 'weekly',
    priority: 1.0
  });

  // Soru sayfaları (iskan ve imar)
  questionTypes.forEach(q => {
    urls.push({
      loc: `${SITE_URL}/${q.slug}`,
      changefreq: 'monthly',
      priority: 0.9
    });
  });

  // Ada Parsel sayfası
  urls.push({
    loc: `${SITE_URL}/ada-parsel`,
    changefreq: 'monthly',
    priority: 0.8
  });

  // İl sayfaları
  cities.forEach(city => {
    urls.push({
      loc: `${SITE_URL}/${city.slug}`,
      changefreq: 'monthly',
      priority: 0.8
    });

    // İlçe sayfaları
    city.districts.forEach(district => {
      urls.push({
        loc: `${SITE_URL}/${city.slug}/${district.slug}`,
        changefreq: 'monthly',
        priority: 0.7
      });

      // Mahalle sayfaları
      if (district.neighborhoods) {
        district.neighborhoods.forEach(neighborhood => {
          urls.push({
            loc: `${SITE_URL}/${city.slug}/${district.slug}/${neighborhood}`,
            changefreq: 'monthly',
            priority: 0.6
          });
        });
      }
    });

    // İl + soru kombinasyonları
    questionTypes.forEach(q => {
      urls.push({
        loc: `${SITE_URL}/${city.slug}/${q.slug}`,
        changefreq: 'monthly',
        priority: 0.7
      });
    });
  });

  return urls;
}

export function generateSitemapXml(): string {
  const urls = generateAllUrls();
  
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

export function getTotalUrlCount(): {
  total: number;
  homepage: number;
  questions: number;
  cities: number;
  districts: number;
  neighborhoods: number;
  combinations: number;
} {
  const districtCount = cities.reduce((acc, c) => acc + c.districts.length, 0);
  const neighborhoodCount = cities.reduce(
    (acc, c) => acc + c.districts.reduce((a, d) => a + (d.neighborhoods?.length || 0), 0), 
    0
  );
  const combinationCount = cities.length * questionTypes.length;

  return {
    total: 1 + questionTypes.length + 1 + cities.length + districtCount + neighborhoodCount + combinationCount,
    homepage: 1,
    questions: questionTypes.length,
    cities: cities.length,
    districts: districtCount,
    neighborhoods: neighborhoodCount,
    combinations: combinationCount
  };
}
