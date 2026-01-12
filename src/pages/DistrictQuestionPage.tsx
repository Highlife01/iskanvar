import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { findCityBySlug, findDistrictBySlug, findQuestionBySlug, questionTypes } from '@/data/locations';
import { generateDistrictContent } from '@/lib/content-generator';
import NotFound from './NotFound';

const DistrictQuestionPage = () => {
  const { citySlug, districtSlug, questionSlug } = useParams<{
    citySlug: string;
    districtSlug: string;
    questionSlug: string
  }>();

  const city = findCityBySlug(citySlug || '');
  const district = findDistrictBySlug(citySlug || '', districtSlug || '');
  const question = findQuestionBySlug(questionSlug || '');

  if (!city || !district || !question) {
    return <NotFound />;
  }

  const title = `${city.name} ${district.name} İskan Sorgulama (Yapı Kullanma İzin Belgesi) | iskanvar`;
  const h1 = `${district.name} İskan Sorgulama`;
  const metaDescription = `${city.name} ${district.name} ilçesi için güncel iskan durumu sorgulama hizmeti. ${district.name} Belediyesi kayıtlarından ${question.title.toLowerCase()} hakkında uzman araştırması.`;

  // Generate unique content for this district
  const generatedContent = generateDistrictContent(city.name, district.name);

  // District-specific FAQs
  const districtFaqs = question.faqs.map(faq => ({
    question: faq.question.replace(/bir bina|Bir bina/g, `${district.name}'da bir bina`),
    answer: faq.answer
  }));

  // Related links - neighborhood pages if available
  const neighborhoodLinks = (district.neighborhoods || []).slice(0, 3).map(n => ({
    label: `${n.charAt(0).toUpperCase() + n.slice(1)} Mahallesi İskan`,
    href: `/${city.slug}/${district.slug}/${n}/iskanli-mi`
  }));

  // Other districts in the same city
  const otherDistrictLinks = city.districts
    .filter(d => d.slug !== districtSlug)
    .slice(0, 3)
    .map(d => ({
      label: `${d.name} ${question.title}`,
      href: `/${city.slug}/${d.slug}/${question.slug}`
    }));

  // Other question types
  const otherQuestionLinks = questionTypes
    .filter(q => q.slug !== questionSlug)
    .slice(0, 2)
    .map(q => ({
      label: `${district.name} ${q.title}`,
      href: `/${city.slug}/${district.slug}/${q.slug}`
    }));

  return (
    <QuestionPageTemplate
      title={title}
      h1={h1}
      metaDescription={metaDescription}
      content={generatedContent}
      faqs={districtFaqs}
      breadcrumbs={[
        { label: city.name, href: `/${city.slug}/iskan-sorgulama` },
        { label: district.name, href: `/${city.slug}/${district.slug}/iskan-sorgulama` },
        { label: question.title, href: `/${city.slug}/${district.slug}/${questionSlug}` }
      ]}
      relatedLinks={[...neighborhoodLinks, ...otherDistrictLinks, ...otherQuestionLinks]}
      location={{ city: city.name, district: district.name }}
    />
  );
};

export default DistrictQuestionPage;
