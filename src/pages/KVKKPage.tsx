import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, FileText, Lock } from "lucide-react";

const KVKKPage = () => {
    return (
        <>
            <Helmet>
                <title>KVKK Aydınlatma Metni | iskanvar</title>
                <meta name="description" content="iskanvar.com.tr Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni." />
                <link rel="canonical" href="https://www.iskanvar.com.tr/kvkk" />
            </Helmet>

            <div className="min-h-screen bg-background text-foreground font-sans">
                <Navbar />

                <main className="pt-32 pb-20 px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <header className="space-y-6">
                            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary">
                                <ShieldCheck size={32} />
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight">KVKK Aydınlatma Metni</h1>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Kişisel verilerinizin güvenliği ve gizliliği bizim için en öncelikli konudur.
                            </p>
                        </header>

                        <section className="prose prose-slate max-w-none space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <FileText className="text-primary" size={24} />
                                    1. Veri Sorumlusu
                                </h2>
                                <p className="text-slate-700 leading-loose">
                                    6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca, iskanvar.com.tr olarak, kişisel verilerinizi aşağıda açıklanan kapsamda işleyebilmekteyiz.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold flex items-center gap-3">
                                    <Lock className="text-primary" size={24} />
                                    2. Kişisel Verilerin İşlenme Amacı
                                </h2>
                                <p className="text-slate-700 leading-loose">
                                    Toplanan kişisel verileriniz, iskan ve imar durumu araştırma danışmanlık hizmetlerimizin sunulması, taleplerinizin yönetilmesi, yasal yükümlülüklerimizin yerine getirilmesi ve iletişim faaliyetlerinin yürütülmesi amaçlarıyla işlenmektedir.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-4xl border border-slate-100">
                                <h3 className="font-bold mb-4">İşlenen Veri Türleri:</h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>• Ad Soyad ve İletişim Bilgileri (Telefon, E-posta)</li>
                                    <li>• Tapu Bilgileri ve İlgili Gayrimenkul Dokümanları</li>
                                    <li>• Talep ve Başvuru Detayları</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">3. Verilerin Aktarımı</h2>
                                <p className="text-slate-700 leading-loose">
                                    Kişisel verileriniz, kanunen yetkili kamu kurum ve kuruluşları ile hizmet ifası için gerekli olan iş ortaklarımız (belediye takip uzmanları vb.) dışında üçüncü şahıslarla asla paylaşılmaz.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">4. Veri Sahibi Hakları</h2>
                                <p className="text-slate-700 leading-loose">
                                    Kanun'un 11. maddesi uyarınca, veri sahibi olarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve verilerinizin silinmesini talep etme haklarına sahipsiniz.
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

export default KVKKPage;
