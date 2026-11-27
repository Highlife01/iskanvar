import { Helmet } from 'react-helmet-async';

interface LocalBusinessSchemaProps {
    name?: string;
    url?: string;
    telephone?: string;
    areaServed?: string;
    serviceTypes?: string[];
}

const LocalBusinessSchema = ({
    name = "İskanvar Gayrimenkul Danışmanlık",
    url = "https://www.iskanvar.com.tr",
    telephone = "+90-532-055-0945",
    areaServed = "Türkiye",
    serviceTypes = ["Bina İskan Araştırma", "İmar Durum Araştırma", "Tapu İnceleme ve Takyidat Analizi"]
}: LocalBusinessSchemaProps) => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": name,
        "url": url,
        "telephone": telephone,
        "image": "https://www.iskanvar.com.tr/pwa-512x512.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Levent Plaza, No:129",
            "addressLocality": "Beşiktaş",
            "addressRegion": "İstanbul",
            "addressCountry": "TR"
        },
        "areaServed": {
            "@type": "Country",
            "name": areaServed
        },
        "priceRange": "₺₺",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Gayrimenkul Danışmanlık Hizmetleri",
            "itemListElement": serviceTypes.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                    "@type": "Service",
                    "name": service
                }
            }))
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </Helmet>
    );
};

export default LocalBusinessSchema;
