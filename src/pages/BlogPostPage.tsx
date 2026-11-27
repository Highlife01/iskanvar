import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog-posts';
import { Calendar, Clock, ArrowLeft, Share2, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import ContactForm from '../components/ContactForm';
import SuccessView from '../components/SuccessView';
import { toast } from '@/hooks/use-toast';
import { FirmanexBanner3, FirmanexBanner6 } from '../components/FirmanexBanners';

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);
    const [copied, setCopied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedPhone, setSubmittedPhone] = useState('');

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    const handleShare = async () => {
        const shareUrl = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({ title: post.title, text: post.summary, url: shareUrl });
                return;
            } catch {
                // Fallback to clipboard
            }
        }
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            toast({ title: "Bağlantı Kopyalandı", description: "Yazı bağlantısı panoya kopyalandı." });
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // Ignore clipboard errors
        }
    };

    const handleFormSubmit = async (data: any, file: File | null) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('fullName', data.fullName);
            formData.append('phone', data.phone);
            formData.append('email', data.email);
            formData.append('city', data.city);
            formData.append('district', data.district);
            formData.append('serviceType', data.serviceType || 'iskan');
            formData.append('pageUrl', window.location.href);
            formData.append('consent', 'true');
            if (file) {
                formData.append('file', file);
            }

            const response = await fetch('/api/send-email', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Başvuru gönderilemedi.');

            toast({ title: "Başvuru Alındı", description: "Talebiniz başarıyla işleme alındı." });
            setSubmittedPhone(data.phone);
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error: any) {
            toast({
                title: "Hata",
                description: error.message || "Bir hata oluştu. Lütfen tekrar deneyin.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return <SuccessView phone={submittedPhone} onReset={() => setIsSubmitted(false)} />;
    }

    // Basic structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [
            `https://iskanvar.com.tr${post.image}`
        ],
        "datePublished": "2024-12-29T08:00:00+03:00", // Approximate
        "description": post.summary,
        "author": {
            "@type": "Organization",
            "name": "İskanvar.com.tr"
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />
            <Helmet>
                <title>{post.title} | İskanvar Blog</title>
                <meta name="description" content={post.summary} />
                <link rel="canonical" href={`https://www.iskanvar.com.tr/blog/${post.slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            {/* Header Image/Title */}
            <section className="bg-primary text-white pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-200 hover:text-white transition-colors mb-8 font-bold text-sm">
                        <ArrowLeft size={16} /> Blog'a Dön
                    </Link>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-indigo-200 font-semibold text-sm">
                            <span className="bg-indigo-500/30 px-3 py-1 rounded-full uppercase tracking-wider text-xs border border-indigo-400/30">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    <img
                        src={post.image}
                        alt={`İskanvar Blog: ${post.title}`}
                        className="w-full h-[400px] object-cover"
                        loading="lazy"
                        fetchPriority="high"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/1200x600/e0e7ff/3730a3?text=IskanVar';
                        }}
                    />

                    <div className="p-8 md:p-14">
                        <div
                            className="prose prose-lg prose-slate max-w-none 
                  prose-headings:font-extrabold prose-headings:text-slate-900 
                  prose-p:text-slate-600 prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 prose-strong:font-bold
                  prose-li:text-slate-600"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                            <div className="font-bold text-slate-900">
                                Paylaş:
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={handleShare}
                                    aria-label="Yazıyı Paylaş"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-700 text-sm font-bold"
                                >
                                    {copied ? <Check size={18} className="text-emerald-600" /> : <Share2 size={18} />}
                                    {copied ? 'Kopyalandı' : 'Bağlantıyı Paylaş'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <FirmanexBanner3 />
            <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
            <FirmanexBanner6 variant="horizontal" />
            <Footer />
            <WhatsAppWidget topic={post.title} />
        </div>
    );
};

export default BlogPostPage;
