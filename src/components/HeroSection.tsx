import { Star, ArrowRight, ShieldCheck, FileText, CheckCircle2, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <header className="relative pt-52 pb-24 px-6 overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-100/40 blur-[140px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10 animate-slide-in-left">
          <div className="badge-premium">
            <Star size={14} className="fill-primary" />
            E-Devlet Verisinden Daha Fazlası
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold text-foreground tracking-tight leading-[1] mb-6">
            Gerçek <br />
            <span className="text-gradient-primary">İskan</span> Durumu.
          </h1>
          <p className="text-xl text-slate-700 max-w-lg leading-relaxed font-semibold">
            E-devlet kayıtları güncel olmayabilir. Biz doğrudan belediye arşivlerinden güncel statüyü raporluyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a href="#form" className="btn-hero group" aria-label="Hemen Sorgula (Forma yönlendirir)">
              Hemen Sorgula <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <div className="btn-outline-hero" aria-label="Resmi Arşiv Denetimi">
              <ShieldCheck className="text-emerald-600" size={24} aria-hidden="true" /> Resmi Arşiv Denetimi
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative group">
          <div className="relative z-10 w-full aspect-square bg-white rounded-8xl shadow-card border-2 border-slate-200/80 p-12 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-700 shadow-inner border border-indigo-200">
                  <FileText size={32} aria-hidden="true" />
                </div>
                <div className="text-right">
                  <span className="block text-xs font-extrabold text-slate-600 uppercase tracking-widest">Hizmet Alanı</span>
                  <span className="text-2xl font-extrabold text-slate-900">Tüm Türkiye</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-5 bg-slate-50 rounded-3xl border-2 border-slate-200 flex items-center gap-4">
                  <div className="w-11 h-11 bg-emerald-100 rounded-xl shadow-sm flex items-center justify-center text-emerald-700">
                    <CheckCircle2 size={24} aria-hidden="true" />
                  </div>
                  <div className="text-base font-extrabold text-slate-900">Yapı Kullanma İzin Belgesi</div>
                </div>
                <div className="p-5 bg-amber-50/70 rounded-3xl border-2 border-amber-200 flex items-center gap-4">
                  <div className="w-11 h-11 bg-amber-100 rounded-xl shadow-sm flex items-center justify-center text-amber-700">
                    <Clock size={24} aria-hidden="true" />
                  </div>
                  <div className="text-base font-extrabold text-slate-800">Belediye Arşiv Dosya Taraması</div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-indigo-500"></div>
                  ))}
                </div>
                <span className="text-xs font-extrabold text-indigo-700 uppercase tracking-widest">5.000+ Analiz Edildi</span>
              </div>
            </div>
          </div>
          {/* Abstract Shapes */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
