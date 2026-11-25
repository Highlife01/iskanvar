import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { FirmanexBanner5, FirmanexBanner6 } from "@/components/FirmanexBanners";
import { Helmet } from "react-helmet-async";
import { Info, Target, Users, MapPin, Building2, Phone, Mail } from "lucide-react";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>Hakkımızda | iskanvar Gayrimenkul Denetim ve Danışmanlık</title>
                <meta name="description" content="İskanvar, gayrimenkul alım süreçlerinde iskan ve imar durumu araştırması yaparak alıcıları yasal risklere karşı koruyan profesyonel bir danışmanlık girişimidir." />
                <link rel="canonical" href="https://www.iskanvar.com.tr/hakkimizda" />
            </Helmet>

            <div className="min-h-screen bg-background text-foreground font-sans">
                <Navbar />

                <main className="pt-32 pb-20 px-6">
                    <div className="max-w-4xl mx-auto space-y-20">
                        <header className="space-y-6 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Hakkımızda</h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Gayrimenkul dünyasındaki belirsizlikleri resmi verilerle ortadan kaldırıyoruz.
                            </p>
                        </header>

                        <section className="space-y-8">
                            <div className="flex items-center gap-4 text-primary">
                                <Target size={32} />
                                <h2 className="text-3xl font-bold">Misyonumuz</h2>
                            </div>
                            <p className="text-lg text-slate-700 leading-loose">
                                iskanvar, gayrimenkul satın alma aşamasındaki vatandaşların en büyük korkusu olan "iskansız bina" veya "kaçak yapı" riskini minimize etmek amacıyla kurulmuştur. E-devlet kayıtlarının her zaman güncel olmayabildiği ülkemizde, biz doğrudan belediye arşivlerine inerek mülkünüzün gerçek yasal statüsünü raporluyoruz.
                            </p>
                        </section>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-indigo-50 p-10 rounded-5xl border border-indigo-100 space-y-4">
                                <Building2 className="text-primary w-10 h-10" />
                                <h3 className="text-xl font-bold">Resmi Şeffaflık</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Sarıyer Vergi Dairesi'ne bağlı, şeffaf ve faturalı danışmanlık sunuyoruz.</p>
                            </div>
                            <div className="bg-emerald-50 p-10 rounded-5xl border border-emerald-100 space-y-4">
                                <Users className="text-emerald-600 w-10 h-10" />
                                <h3 className="text-xl font-bold">Uzman Kadro</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">İmar hukukuna hakim şehir plancıları ve harita mühendisleri ile çalışıyoruz.</p>
                            </div>
                        </div>

                        <section className="space-y-10">
                            <div className="flex items-center gap-4 text-primary">
                                <MapPin size={32} />
                                <h2 className="text-3xl font-bold">Merkez Ofisimiz</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <p className="text-lg text-slate-700">
                                        İstanbul'un kalbinde, Beşiktaş Levent bölgesinde hizmet vermekteyiz.
                                    </p>
                                    <ul className="space-y-4 text-slate-600 font-medium">
                                        <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> Levent Plaza, No:129 Beşiktaş / İstanbul</li>
                                        <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> 0532 055 09 45</li>
                                        <li className="flex items-center gap-3"><Mail size={18} className="text-primary" /> cebokar@gmail.com</li>
                                    </ul>
                                    <div className="pt-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 text-[11px] uppercase tracking-widest font-extrabold text-slate-400">
                                        Yetki Belge No: 0100277
                                    </div>
                                </div>
                                <div className="rounded-4xl overflow-hidden shadow-2xl h-[300px] border-4 border-white">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.838528775267!2d29.006932476572183!3d41.07724397134098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6fca1be1f3f%3A0x6b6ccdf9849200f5!2sLevent%20Plaza!5e0!3m2!1str!2str!4v1704130000000!5m2!1str!2str"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>

                <FirmanexBanner5 />
                <FirmanexBanner6 variant="horizontal" />

                <Footer />
                <WhatsAppWidget />
            </div>
        </>
    );
};

export default AboutPage;
