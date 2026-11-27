import { useEffect } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = "905320550945";

interface SuccessViewProps {
  phone: string;
  onReset: () => void;
}

const SuccessView = ({ phone, onReset }: SuccessViewProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-1054391872/RsAsCIXjntsbEMD84vYD',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-card p-12 rounded-7xl shadow-soft max-w-lg w-full text-center border border-indigo-50 transform transition-all animate-scale-in">
        <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={56} strokeWidth={1.5} className="animate-bounce" />
        </div>
        <h2 className="text-3xl font-extrabold text-foreground mb-4 tracking-tight">Başvurunuz Onaylandı</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
          Sorgulama dosyanız oluşturuldu. Uzmanlarımız 24 saat içerisinde belediye arşiv kayıtlarını inceleyip raporunuzu <span className="font-bold text-foreground">{phone}</span> numaralı hattınıza iletecektir.
        </p>
        <div className="space-y-4">
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            className="w-full flex items-center justify-center gap-3 bg-emerald-500 text-primary-foreground py-5 rounded-4xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100"
          >
            <MessageCircle size={24} />
            WhatsApp Uzman Hattı
          </a>
          <button
            onClick={onReset}
            className="text-primary font-bold hover:underline"
          >
            Yeni Sorgulama Başlat
          </button>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-50 text-[10px] text-slate-400 font-extrabold uppercase tracking-widest flex items-center justify-center gap-2">
          Yetki Belge No: 0100277
        </div>
      </div>
    </div>
  );
};

export default SuccessView;
