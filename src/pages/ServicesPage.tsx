import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Search, FileText, Building2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
    const services = [
        {
            title: "Bina İskan Araştırma",
            description: "Belediye arşivlerinden binanızın yapı kullanma izin belgesi durumunu sorgulayın.",
            icon: <Building2 className="w-8 h-8 text-primary" />,
            link: "/iskan-sorgulama",
            price: "3000 TL"
        },
        {
            title: "İmar Durum Araştırma",
            description: "Taşınmazınızın güncel imar durumunu, yapılaşma koşullarını ve kısıtlamalarını öğrenin.",
            icon: <MapPin className="w-8 h-8 text-emerald-600" />,
            link: "/imar-durumu-sorgulama",
            price: "3000 TL"
        },
        {
            title: "Tapu İnceleme",
            description: "Tapu kayıtlarındaki şerh, ipotek ve diğer takyidatların detaylı analizi.",
            icon: <FileText className="w-8 h-8 text-purple-600" />,
            link: "/tapu-inceleme",
            price: "2000 TL"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Hizmetlerimiz | İskan ve İmar Durumu Araştırma | iskanvar</title>
                <meta name="description" content="İskanvar olarak sunduğumuz bina iskan araştırma, imar durum sorgulama ve tapu inceleme hizmetleri hakkında detaylı bilgi alın." />
                <link rel="canonical" href="https://www.iskanvar.com.tr/hizmetler" />
            </Helmet>

            <div className="min-h-screen bg-background text-foreground font-sans">
                <Navbar />

                <main className="pt-32 pb-20 px-6">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <header className="text-center space-y-6">
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Hizmetlerimiz</h1>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Gayrimenkulünüzün yasal statüsünü netleştirmek için profesyonel araştırma ve danışmanlık hizmetleri sunuyoruz.
                            </p>
                        </header>

                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, idx) => (
                                <div key={idx} className="bg-card p-10 rounded-6xl border border-slate-100 shadow-card hover:shadow-lg transition-all space-y-6">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                            <span className="text-emerald-600 font-extrabold text-sm">{service.price}</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed italic">{service.description}</p>
                                        <Link to={service.link} className="inline-flex items-center gap-2 text-primary font-bold hover:underline group">
                                            Detaylı Bilgi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <section className="bg-slate-900 text-white rounded-7xl p-12 md:p-20 relative overflow-hidden">
                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Neden iskanvar?</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-lg text-white">Resmi Veri Odaklı</h4>
                                                <p className="text-slate-400">Tahminlerle değil, doğrudan belediye arşiv kayıtlarıyla çalışıyoruz.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Search className="w-6 h-6 text-indigo-400 shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-lg text-white">Uzman Analizi</h4>
                                                <p className="text-slate-400">Karmaşık imar dosyalarını gayrimenkul hukukuna uygun şekilde yorumluyoruz.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-4xl p-8 border border-white/20">
                                    <p className="text-indigo-100 italic text-lg leading-relaxed">
                                        "İskanvar ekibi sayesinde almayı düşündüğümüz dairenin üzerindeki yıkım kararını tapuda görünmemesine rağmen belediye arşivlerinden tespit ettik."
                                    </p>
                                    <p className="mt-6 text-white font-bold">— Bir Müşterimiz</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                <Footer />
                <WhatsAppWidget />
            </div>
        </>
    );
};

export default ServicesPage;
