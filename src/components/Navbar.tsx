import { useState } from 'react';
import { Building2, MessageCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const PHONE_NUMBER = "905320550945";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-6xl">
      <div className="glass-card px-6 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 transform -rotate-3">
            <Building2 className="text-primary-foreground" size={24} />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-foreground">
            iskan<span className="text-primary">var</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/hizmetler" className="text-[13px] font-extrabold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">
            Hizmetler
          </Link>
          <a href="/#ornek-rapor" className="text-[13px] font-extrabold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">
            Örnek Rapor
          </a>
          <a href="/#risk-testi" className="text-[13px] font-extrabold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">
            Risk Testi
          </a>
          <Link to="/blog" className="text-[13px] font-extrabold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">
            Blog
          </Link>
          <Link to="/hakkimizda" className="text-[13px] font-extrabold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">
            Hakkımızda
          </Link>
          <Link to="/ik" className="text-[13px] font-extrabold text-slate-700 hover:text-primary transition-colors uppercase tracking-widest">
            Kariyer
          </Link>
          <Link to="/#form" className="bg-slate-900 text-white px-7 py-3.5 rounded-full text-[13px] font-extrabold uppercase tracking-widest hover:bg-primary transition-all shadow-lg">
            Başvuru Yap
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2.5">
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Merhaba, iskanvar.com.tr sitesinden ulaşıyorum.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Destek Hattı"
            className="w-11 h-11 bg-emerald-500 text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-emerald-100"
          >
            <MessageCircle size={22} />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            className="w-11 h-11 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-md"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-slate-200 shadow-2xl p-6 flex flex-col gap-4 animate-fade-in"
        >
          <Link
            to="/hizmetler"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-extrabold text-slate-800 hover:text-primary uppercase tracking-wider py-2 border-b border-slate-100"
          >
            Hizmetler
          </Link>
          <a
            href="/#ornek-rapor"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-extrabold text-slate-800 hover:text-primary uppercase tracking-wider py-2 border-b border-slate-100"
          >
            Örnek Arşiv Raporu
          </a>
          <a
            href="/#risk-testi"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-extrabold text-slate-800 hover:text-primary uppercase tracking-wider py-2 border-b border-slate-100"
          >
            30 Sn İskan Risk Testi
          </a>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-extrabold text-slate-800 hover:text-primary uppercase tracking-wider py-2 border-b border-slate-100"
          >
            Blog & Rehber
          </Link>
          <Link
            to="/hakkimizda"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-extrabold text-slate-800 hover:text-primary uppercase tracking-wider py-2 border-b border-slate-100"
          >
            Hakkımızda
          </Link>
          <Link
            to="/ik"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-extrabold text-slate-800 hover:text-primary uppercase tracking-wider py-2 border-b border-slate-100"
          >
            Kariyer
          </Link>
          <Link
            to="/#form"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-primary text-white py-3.5 rounded-2xl text-sm font-extrabold uppercase tracking-widest shadow-lg mt-2"
          >
            Hemen Başvuru Yap
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
