import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { findCityBySlug, findDistrictBySlug, questionTypes } from '@/data/locations';
import { generateDistrictContent } from '@/lib/content-generator';
import NotFound from './NotFound';

const DistrictPage = () => {
    const { citySlug, districtSlug, secondSlug } = useParams<{
        citySlug?: string;
        districtSlug?: string;
        secondSlug?: string;
    }>();
    const resolvedDistrictSlug = districtSlug || secondSlug || '';

    const city = findCityBySlug(citySlug || '');
    const district = findDistrictBySlug(citySlug || '', resolvedDistrictSlug);

    if (!city || !district) {
        return <NotFound />;
    }

    const title = `${city.name} ${district.name} İskan ve İmar Hizmetleri | iskanvar`;
    const h1 = `${district.name} İskan, Ruhsat ve İmar Sorgulama`;
    const metaDescription = `${city.name} ${district.name} ilçesi için iskan belgesi, yapı ruhsatı ve imar durumu sorgulama hizmetleri. ${district.name} Belediyesi güncel imar kayıtlarına erişim ve danışmanlık.`;

    // Generate rich location-specific content for district
    const generatedContent = generateDistrictContent(city.name, district.name);

    // Comprehensive FAQs for District
    const districtFaqs = [
        {
            question: `${district.name} Belediyesi iskan başvurusu ve sorgulaması nasıl yapılır?`,
            answer: `${district.name} Belediyesi İmar ve Şehircilik / Yapı Kontrol Müdürlüğü arşivlerinden ada-parsel veya tapu bilgileriyle sorgulama yapılabilir. Uzman ekibimiz sizin adınıza resmi arşiv dosyasını inceleyerek 24-48 saat içinde rapor sunar.`
        },
        {
            question: `${district.name} bölgesinde iskansız (kat irtifaklı) daire almanın riskleri nelerdir?`,
            answer: `${district.name} sınırlarında iskanı alınmamış binalarda şantiye elektriği/suyu tarifesi, banka konut kredisi engeli, kat mülkiyetine geçememe ve projeye aykırı imalat varsa belediye encümen para cezası veya yıkım kararı riski bulunur.`
        },
        {
            question: `${district.name} iskan masrafları ve harçları ne kadar?`,
            answer: `${district.name} bölgesindeki emlak rayiç bedelleri, bina inşaat sınıfı ve toplam metrekareye göre belediye harçları değişiklik gösterir. Detaylı arşiv ve harç incelemesi için form üzerinden başvurabilirsiniz.`
        },
        {
            question: `${city.name} ${district.name} imar durumu belgesi nasıl öğrenilir?`,
            answer: `Parselin TAKS, KAKS (emsal), kat adedi ve çekme mesafeleri ${district.name} Belediyesi güncel uygulama imar planından incelenerek detaylı İmar Durum Raporu halinde tarafınıza sunulur.`
        }
    ];

    // Links to Neighborhoods (if available)
    const neighborhoodLinks = (district.neighborhoods || []).map(n => ({
        label: `${n.charAt(0).toUpperCase() + n.slice(1)} Mahallesi İskan`,
        href: `/${city.slug}/${district.slug}/${n}/iskanli-mi`
    }));

    // Official terminology link + General Questions for District
    const officialLink = {
        label: `${city.name} ${district.name} Yapı Kullanma İzin Belgesi`,
        href: `/${city.slug}-${district.slug}-yapi-kullanma-izin-belgesi-sorgulama`
    };

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
                { label: city.name, href: `/${city.slug}` },
                { label: district.name, href: `/${city.slug}/${district.slug}` }
            ]}
            relatedLinks={[officialLink, ...neighborhoodLinks, ...questionLinks]}
            location={{ city: city.name, district: district.name }}
        />
    );
};

export default DistrictPage;
