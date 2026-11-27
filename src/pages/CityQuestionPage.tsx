import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { findCityBySlug, findQuestionBySlug, questionTypes } from '@/data/locations';
import NotFound from './NotFound';

const CityQuestionPage = () => {
  // We might come here from /:citySlug/:questionSlug or from the wrapper with /:citySlug/:secondSlug
  // Also supports legacy reversed /:questionSlug/:citySlug (e.g. /iskan-sorgulama/istanbul)
  const params = useParams();
  const rawFirst = params.citySlug || '';
  const rawSecond = params.questionSlug || params.secondSlug || '';

  let city = findCityBySlug(rawFirst);
  let question = findQuestionBySlug(rawSecond);
  let questionSlug = rawSecond;

  if (!city && !question) {
    city = findCityBySlug(rawSecond);
    question = findQuestionBySlug(rawFirst);
    questionSlug = rawFirst;
  }

  if (!city || !question) {
    return <NotFound />;
  }

  const title = `${city.name} İskan Sorgulama (Yapı Kullanma İzin Belgesi) | iskanvar`;
  const h1 = `${city.name} İskan Sorgulama`;
  const metaDescription = `${city.name} için güncel iskan durumu sorgulama hizmeti. ${city.name} Belediyesi arşiv kayıtlarından ${question.title.toLowerCase()} hakkında detaylı bilgi ve rapor uzmanlarca hazırlanır.`;

  // City-specific FAQs
  const cityFaqs = question.faqs.map(faq => ({
    question: faq.question.replace(/bir bina|Bir bina/g, `${city.name}'da bir bina`),
    answer: faq.answer
  }));

  // Related links - district pages
  const districtLinks = city.districts.slice(0, 4).map(district => ({
    label: `${district.name} ${question.title}`,
    href: `/${city.slug}/${district.slug}/${question.slug}`
  }));

  // Other question types for this city
  const otherQuestionLinks = questionTypes
    .filter(q => q.slug !== questionSlug)
    .slice(0, 3)
    .map(q => ({
      label: `${city.name} ${q.title}`,
      href: `/${city.slug}/${q.slug}`
    }));

  return (
    <QuestionPageTemplate
      title={title}
      h1={h1}
      metaDescription={metaDescription}
      content={question.content}
      faqs={cityFaqs}
      breadcrumbs={[
        { label: city.name, href: `/${city.slug}/iskan-sorgulama` },
        { label: question.title, href: `/${city.slug}/${questionSlug}` }
      ]}
      relatedLinks={[...districtLinks, ...otherQuestionLinks]}
      location={{ city: city.name }}
    />
  );
};

export default CityQuestionPage;
