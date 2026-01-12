import { allCities } from '../src/data/all-locations';
import { questionTypes } from '../src/data/questions';
import { blogPosts } from '../src/data/blog-posts';
import { faqQuestions } from '../src/data/faq-questions';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.iskanvar.com.tr';

interface UrlEntry {
  loc: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

function generateSitemap() {
  const urls: UrlEntry[] = [];

  // Homepage - highest priority
  urls.push({ loc: `${BASE_URL}/`, priority: 1.0, changefreq: 'daily' });
  urls.push({ loc: `${BASE_URL}/hizmetler`, priority: 0.9, changefreq: 'weekly' });
  urls.push({ loc: `${BASE_URL}/hakkimizda`, priority: 0.8, changefreq: 'monthly' });

  // General Question pages - high priority
  questionTypes.forEach(q => {
    urls.push({ loc: `${BASE_URL}/${q.slug}`, priority: 0.9, changefreq: 'weekly' });
  });

  // FAQ Question Pages - medium-high priority
  faqQuestions.forEach(faq => {
    urls.push({ loc: `${BASE_URL}/iskan-sorulari/${faq.slug}`, priority: 0.7, changefreq: 'weekly' });
  });

  // Blog Pages
  urls.push({ loc: `${BASE_URL}/blog`, priority: 0.8, changefreq: 'weekly' });
  blogPosts.forEach(post => {
    urls.push({ loc: `${BASE_URL}/blog/${post.slug}`, priority: 0.7, changefreq: 'monthly' });
  });

  // Priority questions for city/district combinations (to avoid too many low-value pages)
  const priorityQuestions = [
    'iskan-sorgulama',
    'binada-iskan-var-mi',
    'iskan-nedir',
    'iskan-masraflari',
    'iskan-cezasi',
    'ev-alirken-iskan-sorgulama'
  ];

  // City Pages
  allCities.forEach(city => {
    // NEW: City Root Page (e.g. /istanbul)
    urls.push({
      loc: `${BASE_URL}/${city.slug}`,
      priority: 0.9,
      changefreq: 'weekly'
    });

    // City + Priority Questions
    priorityQuestions.forEach(qSlug => {
      urls.push({
        loc: `${BASE_URL}/${city.slug}/${qSlug}`,
        priority: 0.8,
        changefreq: 'weekly'
      });
    });

    // NEW: Official Terminology Pages (Faz 1)
    urls.push({
      loc: `${BASE_URL}/${city.slug}-yapi-kullanma-izin-belgesi`,
      priority: 0.9,
      changefreq: 'weekly'
    });

    // District Pages - ALL districts get iskan-sorgulama page
    city.districts.forEach(district => {
      // NEW: District Root Page (e.g. /istanbul/kadikoy)
      urls.push({
        loc: `${BASE_URL}/${city.slug}/${district.slug}`,
        priority: 0.8,
        changefreq: 'weekly'
      });

      // NEW: District Official Terminology Page
      urls.push({
        loc: `${BASE_URL}/${city.slug}-${district.slug}-yapi-kullanma-izin-belgesi-sorgulama`,
        priority: 0.8,
        changefreq: 'weekly'
      });

      // MAIN: District iskan-sorgulama page (for all districts)
      urls.push({
        loc: `${BASE_URL}/${city.slug}/${district.slug}/iskan-sorgulama`,
        priority: 0.7,
        changefreq: 'weekly'
      });

      // Additional priority questions for top districts only
      if (city.districts.indexOf(district) < 5) {
        priorityQuestions.slice(1, 3).forEach(qSlug => {
          urls.push({
            loc: `${BASE_URL}/${city.slug}/${district.slug}/${qSlug}`,
            priority: 0.6,
            changefreq: 'weekly'
          });
        });
      }

      // Neighborhood Pages (Only if neighborhoods exist)
      if (district.neighborhoods) {
        district.neighborhoods.forEach(neighborhood => {
          urls.push({
            loc: `${BASE_URL}/${city.slug}/${district.slug}/${neighborhood}/iskanli-mi`,
            priority: 0.6,
            changefreq: 'monthly'
          });
        });
      }
    });
  });

  // XML Construction with priorities
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

  // Generate stats
  const totalDistricts = allCities.reduce((acc, city) => acc + city.districts.length, 0);
  const stats = {
    total: urls.length,
    homepage: 1,
    generalQuestions: questionTypes.length,
    faqQuestions: faqQuestions.length,
    blog: 1 + blogPosts.length,
    cityPages: allCities.length * (priorityQuestions.length + 1), // +1 for the new official page
    districtIskanPages: totalDistricts, // ALL districts get iskan-sorgulama
    districtOtherPages: allCities.reduce((acc, city) =>
      acc + Math.min(5, city.districts.length) * 2, 0), // Top 5 districts get 2 extra questions
    districtOfficialPages: totalDistricts, // Official terminology pages
    neighborhoodPages: allCities.reduce((acc, city) =>
      acc + city.districts.reduce((dAcc, d) =>
        dAcc + (d.neighborhoods?.length || 0), 0), 0)
  };

  console.log(`\n📊 Sitemap Generated Successfully!`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`📄 Total URLs: ${stats.total}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`🏠 Homepage: ${stats.homepage}`);
  console.log(`❓ Question Pages: ${stats.generalQuestions}`);
  console.log(`💬 FAQ Pages: ${stats.faqQuestions}`);
  console.log(`📝 Blog Pages: ${stats.blog}`);
  console.log(`🏙️  City Pages (Root): ${allCities.length}`);
  console.log(`🏙️  City Pages (Questions): ${stats.cityPages}`);
  console.log(`🏘️  District Pages (Root): ${totalDistricts}`);
  console.log(`🏘️  District Pages (Iskan): ${stats.districtIskanPages}`);
  console.log(`📋 District Official Pages: ${stats.districtOfficialPages}`);
  console.log(`📑 District Other Pages: ${stats.districtOtherPages}`);
  console.log(`🏡 Neighborhood Pages: ${stats.neighborhoodPages}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✅ Saved to: public/sitemap.xml\n`);
}

generateSitemap();

