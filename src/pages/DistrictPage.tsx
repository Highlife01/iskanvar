import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { findCityBySlug, findDistrictBySlug, questionTypes } from '@/data/locations';
import { generateDistrictContent } from '@/lib/content-generator';
import NotFound from './NotFound';

const DistrictPage = () => {
    const { citySlug, districtSlug } = useParams<{ citySlug: string; districtSlug: string }>();

    const city = findCityBySlug(citySlug || '');
    const district = findDistrictBySlug(citySlug || '', districtSlug || '');

    if (!city || !district) {
        return <NotFound />;
    }

    const title = `${city.name} ${district.name} İskan ve İmar Hizmetleri | iskanvar`;
    const h1 = `${district.name} İskan, Ruhsat ve İmar Sorgulama`;
    const metaDescription = `${city.name} ${district.name} ilçesi için iskan belgesi, yapı ruhsatı ve imar durumu sorgulama hizmetleri. ${district.name} Belediyesi güncel imar kayıtlarına erişim ve danışmanlık.`;

    // Generate generic content for district
    const generatedContent = generateDistrictContent(city.name, district.name);

    // Generic FAQs for District
    const districtFaqs = [
        {
            question: `${district.name} Belediyesi iskan başvurusu nasıl yapılır?`,
            answer: `${district.name} Belediyesi Yapı Kontrol Müdürlüğü'ne gerekli evraklarla birlikte dilekçe vererek başvuru yapabilirsiniz.`
        },
        {
            question: `${district.name} iskan masrafları ne kadar?`,
            answer: `${district.name} bölgesindeki emlak rayiç bedelleri ve bina sınıfına göre harçlar değişiklik gösterir. Detaylı hesaplama için bizimle iletişime geçebilirsiniz.`
        }
    ];

    // Links to Neighborhoods (if available)
    const neighborhoodLinks = (district.neighborhoods || []).map(n => ({
        label: `${n} Mahallesi İskan`,
        href: `/${city.slug}/${district.slug}/${n}/iskanli-mi` // Assuming this route exists or we will standardise
    }));

    // Links to General Questions for District
    const questionLinks = questionTypes.slice(0, 5).map(q => ({
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
                { label: "Ana Sayfa", href: "/" },
                { label: city.name, href: `/${city.slug}` },
                { label: district.name, href: `/${city.slug}/${district.slug}` }
            ]}
            relatedLinks={[...neighborhoodLinks, ...questionLinks]}
            location={{ city: city.name, district: district.name }}
        />
    );
};

export default DistrictPage;
