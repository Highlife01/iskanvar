import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, ArrowRight, Upload, FileCheck, CheckCircle2 } from 'lucide-react';
import { findFAQBySlug, getRelatedFAQs, faqQuestions } from '@/data/faq-questions';
import FAQSchema from '@/components/seo/FAQSchema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CitiesGrid from '@/components/CitiesGrid';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import NotFound from './NotFound';
import { useState, FormEvent, ChangeEvent } from 'react';

const FAQQuestionPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({ fullName: '', phone: '' });

    const question = findFAQBySlug(slug || '');
    const relatedQuestions = slug ? getRelatedFAQs(slug) : [];

    if (!question) {
        return <NotFound />;
    }

    const pageUrl = `https://www.iskanvar.com.tr/iskan-sorulari/${slug}`;

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
        window.location.href = '/#form';
    };

    // Get more questions from same category
    const moreCategoryQuestions = faqQuestions
        .filter(q => q.category === question.category && q.slug !== slug)
        .slice(0, 4);

    // SEO FAQs for schema
    const schemaFaqs = [
        { question: question.question, answer: question.shortAnswer },
        ...relatedQuestions.slice(0, 2).map(rq => ({
            question: rq.question,
            answer: rq.shortAnswer
        }))
    ];

    return (
        <>
            <Helmet>
                <title>{question.question} | iskanvar.com.tr</title>
                <meta name="description" content={question.shortAnswer} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={question.question} />
                <meta property="og:description" content={question.shortAnswer} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="article" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <FAQSchema
                faqs={schemaFaqs}
                pageUrl={pageUrl}
                articleTitle={question.question}
                articleDescription={question.shortAnswer}
            />

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
                            <Link to="/iskan-sorgulama" className="hover:text-primary transition-colors">İskan Sorgulama</Link>
                        </li>
                        <li className="flex items-center gap-2">
                            <ChevronRight size={14} />
                            <span className="text-foreground font-medium">{question.question}</span>
                        </li>
                    </ol>
                </nav>

                {/* Main Content */}
                <main className="px-6 pb-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-12">

                            {/* Article Content */}
                            <article className="lg:col-span-2 space-y-8">
                                <header>
                                    <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
                                        {question.question}
                                    </h1>

                                    {/* Featured Snippet - Short Answer */}
                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-6 border border-indigo-100">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-foreground leading-relaxed">
                                                    {question.shortAnswer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </header>

                                {/* Detailed Answer */}
                                <section className="prose prose-lg max-w-none">
                                    <h2 className="text-xl font-extrabold text-foreground mb-4">Detaylı Bilgi</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {question.detailedAnswer}
                                    </p>
                                </section>

                                {/* Related Questions */}
                                {relatedQuestions.length > 0 && (
                                    <section className="space-y-4">
                                        <h2 className="text-xl font-extrabold text-foreground">İlgili Sorular</h2>
                                        <div className="space-y-3">
                                            {relatedQuestions.map((rq, i) => (
                                                <Link
                                                    key={i}
                                                    to={`/iskan-sorulari/${rq.slug}`}
                                                    className="block p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors group"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                                                            {rq.question}
                                                        </span>
                                                        <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                                        {rq.shortAnswer}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* More from Category */}
                                {moreCategoryQuestions.length > 0 && (
                                    <section className="space-y-4 pt-8 border-t border-slate-100">
                                        <h2 className="text-xl font-extrabold text-foreground">Benzer Konular</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {moreCategoryQuestions.map((mq, i) => (
                                                <Link
                                                    key={i}
                                                    to={`/iskan-sorulari/${mq.slug}`}
                                                    className="p-4 bg-card rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group flex items-center justify-between"
                                                >
                                                    <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">
                                                        {mq.question}
                                                    </span>
                                                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                                </Link>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </article>

                            {/* Sidebar CTA */}
                            <aside className="lg:col-span-1">
                                <div className="bg-card rounded-4xl p-6 md:p-8 shadow-card border border-slate-50 sticky top-32">
                                    <div className="space-y-5">
                                        <div className="text-center space-y-2">
                                            <h3 className="text-xl font-extrabold text-foreground">Binanızın İskanını Sorgulayalım</h3>
                                            <p className="text-muted-foreground text-sm">Tapu yükleyin, resmi kaynaklardan araştıralım.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    required
                                                    placeholder="Adınız Soyadınız"
                                                    className="form-input text-sm py-3"
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    placeholder="WhatsApp Numaranız"
                                                    className="form-input text-sm py-3"
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <input
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        accept="image/*,application/pdf"
                                                        className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                                                    />
                                                    <div className={`upload-zone py-6 ${file ? 'upload-zone-filled' : 'upload-zone-empty'}`}>
                                                        {file ? (
                                                            <div className="flex items-center justify-center gap-2 text-primary font-bold">
                                                                <FileCheck size={20} />
                                                                <span className="text-xs truncate max-w-[150px]">{file.name}</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                                                <Upload size={20} />
                                                                <span className="text-sm font-medium">Tapu Yükle</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full py-4 bg-primary text-primary-foreground rounded-3xl font-extrabold text-base flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-button"
                                            >
                                                <span>İskan Araştır</span>
                                                <ArrowRight size={18} />
                                            </button>
                                        </form>

                                        <p className="text-xs text-muted-foreground text-center">
                                            Resmi belediye sorgusu değildir. Ön inceleme hizmetidir.
                                        </p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </main>

                {/* Legal Disclaimer */}
                <section className="px-6 py-12 bg-amber-50/50 border-t border-amber-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm text-amber-900/70 font-medium leading-relaxed">
                            <strong>Hukuki Uyarı:</strong> Bu sayfa genel bilgi amaçlıdır ve hukuki danışmanlık niteliği taşımaz.
                            Kesin bilgi için ilgili belediye ve resmi kurumlarla iletişime geçiniz.
                        </p>
                    </div>
                </section>

                <CitiesGrid />
                <Footer />
                <WhatsAppWidget />
            </div>
        </>
    );
};

export default FAQQuestionPage;
