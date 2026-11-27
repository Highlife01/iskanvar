import { useState } from 'react';
import {
  FileCheck,
  AlertTriangle,
  ShieldCheck,
  Building2,
  CheckCircle2,
  XCircle,
  FileText,
  ArrowRight,
  Lock,
  Stamp,
} from 'lucide-react';

type ReportSampleKey = 'clean' | 'risky';

const REPORT_SAMPLES: Record<
  ReportSampleKey,
  {
    badge: string;
    badgeColor: string;
    reportNo: string;
    location: string;
    adaParsel: string;
    tapuType: string;
    verdictTitle: string;
    verdictColor: string;
    verdictBg: string;
    summary: string;
    items: {
      label: string;
      value: string;
      status: 'ok' | 'warn' | 'danger';
      detail: string;
    }[];
  }
> = {
  clean: {
    badge: 'Senaryo 1: Güvenli Yatırım Örneği',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    reportNo: 'ISK-2026-48192',
    location: 'İstanbul / Kadıköy / Suadiye Mah.',
    adaParsel: 'Ada: 1420 / Parsel: 18 (Bağımsız Bölüm: 7)',
    tapuType: 'Kat Mülkiyeti (İskanlı)',
    verdictTitle: 'SATIN ALMAYA UYGUN — RESMİ İSKAN KAYDI TAM',
    verdictColor: 'text-emerald-800',
    verdictBg: 'bg-emerald-50 border-emerald-300',
    summary:
      'Kadıköy Belediyesi İmar ve Şehircilik Müdürlüğü arşiv dosyasında yapılan incelemede; binanın 14.08.2023 tarihli Yapı Kullanma İzin Belgesi (İskan) aldığı, mimari projeye aykırı herhangi bir tutanak veya encümen cezası bulunmadığı tespit edilmiştir.',
    items: [
      {
        label: 'Yapı Kullanma İzin Belgesi (İskan)',
        value: 'MEVCUT (Tam İskan)',
        status: 'ok',
        detail: 'Belge No: 2023/894 - Tüm bağımsız bölümler için onaylı.',
      },
      {
        label: 'Belediye Encümen Yıkım / Ceza Kaydı',
        value: 'KAYIT YOK (Temiz)',
        status: 'ok',
        detail: 'Arşiv dosyasında yıkım kararı veya idari para cezası bulunmamaktadır.',
      },
      {
        label: 'Mimari Proje & Metrekare Uyumu',
        value: 'BİREBİR UYUMLU (135 m² Brüt)',
        status: 'ok',
        detail: 'Onaylı kat planı ile bağımsız bölüm fiili durumu uyumludur.',
      },
      {
        label: 'SGK & İSKİ / Altyapı İlişiksizlik',
        value: 'TAMAMLANDI',
        status: 'ok',
        detail: 'Bireysel mesken elektrik, su ve doğalgaz aboneliğine uygundur.',
      },
    ],
  },
  risky: {
    badge: 'Senaryo 2: Gizli Risk Tespit Edilen Örnek',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    reportNo: 'ISK-2026-48205',
    location: 'Antalya / Muratpaşa / Lara Bölgesi',
    adaParsel: 'Ada: 3108 / Parsel: 9 (Bağımsız Bölüm: 12 - Dubleks)',
    tapuType: 'Kat İrtifakı (İskansız)',
    verdictTitle: 'YÜKSEK RİSK — ARŞİVDE PROJE AYKIRILIĞI & CEZA TUTANAĞI MEVCUT',
    verdictColor: 'text-rose-800',
    verdictBg: 'bg-rose-50 border-rose-300',
    summary:
      'Tapu kaydında herhangi bir şerh görünmemesine rağmen belediye imar arşiv dosyasında yapılan taramada; çatı piyesinde onaylı mimari projeye aykırı 42 m² büyüme yapıldığı, bu nedenle iskan başvurusunun reddedildiği ve yapı tatil zaptı düzenlendiği tespit edilmiştir.',
    items: [
      {
        label: 'Yapı Kullanma İzin Belgesi (İskan)',
        value: 'YOK (Başvuru Reddedilmiş)',
        status: 'danger',
        detail: 'Ruhsat süresi dolmak üzere; projeye aykırılık giderilmeden iskan alınamaz.',
      },
      {
        label: 'Belediye Encümen Yıkım / Ceza Kaydı',
        value: 'YAPI TATİL ZAPTI MEVCUT',
        status: 'danger',
        detail: '3194 Sayılı Kanun Md. 32/42 uyarınca yıkım ve para cezası süreci başlatılmış.',
      },
      {
        label: 'Mimari Proje & Metrekare Uyumu',
        value: 'UYUMSUZ (+42 m² Kaçak Teras Kapama)',
        status: 'warn',
        detail: 'Ortak çatı alanına taşma mevcut, komşu malik dava riski bulunuyor.',
      },
      {
        label: 'Banka Konut Kredisi & Abonelik',
        value: 'ŞANTİYE TARİFESİ / KREDİYE KAPALI',
        status: 'warn',
        detail: 'Banka eksper raporu olumsuz çıkacağından kredili satışa uygun değildir.',
      },
    ],
  },
};

const SampleReportSection = () => {
  const [activeTab, setActiveTab] = useState<ReportSampleKey>('risky');
  const sample = REPORT_SAMPLES[activeTab];

  return (
    <section id="ornek-rapor" className="py-24 px-6 bg-slate-100/70 border-y-2 border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-300 text-indigo-900 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest">
            <FileText size={16} className="text-indigo-700" />
            Şeffaf Denetim Çıktısı
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Size Nasıl Bir <span className="text-primary">Arşiv Raporu</span> Sunuyoruz?
          </h2>
          <p className="text-lg text-slate-700 font-semibold">
            E-Devlet veya tapu senedinde görünmeyen belediye arşiv gerçeklerini 24–48 saat içinde imzalı PDF raporu olarak WhatsApp ve e-posta adresinize iletiyoruz.
          </p>

          {/* Toggle Buttons */}
          <div className="inline-flex flex-wrap justify-center gap-3 pt-4" role="tablist" aria-label="Örnek Rapor Senaryoları">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'risky'}
              onClick={() => setActiveTab('risky')}
              className={`px-6 py-3.5 rounded-2xl text-sm font-extrabold transition-all flex items-center gap-2 border-2 ${
                activeTab === 'risky'
                  ? 'bg-rose-700 text-white border-rose-800 shadow-lg scale-[1.02]'
                  : 'bg-white text-slate-800 border-slate-300 hover:border-rose-400'
              }`}
            >
              <AlertTriangle size={18} />
              Gizli Risk Tespit Edilen Rapor Örneği
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'clean'}
              onClick={() => setActiveTab('clean')}
              className={`px-6 py-3.5 rounded-2xl text-sm font-extrabold transition-all flex items-center gap-2 border-2 ${
                activeTab === 'clean'
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-lg scale-[1.02]'
                  : 'bg-white text-slate-800 border-slate-300 hover:border-emerald-400'
              }`}
            >
              <CheckCircle2 size={18} />
              Sorunsuz (İskanlı) Rapor Örneği
            </button>
          </div>
        </div>

        {/* Report Document Card */}
        <div className="bg-white rounded-5xl border-2 border-slate-300 shadow-2xl overflow-hidden">
          {/* Document Header */}
          <div className="bg-slate-900 text-white p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-4 border-indigo-500">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 px-3 py-1 rounded-md">
                  <Stamp size={14} /> Resmi Arşiv İnceleme Raporu
                </span>
                <span className={`text-xs font-extrabold px-3 py-1 rounded-md border ${sample.badgeColor}`}>
                  {sample.badge}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                BELEDİYE İMAR ARŞİVİ & İSKAN DENETİM RAPORU
              </h3>
              <p className="text-slate-300 text-sm font-semibold">
                {sample.location} — <span className="text-indigo-300">{sample.adaParsel}</span>
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 text-left md:text-right shrink-0">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Rapor Referans No</div>
              <div className="text-lg font-extrabold text-white font-mono">{sample.reportNo}</div>
              <div className="text-xs font-bold text-emerald-400 mt-1 flex items-center md:justify-end gap-1.5">
                <Lock size={12} /> Yetki Belge No: 0100277
              </div>
            </div>
          </div>

          {/* Document Body */}
          <div className="p-6 md:p-10 space-y-8">
            {/* Verdict Banner */}
            <div className={`p-6 rounded-3xl border-2 ${sample.verdictBg} flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}>
              <div className="space-y-1">
                <div className="text-xs font-extrabold uppercase tracking-widest text-slate-600">
                  Nihai Uzman Denetim Sonucu ({sample.tapuType})
                </div>
                <div className={`text-lg md:text-xl font-extrabold ${sample.verdictColor}`}>
                  {sample.verdictTitle}
                </div>
              </div>
              <a
                href="#form"
                className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-extrabold uppercase tracking-wider hover:bg-indigo-700 transition-colors shrink-0 inline-flex items-center gap-2"
              >
                Kendi Tapunuzu Sorgulatın <ArrowRight size={16} />
              </a>
            </div>

            {/* 4 Inspection Checkpoints */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {sample.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-200 flex items-start gap-4"
                >
                  <div className="mt-1 shrink-0">
                    {item.status === 'ok' && (
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <CheckCircle2 size={22} />
                      </div>
                    )}
                    {item.status === 'warn' && (
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                        <AlertTriangle size={22} />
                      </div>
                    )}
                    {item.status === 'danger' && (
                      <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                        <XCircle size={22} />
                      </div>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                      {item.label}
                    </div>
                    <div
                      className={`text-base font-extrabold ${
                        item.status === 'ok'
                          ? 'text-emerald-800'
                          : item.status === 'danger'
                          ? 'text-rose-800'
                          : 'text-amber-900'
                      }`}
                    >
                      {item.value}
                    </div>
                    <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expert Summary Note */}
            <div className="p-6 bg-indigo-50/70 rounded-3xl border-2 border-indigo-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-indigo-900">
                <ShieldCheck size={18} className="text-indigo-700" />
                Arşiv Uzmanı Hukuki & Teknik Değerlendirmesi
              </div>
              <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                {sample.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReportSection;
