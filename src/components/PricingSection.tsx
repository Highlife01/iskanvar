import { Zap } from 'lucide-react';

const roadmapItems = [
  "Tapu Takip Otomasyonu",
  "İmar Durumu Analizi",
  "Kat Mülkiyeti Sorgusu"
];

const PricingSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="fiyat">
      <div className="bg-slate-900 rounded-8xl p-10 md:p-20 text-white relative overflow-hidden border-2 border-slate-800 shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/15 via-transparent to-emerald-500/10"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 px-4 py-1.5 rounded-full font-extrabold text-xs uppercase tracking-[0.3em]">
              Gelecek Vizyonumuz
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Yeni Nesil Denetim <br /> Ekosistemi
            </h2>
            <div className="space-y-4">
              {roadmapItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200">
                  <Zap size={18} className="text-amber-400 shrink-0" />
                  <span className="text-sm font-bold uppercase tracking-wider">{item} (Çok Yakında)</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/90 backdrop-blur-md rounded-6xl p-10 md:p-12 border-2 border-indigo-400/30 text-center shadow-2xl">
            <div className="text-white font-extrabold text-5xl md:text-6xl mb-3 tracking-tight">3.000 TL</div>
            <p className="text-indigo-300 font-extrabold uppercase tracking-widest text-xs mb-10 underline decoration-emerald-400 decoration-2 underline-offset-8">
              Tekil Sorgulama Bedeli
            </p>
            <a
              href="#form"
              className="block w-full py-5 bg-white text-slate-950 rounded-4xl font-extrabold text-lg hover:bg-indigo-50 transition-all uppercase tracking-widest shadow-xl hover:scale-[1.02]"
              aria-label="Hemen Başvur (Forma yönlendirir)"
            >
              Hemen Başvur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
