import { Zap } from 'lucide-react';

const roadmapItems = [
  "Tapu Takip Otomasyonu",
  "İmar Durumu Analizi",
  "Kat Mülkiyeti Sorgusu"
];

const PricingSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="fiyat">
      <div className="bg-secondary rounded-8xl p-12 md:p-20 text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-indigo-400 font-extrabold text-xs uppercase tracking-[0.4em]">
              Gelecek Vizyonumuz
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter italic">
              Yeni Nesil Denetim <br /> Ekosistemi
            </h2>
            <div className="space-y-4">
              {roadmapItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 opacity-60">
                  <Zap size={18} className="text-indigo-400" />
                  <span className="text-sm font-bold uppercase tracking-widest">{item} (Çok Yakında)</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/5 backdrop-blur-md rounded-6xl p-12 border border-card/10 text-center">
            <div className="text-indigo-400 font-extrabold text-6xl mb-4 tracking-tighter">3.000 TL</div>
            <p className="text-secondary-foreground/60 font-bold uppercase tracking-widest text-xs mb-10 italic underline decoration-indigo-400 decoration-2 underline-offset-8">
              Tekil Sorgulama Bedeli
            </p>
            <a
              href="#form"
              className="block w-full py-6 bg-card text-foreground rounded-4xl font-extrabold text-xl hover:bg-indigo-50 transition-all uppercase tracking-widest shadow-xl"
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
