import { Building2, Phone, Mail, MapPin, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-slate-200 pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg">
                <Building2 size={24} aria-hidden="true" />
              </div>
              <span className="text-3xl font-extrabold tracking-tighter text-slate-900">iskanvar</span>
            </div>
            <p className="text-sm text-slate-700 font-bold leading-relaxed">
              Mülkünüzün gerçek değerini ve yasal statüsünü resmi arşiv verileriyle keşfedin.
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-900">Kurumsal</h4>
            <ul className="space-y-3.5 text-sm text-slate-700 font-bold">
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/kvkk" className="footer-link">KVKK Aydınlatma</Link></li>
              <li><Link to="/kullanim-kosullari" className="footer-link">Kullanım Koşulları</Link></li>
              <li><Link to="/hakkimizda" className="footer-link">Biz Kimiz?</Link></li>
              <li>
                <a
                  href="https://www.firmanex.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:text-indigo-900 font-extrabold inline-flex items-center gap-1.5 underline decoration-emerald-500 decoration-2 underline-offset-4"
                >
                  FirmaNex B2B Rehberi ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-900">İletişim</h4>
            <ul className="space-y-3.5 text-sm text-slate-700 font-bold">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-indigo-700 shrink-0" aria-hidden="true" /> 0532 055 09 45
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-indigo-700 shrink-0" aria-hidden="true" /> cebokar@gmail.com
              </li>
              <li className="flex items-center gap-3 leading-relaxed">
                <MapPin size={16} className="text-indigo-700 shrink-0" aria-hidden="true" /> Levent Plaza, No:129 Beşiktaş / İstanbul
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-200 shadow-sm">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase mb-3">
                <ShieldAlert size={18} className="text-amber-700" aria-hidden="true" /> Önemli Not
              </div>
              <p className="text-xs text-amber-950 leading-relaxed font-bold">
                iskanvar.com.tr bir kamu kuruluşu değildir. Ücretli özel gayrimenkul denetim ve danışmanlık hizmeti sunar.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-600">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-slate-800">© {new Date().getFullYear()} ISKANVAR.COM.TR</div>
            <div className="text-slate-600">Yetki Belge No: 0100277</div>
          </div>
          <div className="flex gap-10 text-slate-700">
            <span>Türkiye Geneli İskan & İmar Danışmanlığı</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
