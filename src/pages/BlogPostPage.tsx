import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog-posts';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FirmanexBanner3, FirmanexBanner6 } from '../components/FirmanexBanners';

const BlogPostPage = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/404" replace />;
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
                                <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-600">
                                    <Share2 size={20} />
                                </button>
                                {/* Add real social share buttons if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <FirmanexBanner3 />
            <FirmanexBanner6 variant="horizontal" />
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-6 text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-slate-900">Uzman Desteği Alın</h2>
                    <p className="text-slate-600 mt-4 text-lg">Konu hakkında daha fazla bilgi almak veya işlem başlatmak için formumuzu doldurun.</p>
                </div>
                {/* Pass dummy props if needed, or if ContactForm handles logic itself */}
                {/* Note: In a real app we might want to lift the state or pass a specialized onSubmit */}
            </section>
            <Footer />
        </div>
    );
};

export default BlogPostPage;
