import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CoverageSection from '@/components/CoverageSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import SuccessView from '@/components/SuccessView';
import SampleReportSection from '@/components/SampleReportSection';
import IskanRiskCalculator from '@/components/IskanRiskCalculator';
import CitiesGrid from '@/components/CitiesGrid';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import HowToSchema, { IskanSorgulamaHowTo } from '@/components/seo/HowToSchema';
import {
  FirmanexBanner1,
  FirmanexBanner2,
  FirmanexBanner3,
  FirmanexBanner4,
  FirmanexBanner5,
  FirmanexBanner6,
} from '@/components/FirmanexBanners';
import { toast } from '@/hooks/use-toast';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  serviceType: string;
}

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedPhone, setSubmittedPhone] = useState('');

  const handleFormSubmit = async (data: FormData, file: File | null) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('city', data.city);
      formData.append('district', data.district);
      formData.append('serviceType', data.serviceType || 'iskan');
      formData.append('pageUrl', typeof window !== 'undefined' ? window.location.href : 'https://www.iskanvar.com.tr/');
      formData.append('consent', 'true');
      if (file) {
        formData.append('file', file);
      }

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      console.log('Form submitted successfully');

      toast({
        title: "Başvuru Alındı",
        description: "Talebiniz başarıyla işleme alındı.",
      });

      setSubmittedPhone(data.phone);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.error('Submission error:', error);
      toast({
        title: "Hata",
        description: error.message || "Bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedPhone('');
  };

  if (isSubmitted) {
    return <SuccessView phone={submittedPhone} onReset={handleReset} />;
  }

  return (
    <>
      <Helmet>
        <title>iskanvar - Resmi İskan Sorgulama ve Danışmanlık Hizmeti</title>
        <meta name="description" content="E-devlet kayıtları güncel olmayabilir. Biz doğrudan belediye arşivlerinden güncel iskan statüsünü raporluyoruz. Yapı Kullanma İzin Belgesi sorgulama hizmeti." />
        <meta name="keywords" content="iskan sorgulama, yapı kullanma izni, belediye arşiv, gayrimenkul danışmanlık, iskan belgesi" />
        <link rel="canonical" href="https://www.iskanvar.com.tr/" />
        <meta property="og:title" content="İskanvar - Resmi İskan Sorgulama ve Danışmanlık Hizmeti" />
        <meta property="og:description" content="E-devlet kayıtları güncel olmayabilir. Biz doğrudan belediye arşivlerinden güncel iskan statüsünü raporluyoruz. Yapı Kullanma İzin Belgesi sorgulama hizmeti." />
        <meta property="og:url" content="https://www.iskanvar.com.tr/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.iskanvar.com.tr/pwa-512x512.png" />
      </Helmet>

      <LocalBusinessSchema />
      <HowToSchema {...IskanSorgulamaHowTo} />

      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-indigo-100 overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <FirmanexBanner1 />
        <StatsSection />
        <SampleReportSection />
        <FirmanexBanner2 />
        <HowItWorksSection />
        <IskanRiskCalculator />
        <CoverageSection />
        <FirmanexBanner3 />
        <ServicesSection />
        <FirmanexBanner4 />
        <PricingSection />
        <TestimonialsSection />
        <FirmanexBanner5 />
        <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        <FirmanexBanner6 variant="horizontal" />
        <CitiesGrid />
        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
};

export default Index;
