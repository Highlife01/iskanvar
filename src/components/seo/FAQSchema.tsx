import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
  pageUrl: string;
  articleTitle: string;
  articleDescription: string;
  datePublished?: string;
  dateModified?: string;
}

const FAQSchema = ({ 
  faqs, 
  pageUrl, 
  articleTitle, 
  articleDescription,
  datePublished = "2024-01-01",
  dateModified = new Date().toISOString().split('T')[0]
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
      "url": "https://iskanvar.com.tr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "iskanvar",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iskanvar.com.tr/logo.png"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://iskanvar.com.tr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": articleTitle,
        "item": pageUrl
      }
    ]
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
    </Helmet>
  );
};

export default FAQSchema;
