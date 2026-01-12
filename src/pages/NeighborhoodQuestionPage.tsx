import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { findCityBySlug, findDistrictBySlug, cities } from '@/data/locations';
import NotFound from './NotFound';

const NeighborhoodQuestionPage = () => {
  const { citySlug, districtSlug, neighborhoodSlug } = useParams<{
    citySlug: string;
    districtSlug: string;
    neighborhoodSlug: string;
  }>();

  const city = findCityBySlug(citySlug || '');
  const district = findDistrictBySlug(citySlug || '', districtSlug || '');

  if (!city || !district) {
    return <NotFound />;
  }

  // Check if neighborhood exists
  const neighborhoodExists = district.neighborhoods?.includes(neighborhoodSlug || '');
  if (!neighborhoodExists) {
    return <NotFound />;
  }

  const neighborhoodName = neighborhoodSlug ?
    neighborhoodSlug.charAt(0).toUpperCase() + neighborhoodSlug.slice(1) : '';

  const title = `${neighborhoodName} Mahallesi İskan Sorgulama (Yapı Kullanma İzin Belgesi) | iskanvar`;
  const h1 = `${neighborhoodName} Mahallesi İskan Sorgulama`;
  const metaDescription = `${city.name} ${district.name} ${neighborhoodName} Mahallesi için güncel iskan durumu sorgulama hizmeti. Tapu ve ada parsel bilgisiyle iskan kontrolü yapın.`;

  const content = `${neighborhoodName} Mahallesi, ${district.name} ilçesinde yer alan önemli bir yerleşim bölgesidir. Bu mahallede bulunan bir gayrimenkulün iskan durumunu sorgulamak için tapu veya ada-parsel bilgilerinizi kullanabilirsiniz. İskan belgesi, yapının belediye tarafından onaylandığını ve yaşanabilir standartlara uygun olduğunu gösterir.`;

  const faqs = [
    {
      question: `${neighborhoodName} Mahallesi'nde iskan nasıl sorgulanır?`,
      answer: `${neighborhoodName} Mahallesi'ndeki gayrimenkullerin iskan durumu ${district.name} Belediyesi arşivlerinden sorgulanabilir.`
    },
    {
      question: `${neighborhoodName}'da iskansız bina var mı?`,
      answer: `Her mahallede olduğu gibi ${neighborhoodName}'da da iskansız binalar bulunabilir. Satın almadan önce mutlaka iskan kontrolü yapılmalıdır.`
    },
    {
      question: `${neighborhoodName} Mahallesi belediyesi neresi?`,
      answer: `${neighborhoodName} Mahallesi, ${city.name} ${district.name} Belediyesi sınırları içindedir.`
    },
  ];

  // Related links - other neighborhoods
  const otherNeighborhoodLinks = (district.neighborhoods || [])
    .filter(n => n !== neighborhoodSlug)
    .slice(0, 3)
    .map(n => ({
      label: `${n.charAt(0).toUpperCase() + n.slice(1)} Mahallesi İskan`,
      href: `/${city.slug}/${district.slug}/${n}/iskanli-mi`
    }));

  // Parent links
  const parentLinks = [
    { label: `${district.name} İskan Sorgulama`, href: `/${city.slug}/${district.slug}/iskan-sorgulama` },
    { label: `${city.name} İskan Sorgulama`, href: `/${city.slug}/iskan-sorgulama` },
  ];

  return (
    <QuestionPageTemplate
      title={title}
      h1={h1}
      metaDescription={metaDescription}
      content={content}
      faqs={faqs}
      breadcrumbs={[
        { label: city.name, href: `/${city.slug}/iskan-sorgulama` },
        { label: district.name, href: `/${city.slug}/${district.slug}/iskan-sorgulama` },
        { label: `${neighborhoodName} Mahallesi`, href: `/${city.slug}/${district.slug}/${neighborhoodSlug}/iskanli-mi` }
      ]}
      relatedLinks={[...otherNeighborhoodLinks, ...parentLinks]}
      location={{ city: city.name, district: district.name, neighborhood: neighborhoodName }}
    />
  );
};

export default NeighborhoodQuestionPage;
