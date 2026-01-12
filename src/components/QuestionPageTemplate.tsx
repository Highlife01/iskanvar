import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, FileCheck, ChevronRight, MapPin, Building2, Search, FileText, ShieldCheck } from 'lucide-react';
import FAQSchema from './seo/FAQSchema';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import { useState, FormEvent, ChangeEvent } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface QuestionPageProps {
  title: string;
  h1: string;
  metaDescription: string;
  content: string;
  faqs: FAQ[];
  breadcrumbs: { label: string; href: string }[];
  relatedLinks?: { label: string; href: string }[];
  location?: {
    city?: string;
    district?: string;
    neighborhood?: string;
  };
  adaParsel?: {
    ada: string;
    parsel: string;
  };
}

const QuestionPageTemplate = ({
  title,
  h1,
  metaDescription,
  content,
  faqs,
  breadcrumbs,
  relatedLinks = [],
  location,
  adaParsel
}: QuestionPageProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', phone: '' });

  const pageUrl = typeof window !== 'undefined' ? window.location.href.replace('http://', 'https://').replace('iskanvar.com.tr', 'www.iskanvar.com.tr') : '';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Redirect to main form
    window.location.href = '/#form';
  };

  // Generate location-specific content
  const locationText = location ?
    `${location.neighborhood ? location.neighborhood + ' Mahallesi, ' : ''}${location.district ? location.district + ', ' : ''}${location.city || ''}` : '';

  const dynamicContent = location ?
    content.replace(/bir binada|Bir binada/g, `${locationText} bölgesinde bir binada`) :
    adaParsel ?
      content.replace(/bir binada|Bir binada/g, `Ada ${adaParsel.ada} Parsel ${adaParsel.parsel} numaralı taşınmazda`) :
      content;

  return (
    <>
      <Helmet>
        <title>{title} | iskanvar.com.tr</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <FAQSchema
        faqs={faqs}
        pageUrl={pageUrl}
        articleTitle={h1}
        articleDescription={metaDescription}
      />

      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar />

        {/* Breadcrumbs */}
        <nav className="pt-32 pb-6 px-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Content Side */}
              <div className="space-y-8">
                {location && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-sm font-bold text-primary">
                    <MapPin size={16} />
                    {locationText}
                  </div>
                )}

                {adaParsel && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-sm font-bold text-emerald-600">
                    <Building2 size={16} />
                    Ada: {adaParsel.ada} | Parsel: {adaParsel.parsel}
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  {h1}
                </h1>

                <article className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {dynamicContent}
                  </p>
                </article>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-primary">
                      <Search size={20} />
                    </div>
                    <span className="text-sm font-bold text-foreground">Hızlı Sorgulama</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      <FileText size={20} />
                    </div>
                    <span className="text-sm font-bold text-foreground">Detaylı Rapor</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-slate-100">
                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-sm font-bold text-foreground">Güvenilir Sonuç</span>
                  </div>
                </div>

                {/* City Specific Municipal Contact Block */}
                {location && (
                  <div className="mt-12 p-8 bg-indigo-50/50 rounded-4xl border border-indigo-100/50">
                    <h2 className="text-xl font-extrabold text-foreground mb-4">
                      {location.city} Belediyesi Bilgileri
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {location.city} sınırlarındaki yapı kullanma izin belgesi (iskan) işlemleri için {location.city} Belediyesi İmar ve Şehircilik Müdürlüğü ile iletişime geçebilirsiniz.
                      {location.district ? ` ${location.district} ilçesindeki taşınmazlar için ${location.district} Belediyesi yetkilidir.` : ''}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100">
                        📍 İmar Müdürlüğü Ziyareti
                      </div>
                      <div className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100">
                        📞 Telefon ile Bilgi
                      </div>
                      <div className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100">
                        🌐 E-Belediye Sorgulama
                      </div>
                    </div>
                  </div>
                )}

                {/* Required Documents Block */}
                <div className="mt-8 p-8 bg-slate-50 rounded-4xl border border-slate-100">
                  <h2 className="text-xl font-extrabold text-foreground mb-4">İskan İçin Gerekli Belgeler</h2>
                  <ul className="space-y-3">
                    {[
                      'Yapı Kullanma İzni İstem Dilekçesi',
                      'Tapu Kaydı Örneği',
                      'Vergi İlişiği Kesildi Belgesi',
                      'Dış Cephe Fotoğrafları (13x18 cm)',
                      'Asansörlü binalar için Asansör İşletme Ruhsatı',
                      'SGK Borcu Yoktur Yazısı'
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Form Side */}
              <div className="bg-card rounded-7xl p-8 md:p-10 shadow-card border border-slate-50 sticky top-32">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-2xl font-extrabold text-foreground">Almayı düşündüğünüz dairenin tapusunu yükleyin</h2>
                    <p className="text-muted-foreground text-sm">İskan durumu sizin adınıza araştırılsın.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">Ad Soyad</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Adınız Soyadınız"
                        className="form-input text-sm py-4"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">WhatsApp No</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="05xx xxx xx xx"
                        className="form-input text-sm py-4"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground">Tapu Belgesi</label>
                      <div className="relative">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept="image/*,application/pdf"
                          className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                        />
                        <div className={`upload-zone py-8 ${file ? 'upload-zone-filled' : 'upload-zone-empty'}`}>
                          {file ? (
                            <div className="flex items-center justify-center gap-3 text-primary font-bold">
                              <FileCheck size={24} />
                              <span className="text-xs">{file.name}</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-3 text-muted-foreground">
                              <Upload size={24} />
                              <span className="text-sm font-medium">Tapu yükle</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <input
                        type="checkbox"
                        required
                        id="q-consent"
                        name="consent"
                        className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                      />
                      <label htmlFor="q-consent" className="text-[10px] text-muted-foreground leading-relaxed font-bold uppercase select-none cursor-pointer">
                        <span className="text-primary hover:underline italic">KVKK Aydınlatma Metni</span>'ni okudum. Adıma resmi araştırma yapılmasını kabul ediyorum.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-primary text-primary-foreground rounded-4xl font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-button"
                    >
                      <span className="flex items-center gap-2">👉 İskan Durumunu Araştır</span> <ArrowRight size={22} />
                    </button>
                  </form>

                  <div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100 text-[9px] text-slate-500 leading-relaxed">
                    <h4 className="font-extrabold uppercase mb-1 text-slate-700">Yasal Uyarı</h4>
                    <p className="mb-2">
                      iskanvar.com.tr özel bir platformdur, kamu kurumu değildir. Sunulan hizmetler takip ve danışmanlık amaçlıdır.
                    </p>
                    <div className="font-extrabold text-primary flex items-center gap-1.5">
                      <div className="w-1 h-1 bg-primary rounded-full" />
                      Yetki Belge No: 0100277
                    </div>
                  </div>

                  <p className="text-[10px] text-muted-foreground/60 italic leading-tight">
                    Bu hizmet resmi belediye sorgusu değildir. Girilen bilgilere göre ön inceleme ve araştırma yapılır. Kesin bilgiler ilgili belediyelerden temin edilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* FAQ Section */}
        <section className="px-6 py-20 bg-slate-50/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground mb-10 text-center">Sıkça Sorulan Sorular</h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card rounded-3xl border border-slate-100 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-foreground pr-4">{faq.question}</h3>
                    <ChevronRight size={20} className="text-muted-foreground transition-transform group-open:rotate-90 shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links / Internal Linking */}
        {relatedLinks.length > 0 && (
          <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-extrabold text-foreground mb-8">İlgili Sayfalar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    className="p-5 bg-card rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group flex items-center justify-between"
                  >
                    <span className="font-bold text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                    <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Legal Disclaimer */}
        <section className="px-6 py-12 bg-amber-50/50 border-t border-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-amber-900/70 font-medium leading-relaxed">
              <strong>Hukuki Uyarı:</strong> Bu hizmet resmi belediye sorgusu değildir.
              Girilen bilgilere göre ön inceleme ve araştırma yapılır.
              Kesin bilgiler ilgili belediyelerden temin edilir.
            </p>
          </div>
        </section>

        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
};

export default QuestionPageTemplate;
