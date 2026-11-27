import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { findQuestionBySlug, questionTypes, cities, getIskanQuestions, getImarQuestions } from '@/data/locations';
import NotFound from './NotFound';

const QuestionPage = () => {
  const { questionSlug, slug } = useParams<{ questionSlug?: string; slug?: string }>();
  const resolvedQuestionSlug = questionSlug || slug || '';

  const question = findQuestionBySlug(resolvedQuestionSlug);

  if (!question) {
    return <NotFound />;
  }

  // Generate related links based on category
  const sameCategory = questionTypes
    .filter(q => q.slug !== resolvedQuestionSlug && q.category === question.category)
    .slice(0, 4)
    .map(q => ({ label: q.title, href: `/${q.slug}` }));

  const otherCategory = questionTypes
    .filter(q => q.category !== question.category)
    .slice(0, 2)
    .map(q => ({ label: q.title, href: `/${q.slug}` }));

  // Add city links
  const cityLinks = cities.slice(0, 6).map(city => ({
    label: `${city.name} ${question.category === 'imar' ? 'İmar' : 'İskan'} Sorgulama`,
    href: `/${city.slug}/${question.category === 'imar' ? 'imar-durumu-sorgulama' : 'iskan-sorgulama'}`
  }));

  return (
    <QuestionPageTemplate
      title={`${question.title} (Yapı Kullanma İzin Belgesi) | iskanvar`}
      h1={question.h1}
      metaDescription={question.description || `${question.title} hakkında detaylı bilgi, sorgulama adımları ve güncel yasal mevzuat rehberi. Binada iskan var mı nasıl öğrenilir?`}
      content={question.content}
      faqs={question.faqs}
      breadcrumbs={[
        { label: question.title, href: `/${resolvedQuestionSlug}` }
      ]}
      relatedLinks={[...sameCategory, ...otherCategory, ...cityLinks]}
    />
  );
};

export default QuestionPage;
