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
    url = "https://iskanvar.com.tr",
    telephone = "+90-532-000-0000",
    areaServed = "Türkiye",
    serviceTypes = ["İskan Sorgulama", "İmar Durum Araştırma", "Tapu İşlemleri Takibi"]
}: LocalBusinessSchemaProps) => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": name,
        "url": url,
        "telephone": telephone,
        "address": {
            "@type": "PostalAddress",
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
