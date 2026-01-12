import { useParams } from 'react-router-dom';
import QuestionPageTemplate from '@/components/QuestionPageTemplate';
import { cities, questionTypes } from '@/data/locations';

const AdaParselPage = () => {
  const { ada, parsel } = useParams<{ ada: string; parsel: string }>();
  
  const adaNum = ada || '0';
  const parselNum = parsel || '0';

  const title = `Ada ${adaNum} Parsel ${parselNum} İskan Durumu`;
  const h1 = `Ada ${adaNum} Parsel ${parselNum} İskan Durumu Sorgulama`;
  const metaDescription = `Ada ${adaNum} parsel ${parselNum} için iskan durumu sorgulaması. İskanlı mı, iskansız mı öğrenin. Belediyeden araştırma yapılır.`;

  const content = `Ada ${adaNum} parsel ${parselNum} numaralı taşınmazın iskan durumunu sorgulamak için belediye arşivlerinden araştırma yapılması gerekmektedir. Ada ve parsel numaraları, bir gayrimenkulün kadastral kimliğidir ve iskan sorgulaması için en kesin yöntemdir. Bu numaralar ile ilgili belediyenin arşivlerinden yapının tüm ruhsat ve iskan bilgilerine ulaşılabilir.`;

  const faqs = [
    { 
      question: `Ada ${adaNum} parsel ${parselNum} iskanlı mı?`, 
      answer: `Bu bilgi ancak ilgili belediye arşivlerinden sorgulanarak öğrenilebilir. Tapu yükleyerek uzmanlarımızdan araştırma talep edebilirsiniz.` 
    },
    { 
      question: `Ada parsel numarası nereden öğrenilir?`, 
      answer: `Tapu senedi, e-devlet TAKBİS sistemi veya Parsel Sorgulama uygulamasından ada parsel numarası öğrenilebilir.` 
    },
    { 
      question: `Ada parsel ile hangi bilgiler sorgulanır?`, 
      answer: `Yapı ruhsatı, iskan durumu, imar durumu, bina yaşı ve kat sayısı gibi bilgiler sorgulanabilir.` 
    },
    { 
      question: `İskan durumu ne kadar sürede öğrenilir?`, 
      answer: `Belediye arşivlerinden yapılan araştırma genellikle 24-48 saat içinde tamamlanır.` 
    },
  ];

  // Related links
  const questionLinks = questionTypes.slice(0, 4).map(q => ({
    label: q.title,
    href: `/${q.slug}`
  }));

  const cityLinks = cities.slice(0, 3).map(city => ({
    label: `${city.name} İskan Sorgulama`,
    href: `/${city.slug}/iskan-sorgulama`
  }));

  return (
    <QuestionPageTemplate
      title={title}
      h1={h1}
      metaDescription={metaDescription}
      content={content}
      faqs={faqs}
      breadcrumbs={[
        { label: 'Ada Parsel Sorgulama', href: '/ada-parsel-ile-iskan' },
        { label: `Ada ${adaNum} Parsel ${parselNum}`, href: `/ada-parsel/${adaNum}/${parselNum}/iskan-durumu` }
      ]}
      relatedLinks={[...questionLinks, ...cityLinks]}
      adaParsel={{ ada: adaNum, parsel: parselNum }}
    />
  );
};

export default AdaParselPage;
