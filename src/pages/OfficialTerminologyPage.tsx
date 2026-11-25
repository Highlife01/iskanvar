import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight, CheckCircle2, MapPin, Info, AlertTriangle, FileText, Search } from 'lucide-react';
import { allCities } from '@/data/all-locations';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CitiesGrid from '@/components/CitiesGrid';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import ContactForm from '@/components/ContactForm';
import SuccessView from '@/components/SuccessView';
import {
    FirmanexBanner2,
    FirmanexBanner4,
} from '@/components/FirmanexBanners';
import NotFound from './NotFound';

const OfficialTerminologyPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedPhone, setSubmittedPhone] = useState('');

    const handleFormSubmit = async (data: any, file: File | null) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('fullName', data.fullName);
            formData.append('phone', data.phone);
            formData.append('email', data.email);
            formData.append('city', data.city);
            formData.append('district', data.district);
            formData.append('consent', 'true');
            if (file) {
                formData.append('file', file);
            }

            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Failed to send email');

            setSubmittedPhone(data.phone);
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error: any) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setSubmittedPhone('');
    };

    // Parse IL and ILCE from slug
    let cityName = '';
    let districtName = '';
    let cityObj = null;
    let districtObj = null;

    if (!slug) return <NotFound />;

    if (slug.endsWith('-yapi-kullanma-izin-belgesi-sorgulama')) {
        // District format: {city}-{district}-yapi-kullanma-izin-belgesi-sorgulama
        const core = slug.replace('-yapi-kullanma-izin-belgesi-sorgulama', '');

        // Find matching city and district
        for (const c of allCities) {
            if (core.startsWith(c.slug + '-')) {
                const dSlug = core.replace(c.slug + '-', '');
                const d = c.districts.find(district => district.slug === dSlug);
                if (d) {
                    cityObj = c;
                    districtObj = d;
                    cityName = c.name;
                    districtName = d.name;
                    break;
                }
            }
        }
    } else if (slug.endsWith('-yapi-kullanma-izin-belgesi')) {
        // City format: {city}-yapi-kullanma-izin-belgesi
        const cSlug = slug.replace('-yapi-kullanma-izin-belgesi', '');
        const c = allCities.find(city => city.slug === cSlug);
        if (c) {
            cityObj = c;
            cityName = c.name;
        }
    }

    if (!cityObj) return <NotFound />;

    const isDistrict = !!districtObj;
    const locationName = isDistrict ? `${cityName} ${districtName}` : cityName;
    const canonicalPath = isDistrict
        ? `/${cityObj.slug}-${districtObj.slug}-yapi-kullanma-izin-belgesi-sorgulama`
        : `/${cityObj.slug}-yapi-kullanma-izin-belgesi`;
    const pageUrl = `https://www.iskanvar.com.tr${canonicalPath}`;

    if (isSubmitted) {
        return <SuccessView phone={submittedPhone} onReset={handleReset} />;
    }

    return (
        <>
            <Helmet>
                <title>{locationName} Yapı Kullanma İzin Belgesi (İskan) Sorgulama | iskanvar</title>
                <meta name="description" content={`${locationName} için resmi yapı kullanma izin belgesi (iskan) sorgulama rehberi. Binanızın iskan durumunu ${locationName} Belediyesi kayıtlarından sizin adınıza araştıralım.`} />
                <link rel="canonical" href={pageUrl} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <div className="min-h-screen bg-background text-foreground font-sans">
                <Navbar />

                {/* Breadcrumbs */}
                <nav className="pt-32 pb-6 px-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <li>
                            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={14} />
                            {isDistrict ? (
                                <Link to={`/${cityObj.slug}-yapi-kullanma-izin-belgesi`} className="hover:text-primary transition-colors">{cityName}</Link>
                            ) : (
                                <span className="text-foreground font-medium">{cityName}</span>
                            )}
                        </li>
                        {isDistrict && (
                            <li className="flex items-center gap-2">
                                <ChevronRight size={14} />
                                <span className="text-foreground font-medium">{districtName}</span>
                            </li>
                        )}
                    </ol>
                </nav>

                <main className="px-6 pb-20">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* H1 & Header */}
                        <header className="space-y-6 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                                {locationName} Yapı Kullanma İzin Belgesi Sorgulama
                            </h1>

                            <div className="bg-indigo-50 border-l-4 border-primary p-6 rounded-r-2xl">
                                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                    {locationName} sınırları içinde yer alan bir binanın <strong>Yapı Kullanma İzin Belgesi (iskan)</strong> durumunu öğrenmek, gayrimenkul alım ve kullanım süreçlerinde büyük önem taşır.
                                    iskanvar.com.tr olarak {locationName} bölgesindeki yapılar için uzman incelemeye dayalı sorgulama hizmeti sunuyoruz.
                                </p>
                            </div>
                        </header>

                        {/* Content Sections */}
                        <div className="grid gap-12 text-slate-700">

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                    <Info className="text-primary" />
                                    İskan Sorgulama Nedir?
                                </h2>
                                <p className="leading-loose text-lg">
                                    İskan sorgulama, bir binanın yasal olarak kullanıma uygun olup olmadığını öğrenmek için yapılan kontroldür. Bir yapının inşaatı tamamlandıktan sonra, belediye tarafından projeye uygunluğu incelenir. Yapı tüm şartları sağlıyorsa <strong>Yapı Kullanma İzin Belgesi (iskan)</strong> düzenlenir.
                                </p>
                                <p className="leading-loose text-lg">
                                    Halk arasında “oturma izni” olarak bilinen iskan belgesi, binanın resmî olarak yaşanabilir olduğunu gösterir. İskanı olmayan binalarda elektrik, su ve doğalgaz gibi abonelikler genellikle şantiye tarifesi üzerinden yapılır ya da hiç açılamaz. Bu nedenle iskan durumu, {locationName} bölgesindeki her mülk sahibi ve alıcı için kritik öneme sahiptir.
                                </p>
                            </section>

                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                    <Search className="text-primary" />
                                    İskan Sorgulama Nasıl Yapılır?
                                </h2>
                                <p className="leading-loose text-lg">
                                    {locationName} sınırları içinde bir binanın iskanlı olup olmadığını öğrenmenin birkaç farklı yolu vardır:
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-primary font-bold">1</div>
                                        <h3 className="font-bold">Tapu Üzerinden</h3>
                                        <p className="text-sm text-muted-foreground">Kat Mülkiyeti yazıyorsa bina iskanlıdır. Kat İrtifakı yazıyorsa henüz iskan almamıştır.</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-primary font-bold">2</div>
                                        <h3 className="font-bold">e-Devlet Üzerinden</h3>
                                        <p className="text-sm text-muted-foreground">TAKBİS sistemi üzerinden "Yapı Kullanma İzin Belgesi" araması yaparak sorgulama yapabilirsiniz.</p>
                                    </div>
                                    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-3">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-primary font-bold">3</div>
                                        <h3 className="font-bold">Belediyeden</h3>
                                        <p className="text-sm text-muted-foreground">{locationName} belediyesinin imar müdürlüğüne başvurarak resmi bilgi alabilirsiniz.</p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                    <FileText className="text-primary" />
                                    İskan Başvurusu İçin Gerekli Belgeler
                                </h2>
                                <p className="leading-loose text-lg">
                                    {locationName} belediyesine yapılacak başvurularda genellikle şu evraklar talep edilir:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-3 text-sm font-medium">
                                    {[
                                        "İskan başvuru dilekçesi",
                                        "Yapı denetim belgesi",
                                        "Isı yalıtım / enerji kimlik belgesi",
                                        "İş bitirme tutanağı",
                                        "İnşaat ruhsatı fotokopisi",
                                        "Tapu bilgileri",
                                        "Dış kanal bağlantı belgesi",
                                        "Vergi Dairesi & SGK \"borcu yoktur\" yazıları"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                            <CheckCircle2 size={16} className="text-primary" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 p-6 bg-amber-50 border border-amber-100 rounded-2xl">
                                    <h4 className="font-bold text-amber-900 mb-2">Asansörlü Binalar İçin Ek Belgeler:</h4>
                                    <p className="text-amber-800 text-sm italic">
                                        Asansör muayene raporları, TSE belgeleri, yangın tesisatı uygunluk raporu ve mühendis SMM belgeleri ayrıca sunulmalıdır.
                                    </p>
                                </div>
                            </section>

                            <section className="bg-slate-900 text-white p-8 md:p-12 rounded-4xl space-y-6 shadow-2xl relative overflow-hidden text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold">İskan Olmadan Ne Gibi Sorunlar Yaşanır?</h2>
                                <p className="text-indigo-200">İskanı olmayan bir bina veya daire ciddi riskler barındırır:</p>
                                <div className="grid md:grid-cols-2 gap-6 relative z-10 text-left">
                                    {[
                                        "Bankalar konut kredisi vermeyebilir",
                                        "Kat mülkiyeti alınamaz, tapu işlemleri eksik kalır",
                                        "Belediye ağır para cezaları uygulayabilir",
                                        "Elektrik ve su şantiye tarifesiyle pahalıya gelir",
                                        "Projeye aykırı alanlar için yıkım kararı çıkabilir"
                                    ].map((risk, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <AlertTriangle className="text-amber-400 shrink-0 mt-1" size={18} />
                                            <span className="font-medium">{risk}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-4 pt-8 border-t border-slate-100">
                                <h2 className="text-2xl font-bold text-foreground">Sık Sorulan Sorular</h2>
                                <div className="space-y-4">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="font-bold text-foreground mb-2">5 Yıl İçinde İskan Alınmazsa Ne Olur?</h3>
                                        <p className="text-slate-600">
                                            3194 sayılı İmar Kanunu’na göre, yapı ruhsatı alındıktan sonra inşaat 5 yıl içinde tamamlanmalı ve iskan alınmalıdır. Aksi halde ruhsat geçersiz olur ve yapı kaçak yapı statüsüne düşebilir. Bu durumda belediye para cezası veya yıkım kararı uygulayabilir.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="font-bold text-foreground mb-2">Kat İrtifaklı Tapu Ne Anlama Gelir?</h3>
                                        <p className="text-slate-600">
                                            Tapuda kat irtifakı yazıyorsa, bu yapı henüz iskan almamış demektir. İskan alındıktan sonra cins değişikliği yapılır ve tapu kat mülkiyetine çevrilir. Bu işlem {locationName} belediyesinin yerinde yaptığı inceleme sonrası gerçekleştirilir.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* CTA Section */}
                        <section className="py-12 px-8 bg-gradient-to-br from-primary to-indigo-800 rounded-4xl text-white text-center space-y-8 shadow-xl">
                            <h2 className="text-2xl md:text-4xl font-extrabold max-w-2xl mx-auto leading-tight">
                                {locationName} Yapı Kullanma İzin Belgesi Sorgula
                            </h2>
                            <p className="text-indigo-100 max-w-xl mx-auto">
                                Belirsizliklerle vakit kaybetmeyin. Profesyonel ekibimiz {locationName} bölgesindeki mülkünüzü en ince detayına kadar araştırsın.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#form" className="px-10 py-4 bg-white text-primary rounded-full font-extrabold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-lg hover:scale-105">
                                    Başvuruyu Başlat <ArrowRight size={20} />
                                </a>
                            </div>
                        </section>

                        {/* Form Section */}
                        <section id="form" className="pt-12">
                            <div className="bg-card rounded-4xl p-8 md:p-12 shadow-card border border-slate-50">
                                <ContactForm
                                    onSubmit={handleFormSubmit}
                                    isSubmitting={isSubmitting}
                                    initialCity={cityName}
                                    initialDistrict={districtName}
                                />
                            </div>
                        </section>
                    </div>
                </main>

                <FirmanexBanner2 city={cityName} district={districtName} />
                <FirmanexBanner4 />

                <CitiesGrid />
                <Footer />
                <WhatsAppWidget />
            </div>
        </>
    );
};

export default OfficialTerminologyPage;
