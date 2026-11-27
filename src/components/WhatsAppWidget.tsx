import { MessageCircle } from 'lucide-react';

const PHONE_NUMBER = "905320550945";

interface WhatsAppWidgetProps {
  city?: string;
  district?: string;
  topic?: string;
}

const WhatsAppWidget = ({ city, district, topic }: WhatsAppWidgetProps = {}) => {
  const locationPart = [city, district].filter(Boolean).join(' ');
  const message = locationPart
    ? `Merhaba, iskanvar.com.tr üzerinden ${locationPart} bölgesi için iskan/imar araştırması hakkında bilgi almak istiyorum.`
    : topic
    ? `Merhaba, iskanvar.com.tr üzerinden "${topic}" konusu hakkında bilgi almak istiyorum.`
    : "Merhaba, iskanvar.com.tr sitesinden ulaşıyorum. İskan ve imar araştırması hakkında bilgi almak istiyorum.";

  return (
    <div className="fixed bottom-10 right-10 z-[200] flex flex-col items-end gap-4 group">
      <div className="bg-card px-6 py-4 rounded-6xl shadow-2xl border border-slate-50 transform translate-y-4 opacity-0 scale-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none mb-2">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
            <MessageCircle size={20} />
          </div>
          <div>
            <p className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest">Çevrimiçi Uzman</p>
            <p className="text-sm font-bold text-slate-700 italic">
              {locationPart ? `${locationPart} Uzman Desteği` : 'Bir sorunuz mu var?'}
            </p>
          </div>
        </div>
        <div className="absolute bottom-[-6px] right-8 w-4 h-4 bg-card border-r border-b border-slate-50 rotate-45"></div>
      </div>

      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center"
        aria-label="WhatsApp üzerinden uzmanımızla iletişime geçin"
      >
        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-[-10px] bg-emerald-400 rounded-full animate-pulse opacity-10"></div>

        <div className="w-20 h-20 bg-emerald-500 text-primary-foreground rounded-4xl flex items-center justify-center shadow-emerald hover:scale-110 active:scale-95 transition-all duration-300 relative z-10 transform rotate-6">
          <MessageCircle size={38} aria-hidden="true" />
          <div className="absolute top-4 right-4 w-5 h-5 bg-card rounded-full border-4 border-emerald-500 flex items-center justify-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppWidget;
