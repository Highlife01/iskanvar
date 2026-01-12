import { Building2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PHONE_NUMBER = "905320550945";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-6xl">
      <div className="glass-card px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 transform -rotate-3">
            <Building2 className="text-primary-foreground" size={24} />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-foreground">
            iskan<span className="text-primary">var</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <Link to="/hizmetler" className="text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Hizmetler
          </Link>
          <Link to="/hakkimizda" className="text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Hakkımızda
          </Link>
          <Link to="/blog" className="text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Blog
          </Link>
          <Link to="/ik" className="text-[13px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Kariyer
          </Link>
          <Link to="/#form" className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full text-[13px] font-extrabold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all shadow-lg shadow-slate-200">
            Başvuru Yap
          </Link>
        </div>

        <a
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("merhaba iskanvar sitesinden ulaşıyorum")}`}
          className="lg:hidden w-11 h-11 bg-emerald-500 text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-emerald-100"
        >
          <MessageCircle size={22} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
