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
    size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-12 h-12' : 'w-11 h-11';
  const textSize =
    size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className="inline-flex items-center gap-3 select-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        role="img"
        aria-label="FirmaNex Logo"
        className={`${iconDimensions} shrink-0 rounded-xl shadow-md ring-1 ring-white/15`}
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
          strokeWidth="3"
          strokeOpacity="0.8"
        />
        <path
          d="M21 17h24v7.5H29.5v6.5h12.5v7H29.5V48H21V17z"
          fill="#ffffff"
        />
        <circle cx="46" cy="43" r="5.5" fill="#10b981" />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={`${textSize} font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}
        >
          Firma<span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>Nex</span>
        </span>
        <span
          className={`text-[11px] font-extrabold tracking-wider mt-0.5 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
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
 * High-contrast dark navy bar with bright emerald & white badges.
 */
export const FirmanexBanner1 = ({ className = '' }: { className?: string }) => {
  return (
    <section
      aria-label="FirmaNex B2B Firma Rehberi Reklamı"
      className={`max-w-6xl mx-auto px-6 my-8 ${className}`}
    >
      <a
        href={FIRMANEX_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-3xl bg-slate-950 p-5 sm:px-8 sm:py-5 text-white shadow-2xl border-2 border-blue-500/40 hover:border-emerald-400 transition-all duration-300"
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-center lg:text-left">
            <FirmanexLogo size="sm" theme="dark" />

            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-slate-950 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
              AI Destekli B2B Rehber
            </span>

            <p className="text-sm sm:text-base font-bold text-white">
              <span className="text-emerald-300 font-extrabold">
                81 İl, 973 İlçe ve 40 Ana Sektörde
              </span>{' '}
              12.300+ üretici, tedarikçi ve hizmet firmasını keşfedin!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden xl:inline-block text-[10px] font-extrabold uppercase tracking-widest text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
              Reklam
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-slate-950 hover:bg-emerald-400 px-5 py-2.5 text-xs font-extrabold shadow-lg group-hover:scale-105 transition-all">
              firmanex.com.tr'yi Keşfet
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </a>
    </section>
  );
};

/**
 * BANNER 2: İnşaat, Yapı, Mühendislik & Tedarikçi Keşif Billboard Banner
 * High-contrast dark slate & vibrant emerald design.
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
      <div className="relative overflow-hidden rounded-5xl bg-slate-950 p-8 md:p-12 text-white shadow-2xl border-2 border-emerald-500/50">
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <FirmanexLogo size="md" theme="dark" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 text-slate-950 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider">
                <Building2 size={14} />
                İnşaat & Yapı Tedarik Ekosistemi
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
                Sponsorlu • www.firmanex.com.tr
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
              {locationLabel} Doğrulanmış İnşaat, Mühendislik ve Yapı Firmalarını{' '}
              <span className="text-emerald-400 underline decoration-emerald-400/50 decoration-2 underline-offset-4">
                Yapay Zekâ ile Bulun!
              </span>
            </h3>

            <p className="text-slate-100 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
              İskan, güçlendirme, tadilat veya yeni yapı projeleriniz için ihtiyacınız olan üretici, müteahhit ve teknik hizmet sağlayıcıları{' '}
              <strong className="text-emerald-300 font-extrabold">www.firmanex.com.tr</strong> üzerinden karşılaştırın; tek formla doğrudan fiyat ve termin teklifi toplayın.
            </p>

            {/* Sector Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`${FIRMANEX_URL}/kategoriler`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 hover:bg-emerald-500 text-white hover:text-slate-950 border border-slate-700 hover:border-emerald-400 px-4 py-2 text-xs font-extrabold transition-all"
                >
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Right CTA & Stats Box */}
          <div className="lg:col-span-4 bg-slate-900 rounded-4xl p-6 md:p-8 border-2 border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-extrabold text-emerald-400">81 / 81</div>
                <div className="text-xs text-slate-200 font-bold mt-1">İl & 973 İlçe</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-extrabold text-sky-400">594+</div>
                <div className="text-xs text-slate-200 font-bold mt-1">Alt Uzmanlık</div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={FIRMANEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
              >
                <Search size={18} />
                Firma & Tedarikçi Ara
                <ArrowUpRight size={18} />
              </a>
              <a
                href={`${FIRMANEX_URL}/eslestir`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 border border-slate-600 transition-all"
              >
                <Sparkles size={15} className="text-emerald-400" />
                AI ile Ücretsiz Teklif İste
              </a>
            </div>

            <div className="text-center text-xs font-extrabold text-slate-200">
              🌐 <span className="text-emerald-400 underline">www.firmanex.com.tr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * BANNER 3: AI Doğal Dil Eşleştirme & Doğrudan Teklif Havuzu (RFQ) Showcase Banner
 * High-contrast deep indigo card with crisp white prompt box.
 */
export const FirmanexBanner3 = ({ className = '' }: { className?: string }) => {
  return (
    <section
      aria-label="FirmaNex Yapay Zeka Eşleştirme Reklamı"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-indigo-950 p-8 md:p-12 text-white shadow-2xl border-2 border-indigo-400/50">
        <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-slate-950 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider">
                <Cpu size={14} />
                AI-Native B2B Eşleştirme Motoru
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-200 bg-indigo-900 border border-indigo-700 px-3 py-1 rounded-full">
                Sponsorlu • www.firmanex.com.tr
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Aradığınız Ürün veya Hizmeti Doğal Dille Yazın,{' '}
              <span className="text-amber-300">
                Yapay Zekâ Tedarikçinizi Eşleştirsin!
              </span>
            </h3>

            <p className="text-slate-100 text-sm md:text-base font-medium leading-relaxed">
              Klasik rehberlerde saatlerce firma aramayın. <strong className="text-white font-extrabold">FirmaNex AI</strong> ile ihtiyacınızı yazın; NACE Rev.2 uyumlu 40 sektör ve 12.300+ firma arasından en doğru üretici veya hizmet sağlayıcılarla anında eşleşin.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`${FIRMANEX_URL}/eslestir`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-white text-slate-950 hover:bg-amber-300 px-7 py-4 text-sm font-extrabold shadow-xl transition-all hover:scale-105"
              >
                <Sparkles size={18} className="text-indigo-700" />
                AI Eşleştirmeyi Şimdi Dene
                <ArrowUpRight size={18} />
              </a>
              <a
                href={FIRMANEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-900 hover:bg-indigo-800 border-2 border-indigo-400/50 px-6 py-4 text-xs font-extrabold text-white transition-all"
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
              className="block rounded-3xl bg-slate-950 border-2 border-indigo-400/40 p-6 shadow-2xl hover:border-emerald-400 transition-all group"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <FirmanexLogo size="sm" theme="dark" />
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-950 bg-emerald-400 px-3 py-1 rounded-full">
                  ● AI Teklif Havuzu Aktif
                </span>
              </div>

              {/* Prompt Box Mock */}
              <div className="rounded-2xl bg-slate-900 border border-slate-700 p-4 mb-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={14} /> Örnek Doğal Dil Sorgusu:
                </div>
                <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                  "İstanbul ve Kocaeli'de yangın merdiveni, çelik konstrüksiyon ve mekanik tesisat yapan onaylı mühendislik firmalarından teklif almak istiyorum."
                </p>
              </div>

              {/* Match Result Pills */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs bg-emerald-950 border-2 border-emerald-500/60 rounded-xl px-4 py-3">
                  <span className="font-extrabold text-emerald-300 flex items-center gap-2">
                    <BadgeCheck size={18} className="text-emerald-400" /> 28 Uygun Tedarikçi Eşleşti
                  </span>
                  <span className="text-xs font-extrabold text-white underline group-hover:text-emerald-300">
                    Teklif İste →
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-300 px-1 pt-1">
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
 * High-contrast dark slate with bold amber/gold accents.
 */
export const FirmanexBanner4 = ({ className = '' }: { className?: string }) => {
  return (
    <section
      aria-label="FirmaNex Ücretsiz Firma Kaydı Reklamı"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-slate-950 p-8 md:p-12 text-white shadow-2xl border-2 border-amber-400/60">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <FirmanexLogo size="md" theme="dark" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-slate-950 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider">
                <Briefcase size={14} />
                Şirketler İçin Ücretsiz Kurumsal Vitrin
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Firmanızı Türkiye'nin Yeni Nesil B2B Ağına Taşıyın —{' '}
              <span className="text-amber-400">Hem Google'da Hem Yapay Zekâda</span> Bulunun!
            </h3>

            <p className="text-slate-100 text-sm md:text-base font-medium leading-relaxed">
              Mühendislik bürosu, inşaat firması, üretici veya kurumsal hizmet sağlayıcı mısınız?{' '}
              <strong className="text-amber-300 font-extrabold">www.firmanex.com.tr</strong>'de ücretsiz firma profilinizi oluşturun; alan adı doğrulaması (<code className="text-slate-950 bg-amber-300 font-extrabold px-2 py-0.5 rounded text-xs">DOMAIN_VERIFIED</code>) ve çok dilli (TR/EN/AR) altyapı ile doğrudan B2B müşteri teklifleri alın.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-white bg-slate-900 rounded-xl px-4 py-3 border border-slate-700">
                <ShieldCheck size={18} className="text-amber-400 shrink-0" />
                NACE Rev.2 & GEO Uyumlu
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-white bg-slate-900 rounded-xl px-4 py-3 border border-slate-700">
                <Globe2 size={18} className="text-amber-400 shrink-0" />
                TR / EN / AR İhracat Vitrini
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-white bg-slate-900 rounded-xl px-4 py-3 border border-slate-700">
                <FileSpreadsheet size={18} className="text-amber-400 shrink-0" />
                Doğrudan B2B Teklif (RFQ)
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center lg:items-end gap-3">
            <a
              href={`${FIRMANEX_URL}/panel`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base px-8 py-5 shadow-xl transition-all hover:scale-105"
            >
              Firmanı Ücretsiz Ekle
              <ArrowUpRight size={20} />
            </a>
            <a
              href={`${FIRMANEX_URL}/paketler`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold text-amber-300 hover:text-white underline transition-colors"
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
 * High-contrast dark navy & sky blue industrial directory card.
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
      <div className="relative overflow-hidden rounded-5xl bg-slate-950 p-8 md:p-12 text-white shadow-2xl border-2 border-sky-400/50">
        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400 text-slate-950 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider">
                <Factory size={14} />
                Türkiye Sanayi & OSB Rehberi
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-200 bg-slate-900 border border-slate-700 px-3 py-1 rounded-full">
                Reklam • www.firmanex.com.tr
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Organize Sanayi Bölgeleri, Üreticiler ve İhracatçılar{' '}
              <span className="text-sky-400">Tek B2B Platformda</span>
            </h3>

            <p className="text-slate-100 text-sm md:text-base font-medium leading-relaxed">
              Fabrikadan doğrudan tedarik, fason üretim ve toptan satın alma süreçleriniz için Türkiye'nin 81 ilindeki organize sanayi bölgelerini ve 20 farklı ticari faaliyet rolündeki binlerce kurumsal firmayı <strong className="text-white font-extrabold">FirmaNex</strong>'te keşfedin.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {roles.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-slate-900 hover:bg-sky-400 text-white hover:text-slate-950 border border-slate-700 hover:border-sky-300 px-4 py-2 text-xs font-extrabold transition-all"
                >
                  {r.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 rounded-4xl p-6 md:p-8 border-2 border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <FirmanexLogo size="md" theme="dark" />
              <span className="text-xs font-extrabold text-slate-950 bg-sky-400 px-3 py-1 rounded-full">
                Canlı B2B Dizin
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-extrabold text-white">12.328+</div>
                <div className="text-xs text-slate-300 font-bold mt-1">Yayındaki Firma</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-extrabold text-sky-400">40 Sektör</div>
                <div className="text-xs text-slate-300 font-bold mt-1">NACE Rev.2 Uyumlu</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-extrabold text-emerald-400">20 Rol</div>
                <div className="text-xs text-slate-300 font-bold mt-1">Üretici, İhracatçı, OSB</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl font-extrabold text-amber-400">81 İl</div>
                <div className="text-xs text-slate-300 font-bold mt-1">973 İlçe Kapsamı</div>
              </div>
            </div>

            <a
              href={`${FIRMANEX_URL}/firmalar`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
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
 * High-contrast sidebar skyscraper + crisp light-mode corporate spotlight card.
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
        className={`relative overflow-hidden rounded-4xl bg-slate-950 p-6 text-white shadow-2xl border-2 border-indigo-400/50 ${className}`}
      >
        <div className="relative z-10 space-y-5">
          <div className="flex items-center justify-between">
            <FirmanexLogo size="sm" theme="dark" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-200 bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded-full">
              Reklam
            </span>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400">
              <Zap size={14} />
              {city ? `${city} & Tüm Türkiye B2B Rehberi` : 'Türkiye B2B Firma Rehberi'}
            </div>
            <h4 className="text-lg font-extrabold leading-snug text-white">
              Doğru Tedarikçi ve Hizmet Firmasını Yapay Zekâ ile Bulun
            </h4>
            <p className="text-xs text-slate-200 font-medium leading-relaxed">
              81 il ve 40 sektörde 12.300+ firmayı inceleyin, tek formla fiyat teklifi alın veya firmanızı ücretsiz kaydedin.
            </p>
          </div>

          <div className="space-y-2.5 text-xs">
            <a
              href={`${FIRMANEX_URL}/firmalar`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-extrabold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Search size={15} className="text-sky-400" /> Firma & Tedarikçi Ara
              </span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={`${FIRMANEX_URL}/eslestir`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-extrabold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={15} className="text-emerald-400" /> AI ile Teklif Al (RFQ)
              </span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={`${FIRMANEX_URL}/panel`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-extrabold transition-colors"
            >
              <span className="flex items-center gap-2">
                <Layers size={15} className="text-amber-400" /> Ücretsiz Firma Ekle
              </span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          <a
            href={FIRMANEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            www.firmanex.com.tr'ye Git
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    );
  }

  // Horizontal Spotlight Card Variant (High-Contrast Light Card with Bold Dark Slate Border)
  return (
    <section
      aria-label="FirmaNex Kurumsal İş Ortağı Banner"
      className={`max-w-6xl mx-auto px-6 my-12 ${className}`}
    >
      <div className="relative overflow-hidden rounded-5xl bg-white border-2 border-slate-300 shadow-card p-8 md:p-10">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <FirmanexLogo size="md" theme="light" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 border border-indigo-300 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-indigo-900">
                <MapPin size={13} />
                81 İl • 973 İlçe • B2B İş Ağı
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-300 px-2.5 py-1 rounded-full">
                Sponsorlu Bağlantı
              </span>
            </div>

            <h3 className="text-xl md:text-3xl font-extrabold text-slate-950 tracking-tight">
              Türkiye'nin Yapay Zekâ Destekli Kurumsal Firma ve Teklif Platformu:{' '}
              <a
                href={FIRMANEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:text-indigo-900 underline decoration-emerald-500 decoration-2 underline-offset-4"
              >
                www.firmanex.com.tr
              </a>
            </h3>

            <p className="text-slate-800 font-medium text-sm md:text-base leading-relaxed">
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
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-indigo-600 text-slate-900 hover:text-white text-xs font-extrabold border border-slate-300 transition-colors"
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
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 hover:bg-indigo-700 text-white font-extrabold text-sm px-8 py-4 shadow-lg transition-all"
            >
              www.firmanex.com.tr'yi Ziyaret Et
              <ArrowUpRight size={18} />
            </a>
            <a
              href={`${FIRMANEX_URL}/panel`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-100 hover:bg-emerald-200 text-emerald-950 border-2 border-emerald-400 font-extrabold text-xs px-8 py-3.5 transition-all"
            >
              + Ücretsiz Firma Kaydı Oluştur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
