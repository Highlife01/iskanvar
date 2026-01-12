import { Building2, Phone, Mail, MapPin, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-slate-100 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-xl shadow-indigo-100">
                <Building2 size={24} aria-hidden="true" />
              </div>
              <span className="text-3xl font-extrabold tracking-tighter text-foreground">iskanvar</span>
            </div>
            <p className="text-sm text-muted-foreground font-bold leading-loose italic uppercase tracking-wider">
              Mülkünüzün gerçek değerini ve yasal statüsünü keşfedin.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-foreground">Kurumsal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-bold">
              <li><Link to="/blog" className="footer-link hover:text-primary">Blog</Link></li>
              <li><Link to="/kvkk" className="footer-link hover:text-primary">KVKK Aydınlatma</Link></li>
              <li><Link to="/kullanim-kosullari" className="footer-link hover:text-primary">Kullanım Koşulları</Link></li>
              <li><Link to="/hakkimizda" className="footer-link hover:text-primary">Biz Kimiz?</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-foreground">İletişim</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-bold">
              <li className="flex items-center gap-3 footer-link">
                <Phone size={16} aria-hidden="true" /> 0532 055 09 45
              </li>
              <li className="flex items-center gap-3 footer-link">
                <Mail size={16} aria-hidden="true" /> cebokar@gmail.com
              </li>
              <li className="flex items-center gap-3 leading-relaxed">
                <MapPin size={16} className="shrink-0" aria-hidden="true" /> Levent Plaza, No:129 Beşiktaş / İstanbul
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50/50 p-8 rounded-4xl border border-amber-100 shadow-sm">
              <div className="flex items-center gap-2 text-amber-700 font-extrabold text-[11px] uppercase mb-4">
                <ShieldAlert size={16} aria-hidden="true" /> Önemli Not
              </div>
              <p className="text-[10px] text-amber-900/60 leading-relaxed font-bold uppercase tracking-tight">
                iskanvar.com.tr bir kamu kuruluşu değildir. Ücretli özel gayrimenkul denetim ve danışmanlık hizmeti sunar.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-extrabold uppercase tracking-[0.4em] text-slate-300">
          <div className="space-y-2 text-center md:text-left">
            <div>© {new Date().getFullYear()} ISKANVAR.COM.TR</div>
            <div className="text-slate-400">Yetki Belge No: 0100277</div>
          </div>
          <div className="flex gap-10">
            <span>Made with Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
