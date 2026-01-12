import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Helmet } from "react-helmet-async";
import { Scale, AlertTriangle, ShieldCheck } from "lucide-react";

const TermsPage = () => {
    return (
        <>
            <Helmet>
                <title>Kullanım Koşulları | iskanvar</title>
                <meta name="description" content="iskanvar.com.tr web sitesi kullanım koşulları ve yasal uyarılar." />
                <link rel="canonical" href="https://www.iskanvar.com.tr/kullanim-kosullari" />
            </Helmet>

            <div className="min-h-screen bg-background text-foreground font-sans">
                <Navbar />

                <main className="pt-32 pb-20 px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <header className="space-y-6">
                            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                                <Scale size={32} />
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight">Kullanım Koşulları</h1>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Web sitemizi kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
                            </p>
                        </header>

                        <div className="bg-amber-50 p-8 rounded-4xl border border-amber-100 flex gap-6 items-start">
                            <AlertTriangle className="text-amber-600 shrink-0" size={28} />
                            <div className="space-y-2">
                                <h3 className="font-extrabold text-amber-900 uppercase text-xs tracking-widest">Önemli Yasal Uyarı</h3>
                                <p className="text-amber-800 text-sm leading-relaxed font-medium">
                                    iskanvar.com.tr bir kamu kuruluşu değildir. Ücretli danışmanlık hizmeti veren özel bir girişimdir. Sitedeki hiçbir bilgi resmi evrak yerine geçmez.
                                </p>
                            </div>
                        </div>

                        <section className="prose prose-slate max-w-none space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">1. Hizmet Kapsamı</h2>
                                <p className="text-slate-700 leading-loose">
                                    Sunulan hizmetler, kullanıcılar tarafından iletilen bilgiler doğrultusunda belediye arşivlerinde ve tapu kayıtlarında yapılan ön inceleme, takip ve raporlama faaliyetlerini kapsar. Bu raporlar bilgilendirme amaçlıdır.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">2. Sorumluluk Reddi</h2>
                                <p className="text-slate-700 leading-loose">
                                    iskanvar.com.tr, resmi kurumların sistemlerinden kaynaklanan gecikmelerden veya hatalı verilerden sorumlu tutulamaz. Kesin ve hukuki bağlayıcılığı olan bilgi için ilgili belediyelere başvurulmalıdır.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">3. Ödeme ve İptal</h2>
                                <p className="text-slate-700 leading-loose">
                                    Hizmet bedelleri araştırma süreci başlamadan önce tahsil edilir. Araştırma süreci (belediye ziyareti vb.) başladıktan sonra ücret iadesi yapılmamaktadır.
                                </p>
                            </div>

                            <div className="space-y-4 text-center py-12">
                                <ShieldCheck className="mx-auto text-primary mb-4" size={48} />
                                <h2 className="text-2xl font-bold">Güvenli Hizmet</h2>
                                <p className="text-slate-500 max-w-lg mx-auto italic">
                                    Tüm süreçlerimiz şeffaf bir şekilde yürütülmekte olup, danışmanlık hizmetimiz faturalandırılmaktadır.
                                </p>
                            </div>
                        </section>

                        <div className="pt-12 border-t border-slate-100 text-sm text-slate-400 italic">
                            Son Güncelleme: 1 Ocak 2026
                        </div>
                    </div>
                </main>

                <Footer />
                <WhatsAppWidget />
            </div>
        </>
    );
};

export default TermsPage;
