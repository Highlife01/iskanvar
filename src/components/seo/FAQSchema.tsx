import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  pageUrl: string;
  articleTitle: string;
  articleDescription: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const FAQSchema = ({ 
  faqs, 
  pageUrl, 
  articleTitle, 
  articleDescription,
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split('T')[0],
  breadcrumbs = []
}: FAQSchemaProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleTitle,
    "description": articleDescription,
    "url": pageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": "iskanvar",
      "url": "https://www.iskanvar.com.tr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "iskanvar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iskanvar.com.tr/pwa-512x512.png"
      }
    }
  };

  const normalizedCrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://www.iskanvar.com.tr/"
    },
    ...breadcrumbs
      .filter(b => b.href !== '/')
      .map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": crumb.label,
        "item": crumb.href.startsWith('http')
          ? crumb.href
          : `https://www.iskanvar.com.tr${crumb.href.startsWith('/') ? '' : '/'}${crumb.href}`
      }))
  ];

  if (normalizedCrumbItems.length === 1) {
    normalizedCrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": articleTitle,
      "item": pageUrl
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": normalizedCrumbItems
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": articleTitle,
    "description": articleDescription,
    "provider": {
      "@type": "Organization",
      "name": "İskanvar Gayrimenkul Danışmanlık",
      "url": "https://www.iskanvar.com.tr"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    },
    "offers": {
      "@type": "Offer",
      "price": "3000",
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "url": pageUrl || "https://www.iskanvar.com.tr/"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
