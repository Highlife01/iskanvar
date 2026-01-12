import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { findCityBySlug, questionTypes } from '@/data/locations';
import { generateDistrictContent } from '@/lib/content-generator';
import NotFound from './NotFound';

const CityPage = () => {
    const { citySlug } = useParams<{ citySlug: string }>();

    const city = findCityBySlug(citySlug || '');

    if (!city) {
        return <NotFound />;
    }

    const title = `${city.name} İskan Sorgulama ve Yapı Kullanma İzin Belgesi Hizmetleri | iskanvar`;
    const h1 = `${city.name} İskan ve Yapı Ruhsat İşlemleri`;
    const metaDescription = `${city.name} genelinde iskan sorgulama, yapı kullanma izin belgesi alma ve gayrimenkul hukuku danışmanlığı. ${city.name} Belediyesi imar ve iskan süreçleri hakkında uzman desteği.`;

    // Generate generic content for city
    const generatedContent = generateDistrictContent(city.name, 'Genel'); // Using 'Genel' as pseudodistrict

    // Generic FAQs for City
    const cityFaqs = [
        {
            question: `${city.name}'de iskan belgesi nereden alınır?`,
            answer: `${city.name} sınırları içerisindeki taşınmazlar için ilgili ilçe belediyesinin İmar ve Şehircilik Müdürlüğü'ne başvurulmalıdır.`
        },
        {
            question: `${city.name} iskan sorgulama nasıl yapılır?`,
            answer: `${city.name} için iskan sorgulamasını E-Devlet üzerinden veya ilgili belediyeye şahsen başvurarak yapabilirsiniz. Ayrıca uzman ekibimiz sizin adınıza detaylı araştırma yapabilir.`
        },
        {
            question: `${city.name} yapı kullanma izin belgesi ücreti ne kadar?`,
            answer: "İskan harçları her yıl belediye meclisi tarafından belirlenir. Binanın metrekaresi ve cinsine göre hesaplanır."
        }
    ];

    // Links to Districts
    const districtLinks = city.districts.map(district => ({
        label: `${district.name} İskan Sorgulama`,
        href: `/${city.slug}/${district.slug}/iskan-sorgulama`
    }));

    // Links to Questions
    const questionLinks = questionTypes.slice(0, 5).map(q => ({
        label: `${city.name} ${q.title}`,
        href: `/${city.slug}/${q.slug}`
    }));

    return (
        <QuestionPageTemplate
            title={title}
            h1={h1}
            metaDescription={metaDescription}
            content={generatedContent}
            faqs={cityFaqs}
            breadcrumbs={[
                { label: "Ana Sayfa", href: "/" },
                { label: city.name, href: `/${city.slug}` }
            ]}
            relatedLinks={[...districtLinks, ...questionLinks]}
            location={{ city: city.name }}
        />
    );
};

export default CityPage;
