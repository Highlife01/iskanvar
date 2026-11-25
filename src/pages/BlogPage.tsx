import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FirmanexBanner1, FirmanexBanner5 } from '../components/FirmanexBanners';

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />
            <Helmet>
                <title>Blog - İskan ve İmar Rehberi | İskanvar.com.tr</title>
                <meta name="description" content="İskan, imar, tapu ve gayrimenkul hukuku hakkında güncel bilgiler, rehberler ve uzman görüşleri." />
                <link rel="canonical" href="https://www.iskanvar.com.tr/blog" />
                <meta property="og:title" content="Blog - İskan ve İmar Rehberi" />
                <meta property="og:description" content="İskan, imar, tapu ve gayrimenkul hukuku hakkında güncel bilgiler, rehberler ve uzman görüşleri." />
                <meta property="og:url" content="https://iskanvar.com.tr/blog" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://iskanvar.com.tr/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-primary pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        İskan ve İmar Rehberi
                    </h1>
                    <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Gayrimenkul işlemlerinizde ihtiyacınız olan tüm teknik ve hukuki bilgiler.
                    </p>
                </div>
            </section>

            <FirmanexBanner1 className="mt-10" />

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 group border border-slate-100 flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder */}
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                                    loading="lazy"
                                    fetchPriority="high"
                                    onError={(e) => {
                                        // Fallback if image not found
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/e0e7ff/3730a3?text=IskanVar';
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider z-20">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                                    {post.summary}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-indigo-700 transition-colors"
                                    >
                                        Devamını Oku <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <FirmanexBanner5 />
            <Footer />
        </div>
    );
};

export default BlogPage;
