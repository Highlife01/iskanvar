import {
  ArrowUpRight,
  Sparkles,
  Building2,
  ShieldCheck,
  Search,
  Factory,
  Globe2,
  CheckCircle2,
  Cpu,
  Layers,
  BadgeCheck,
  Briefcase,
  MapPin,
  FileSpreadsheet,
  Zap,
} from 'lucide-react';

export const FIRMANEX_URL = 'https://www.firmanex.com.tr';

/**
 * Official FirmaNex SVG Brand Icon & Wordmark
 */
export const FirmanexLogo = ({
  size = 'md',
  theme = 'dark',
}: {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}) => {
  const iconDimensions =
    size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const textSize =
    size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className="inline-flex items-center gap-2.5 select-none">
      <svg
         xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        role="img"
        aria-label="FirmaNex Logo"
        className={`${iconDimensions} shrink-0 rounded-xl shadow-md`}
      >
        <rect width="64" height="64" rx="14" fill="#0f172a" />
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="11"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2.5"
          strokeOpacity="0.55"
        />
        <path
          d="M21 17h24v7.5H29.5v6.5h12.5v7H29.5V48H21V17z"
          fill="#ffffff"
        />
        <circle cx="46" cy="43" r="5" fill="#10b981" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={`${textSize} font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Firma<span className="text-emerald-400">Nex</span>
        </span>
        <span
          className={`text-[10px] font-bold tracking-wider ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          www.firmanex.com.tr
        </span>
      </div>
    </div>
  );
};

/**
 * BANNER 1: Top Smart Ribbon / Leaderboard Banner
 * Sleek horizontal announcement & discovery bar with live AI indicator.
 */
export const FirmanexBanner1 = ({ className = '' }: { className?: string }) => {
  return (
    <section
      aria-label="FirmaNex B2B Firma Rehberi Reklamı"
      className={`max-w-6xl mx-auto px-6 my-6 ${className}`}
    >
      <a
        href={FIRMANEX_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-4 sm:px-7 sm:py-4 text-white shadow-xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-blue-500/10"
      >
        {/* Subtle animated glow */}
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-center lg:text-left">
            <FirmanexLogo size="sm" theme="dark" />

            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              AI Destekli B2B Rehber
            </span>

            <p className="text-xs sm:text-sm font-semibold text-slate-200">
              <strong className="text-white font-extrabold">
                81 İl, 973 İlçe ve 40 Ana Sektörde
              </strong>{' '}
              12.300+ üretici, tedarikçi ve hizmet firmasını keşfedin, anında teklif alın!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden xl:inline-block text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Sponsorlu
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2 text-xs font-extrabold text-white shadow-md group-hover:scale-105 transition-transform">
              firmanex.com.tr
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </a>
    </section>
  );
};

/**
 * BANNER 2: İnşaat, Yapı, Mühendislik & Tedarikçi Keşif Billboard Banner
 * Contextualized for property, construction, renovation, and municipal permit audiences.
 */
export const FirmanexBanner2 = ({
  city,
  district,
  className = '',
}: {
  city?: string;
  district?: string;
  className?: string;
}) => {
  const locationLabel = city
    ? `${city}${district ? ` / ${district}` : ''} ve 81 İlde`
    : '81 İl ve 973 İlçede';

  const categories = [
    'İnşaat & Yapı Malzemeleri',
    'Mimarlık & Mühendislik',
    'Mekanik & Yangın Tesisatı',
    'Asansör & Elektrik Sistemleri',
    'Çelik Konstrüksiyon',
    'Yapı & Tadilat Firmaları',
  ];

  return (
    <section
      aria-label="FirmaNex İnşaat ve Yapı Tedarikçileri Reklamı"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-8 md:p-12 text-white shadow-2xl border border-emerald-500/25">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <FirmanexLogo size="md" theme="dark" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                <Building2 size={13} />
                İnşaat & Yapı Tedarik Ekosistemi
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white/5 px-2.5 py-1 rounded-full">
                Reklam • www.firmanex.com.tr
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
              {locationLabel} Doğrulanmış İnşaat, Mühendislik ve Yapı Firmalarını{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                Yapay Zekâ ile Bulun!
              </span>
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
              İskan, güçlendirme, tadilat veya yeni yapı projeleriniz için ihtiyacınız olan üretici, müteahhit ve teknik hizmet sağlayıcıları{' '}
              <strong className="text-white">www.firmanex.com.tr</strong> üzerinden karşılaştırın; tek formla doğrudan fiyat ve termin teklifi toplayın.
            </p>

            {/* Sector Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`${FIRMANEX_URL}/kategoriler`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-emerald-500/25 border border-white/15 hover:border-emerald-400/40 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Right CTA & Stats Box */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-4xl p-6 md:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="text-2xl font-extrabold text-emerald-400">81 / 81</div>
                <div className="text-[11px] text-slate-400 font-semibold">İl & 973 İlçe</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="text-2xl font-extrabold text-blue-400">594+</div>
                <div className="text-[11px] text-slate-400 font-semibold">Alt Uzmanlık</div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={FIRMANEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
              >
                <Search size={17} />
                Firma & Tedarikçi Ara
                <ArrowUpRight size={17} />
              </a>
              <a
                href={`${FIRMANEX_URL}/eslestir`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/15 transition-all"
              >
                <Sparkles size={14} className="text-emerald-400" />
                AI ile Ücretsiz Teklif İste
              </a>
            </div>

            <div className="text-center text-[11px] font-bold text-slate-400">
              🌐 <span className="text-emerald-300 underline">www.firmanex.com.tr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * BANNER 3: AI Doğal Dil Eşleştirme & Doğrudan Teklif Havuzu (RFQ) Showcase Banner
 * Interactive-looking SaaS split card demonstrating FirmaNex's AI matching capability.
 */
export const FirmanexBanner3 = ({ className = '' }: { className?: string }) => {
  return (
    <section
      aria-label="FirmaNex Yapay Zeka Eşleştirme Reklamı"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-purple-950 p-8 md:p-12 text-white shadow-2xl border border-indigo-400/30">
        {/* Glow effects */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/25 border border-indigo-300/30 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-indigo-200">
                <Cpu size={14} className="text-indigo-300" />
                AI-Native B2B Eşleştirme Motoru
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-300/70">
                Sponsorlu • www.firmanex.com.tr
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Aradığınız Ürün veya Hizmeti Doğal Dille Yazın,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
                Yapay Zekâ Tedarikçinizi Eşleştirsin!
              </span>
            </h3>

            <p className="text-indigo-100/90 text-sm md:text-base leading-relaxed">
              Klasik rehberlerde saatlerce firma aramayın. <strong className="text-white">FirmaNex AI</strong> ile ihtiyacınızı yazın; NACE Rev.2 uyumlu 40 sektör ve 12.300+ firma arasından en doğru üretici veya hizmet sağlayıcılarla anında eşleşin.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`${FIRMANEX_URL}/eslestir`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-white text-indigo-950 hover:bg-indigo-50 px-7 py-4 text-sm font-extrabold shadow-xl transition-all hover:scale-105"
              >
                <Sparkles size={18} className="text-indigo-600" />
                AI Eşleştirmeyi Şimdi Dene
                <ArrowUpRight size={18} />
              </a>
              <a
                href={FIRMANEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-800/50 hover:bg-indigo-800/80 border border-indigo-400/30 px-6 py-4 text-xs font-extrabold text-white transition-all"
              >
                www.firmanex.com.tr
              </a>
            </div>
          </div>

          {/* Right Simulated AI Search UI Card */}
          <div className="lg:col-span-5">
            <a
              href={`${FIRMANEX_URL}/eslestir`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-indigo-400/30 p-6 shadow-2xl hover:border-emerald-400/50 transition-all group"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <FirmanexLogo size="sm" theme="dark" />
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  ● AI Teklif Havuzu Aktif
                </span>
              </div>

              {/* Prompt Box Mock */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={12} /> Örnek Doğal Dil Sorgusu:
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 italic">
                  "İstanbul ve Kocaeli'de yangın merdiveni, çelik konstrüksiyon ve mekanik tesisat yapan onaylı mühendislik firmalarından teklif almak istiyorum."
                </p>
              </div>

              {/* Match Result Pills */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs bg-emerald-500/15 border border-emerald-500/30 rounded-xl px-3.5 py-2.5">
                  <span className="font-bold text-emerald-300 flex items-center gap-2">
                    <BadgeCheck size={16} /> 28 Uygun Tedarikçi Eşleşti
                  </span>
                  <span className="text-[11px] font-extrabold text-white underline group-hover:text-emerald-300">
                    Teklif İste →
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-1">
                  <span>✓ Tek Formla Çoklu RFQ</span>
                  <span>✓ Doğrudan Kurumsal İletişim</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * BANNER 4: Ücretsiz Kurumsal Firma Kaydı & GEO (Yapay Zekâ Aramaları) Görünürlük Banner
 * Aimed at business owners, contractors, consulting offices, and manufacturers.
 */
export const FirmanexBanner4 = ({ className = '' }: { className?: string }) => {
  return (
    <section
      aria-label="FirmaNex Ücretsiz Firma Kaydı Reklamı"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-slate-900 via-amber-950/90 to-slate-900 p-8 md:p-12 text-white shadow-2xl border border-amber-500/30">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <FirmanexLogo size="md" theme="dark" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                <Briefcase size={13} />
                Şirketler İçin Ücretsiz Kurumsal Vitrin
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Firmanızı Türkiye'nin Yeni Nesil B2B Ağına Taşıyın —{' '}
              <span className="text-amber-400">Hem Google'da Hem Yapay Zekâda</span> Bulunun!
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Mühendislik bürosu, inşaat firması, üretici veya kurumsal hizmet sağlayıcı mısınız?{' '}
              <strong className="text-white">www.firmanex.com.tr</strong>'de ücretsiz firma profilinizi oluşturun; alan adı doğrulaması (<code className="text-amber-300 bg-white/10 px-1.5 py-0.5 rounded text-xs">DOMAIN_VERIFIED</code>) ve çok dilli (TR/EN/AR) altyapı ile doğrudan B2B müşteri teklifleri alın.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-200 bg-white/5 rounded-xl px-3.5 py-2.5 border border-white/10">
                <ShieldCheck size={16} className="text-amber-400 shrink-0" />
                NACE Rev.2 & GEO Uyumlu
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-200 bg-white/5 rounded-xl px-3.5 py-2.5 border border-white/10">
                <Globe2 size={16} className="text-amber-400 shrink-0" />
                TR / EN / AR İhracat Vitrini
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-200 bg-white/5 rounded-xl px-3.5 py-2.5 border border-white/10">
                <FileSpreadsheet size={16} className="text-amber-400 shrink-0" />
                Doğrudan B2B Teklif (RFQ)
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center lg:items-end gap-3">
            <a
              href={`${FIRMANEX_URL}/panel`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-extrabold text-base px-8 py-5 shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
            >
              Firmanı Ücretsiz Ekle
              <ArrowUpRight size={20} />
            </a>
            <a
              href={`${FIRMANEX_URL}/paketler`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-amber-300 hover:text-white underline transition-colors"
            >
              Kurumsal Vitrin & Paketleri İncele → www.firmanex.com.tr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * BANNER 5: OSB (Organize Sanayi Bölgeleri), Üretici & İhracatçı Sanayi Gücü Banner
 * Highlights industrial directories, 20 commercial roles, and direct factory sourcing.
 */
export const FirmanexBanner5 = ({ className = '' }: { className?: string }) => {
  const roles = [
    { label: 'Üretici Firmalar', href: `${FIRMANEX_URL}/cozumler/uretici-firmalar` },
    { label: 'İmalatçı Firmalar', href: `${FIRMANEX_URL}/cozumler/imalatci-firmalar` },
    { label: 'İhracatçı Firmalar', href: `${FIRMANEX_URL}/cozumler/ihracatci-firmalar` },
    { label: 'OSB Rehberi', href: `${FIRMANEX_URL}/osb` },
    { label: 'Distribütör & Toptancı', href: `${FIRMANEX_URL}/cozumler/distributor-firmalar` },
    { label: 'Hizmet Sağlayıcılar', href: `${FIRMANEX_URL}/cozumler/hizmet-saglayici-firmalar` },
  ];

  return (
    <section
      aria-label="FirmaNex OSB ve Üretici Rehberi Reklamı"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 p-8 md:p-12 text-white shadow-2xl border border-sky-500/25">
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-sky-300">
                <Factory size={14} />
                Türkiye Sanayi & OSB Rehberi
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Reklam • www.firmanex.com.tr
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Organize Sanayi Bölgeleri, Üreticiler ve İhracatçılar{' '}
              <span className="text-sky-400">Tek B2B Platformda</span>
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Fabrikadan doğrudan tedarik, fason üretim ve toptan satın alma süreçleriniz için Türkiye'nin 81 ilindeki organize sanayi bölgelerini ve 20 farklı ticari faaliyet rolündeki binlerce kurumsal firmayı <strong className="text-white">FirmaNex</strong>'te keşfedin.
            </p>

            <div className="flex flex-wrap gap-2">
              {roles.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-sky-500/10 hover:bg-sky-500/25 border border-sky-400/25 px-3.5 py-2 text-xs font-bold text-sky-200 hover:text-white transition-all"
                >
                  {r.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/80 rounded-4xl p-6 md:p-8 border border-sky-500/20 space-y-6">
            <div className="flex items-center justify-between">
              <FirmanexLogo size="md" theme="dark" />
              <span className="text-[11px] font-extrabold text-sky-300 bg-sky-500/15 px-3 py-1 rounded-full">
                Canlı B2B Dizin
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-extrabold text-white">12.328+</div>
                <div className="text-xs text-slate-400 font-medium">Yayındaki Firma</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-extrabold text-sky-400">40 Sektör</div>
                <div className="text-xs text-slate-400 font-medium">NACE Rev.2 Uyumlu</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-extrabold text-emerald-400">20 Rol</div>
                <div className="text-xs text-slate-400 font-medium">Üretici, İhracatçı, OSB</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-extrabold text-amber-400">81 İl</div>
                <div className="text-xs text-slate-400 font-medium">973 İlçe Kapsamı</div>
              </div>
            </div>

            <a
              href={`${FIRMANEX_URL}/firmalar`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all"
            >
              Tüm Firma Rehberini İncele
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * BANNER 6: Sidebar Skyscraper & Partner Spotlight Card Banner
 * Supports both `sidebar` (vertical 300x600 style) and `horizontal` (bento spotlight card) layouts.
 */
export const FirmanexBanner6 = ({
  variant = 'horizontal',
  city,
  className = '',
}: {
  variant?: 'sidebar' | 'horizontal';
  city?: string;
  className?: string;
}) => {
  if (variant === 'sidebar') {
    return (
      <div
        aria-label="FirmaNex Yan Menü Reklamı"
        className={`relative overflow-hidden rounded-4xl bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 p-6 text-white shadow-xl border border-indigo-500/25 ${className}`}
      >
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          <div className="flex items-center justify-between">
            <FirmanexLogo size="sm" theme="dark" />
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 bg-white/10 px-2 py-0.5 rounded-full">
              Reklam
            </span>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-400">
              <Zap size={13} />
              {city ? `${city} & Tüm Türkiye B2B Rehberi` : 'Türkiye B2B Firma Rehberi'}
            </div>
            <h4 className="text-lg font-extrabold leading-snug text-white">
              Doğru Tedarikçi ve Hizmet Firmasını Yapay Zekâ ile Bulun
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              81 il ve 40 sektörde 12.300+ firmayı inceleyin, tek formla fiyat teklifi alın veya firmanızı ücretsiz kaydedin.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <a
              href={`${FIRMANEX_URL}/firmalar`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Search size={14} className="text-blue-400" /> Firma & Tedarikçi Ara
              </span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={`${FIRMANEX_URL}/eslestir`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-emerald-400" /> AI ile Teklif Al (RFQ)
              </span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href={`${FIRMANEX_URL}/panel`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Layers size={14} className="text-amber-400" /> Ücretsiz Firma Ekle
              </span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <a
            href={FIRMANEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            www.firmanex.com.tr'ye Git
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    );
  }

  // Horizontal Spotlight Card Variant
  return (
    <section
      aria-label="FirmaNex Kurumsal İş Ortağı Banner"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-white border-2 border-indigo-100 shadow-card p-8 md:p-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-indigo-100/70 via-emerald-50/50 to-transparent rounded-bl-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <FirmanexLogo size="md" theme="light" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-indigo-700">
                <MapPin size={12} />
                81 İl • 973 İlçe • B2B İş Ağı
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                Sponsorlu Bağlantı
              </span>
            </div>

            <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Türkiye'nin Yapay Zekâ Destekli Kurumsal Firma ve Teklif Platformu:{' '}
              <a
                href={FIRMANEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline decoration-emerald-400 decoration-2 underline-offset-4"
              >
                www.firmanex.com.tr
              </a>
            </h3>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Üretici, tedarikçi ve kurumsal hizmet firmalarını bölge ve NACE sektör bazında inceleyin; yapay zekâ eşleştirmesiyle doğrudan teklif toplayın veya şirketinizi ücretsiz kaydedin.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { title: 'Firma Rehberi', url: `${FIRMANEX_URL}/firmalar` },
                { title: 'AI Teklif Al', url: `${FIRMANEX_URL}/eslestir` },
                { title: 'OSB Rehberi', url: `${FIRMANEX_URL}/osb` },
                { title: '40 Ana Sektör', url: `${FIRMANEX_URL}/kategoriler` },
                { title: 'Kurumsal Paketler', url: `${FIRMANEX_URL}/paketler` },
              ].map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 text-xs font-bold border border-slate-200/80 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <a
              href={FIRMANEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-indigo-700 text-white font-extrabold text-sm px-7 py-4 shadow-lg transition-all"
            >
              www.firmanex.com.tr'yi Ziyaret Et
              <ArrowUpRight size={18} />
            </a>
            <a
              href={`${FIRMANEX_URL}/panel`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-extrabold text-xs px-7 py-3.5 transition-all"
            >
              + Ücretsiz Firma Kaydı Oluştur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
