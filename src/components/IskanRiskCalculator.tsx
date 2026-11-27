import { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Calculator,
  FileSearch,
} from 'lucide-react';

interface QuestionOption {
  label: string;
  desc: string;
  points: number;
}

const QUESTIONS: {
  id: string;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}[] = [
  {
    id: 'tapu',
    title: '1. Tapu Senedinde Taşınmazın Niteliği Ne Olarak Görünüyor?',
    subtitle: 'Tapu senedinin orta kısmındaki "Ana Gayrimenkulün Niteliği" veya "Kat Mülkiyeti / Kat İrtifakı" kutucuğuna bakın.',
    options: [
      {
        label: 'Kat Mülkiyeti',
        desc: 'Kat Mülkiyeti kutucuğu işaretli',
        points: 10,
      },
      {
        label: 'Kat İrtifakı',
        desc: 'Kat İrtifakı kutucuğu işaretli (Henüz cins tashihi yapılmamış)',
        points: 45,
      },
      {
        label: 'Arsa / Tarla / Hisseli Tapu',
        desc: 'Bağımsız bölüm yerine arsa payı görünüyor',
        points: 75,
      },
      {
        label: 'Emin Değilim / Tapu Elimde Değil',
        desc: 'Satıcı veya emlakçı sözlü bilgi verdi',
        points: 50,
      },
    ],
  },
  {
    id: 'age',
    title: '2. Binanın İnşaat / Yapı Ruhsat Yaşı ve Durumu Nedir?',
    subtitle: '3194 sayılı İmar Kanunu Md. 29 uyarınca yapı ruhsatı süresi 5 yıldır.',
    options: [
      {
        label: '0 – 3 Yıllık Yeni Bina',
        desc: 'İnşaatı yeni tamamlanmış veya devam ediyor',
        points: 20,
      },
      {
        label: '3 – 5 Yıllık Bina',
        desc: '5 yıllık ruhsat süresi dolmak üzere',
        points: 35,
      },
      {
        label: '5 Yıldan Eski Bina',
        desc: 'Ruhsat süresi dolmuş veya eski yapı',
        points: 50,
      },
      {
        label: 'Yapı Kayıt Belgeli (İmar Barışı)',
        desc: '2018 İmar Barışı kapsamında belge alınmış',
        points: 40,
      },
    ],
  },
  {
    id: 'utility',
    title: '3. Elektrik, Su ve Doğalgaz Abonelikleri Nasıl Kullanılıyor?',
    subtitle: 'Abonelik türü binanın belediye nezdindeki iskan statüsünün en önemli göstergesidir.',
    options: [
      {
        label: 'Bireysel Mesken Aboneliği',
        desc: 'Her dairenin kendi adına mesken faturası var',
        points: 5,
      },
      {
        label: 'Şantiye Elektriği / Ortak Sayaç',
        desc: 'Faturalar inşaat/şantiye tarifesinden veya yönetim üzerinden ödeniyor',
        points: 55,
      },
      {
        label: 'Henüz Abonelik Açılmamış (Sıfır Daire)',
        desc: 'İlk abonelik başvurusu yapılacak',
        points: 30,
      },
    ],
  },
];

const IskanRiskCalculator = () => {
  const [answers, setAnswers] = useState<Record<string, QuestionOption>>({});
  const [showResult, setShowResult] = useState(false);

  const allAnswered = QUESTIONS.every((q) => Boolean(answers[q.id]));
  const totalScore = Object.values(answers).reduce((sum, opt) => sum + opt.points, 0);

  const getRiskAssessment = (score: number) => {
    if (score >= 95) {
      return {
        level: 'YÜKSEK HUKUKİ & MALİ RİSK',
        badgeClass: 'bg-rose-100 text-rose-900 border-rose-300',
        boxClass: 'bg-rose-50 border-rose-300',
        titleColor: 'text-rose-900',
        icon: <ShieldAlert size={36} className="text-rose-700 shrink-0" />,
        description:
          'Seçtiğiniz kriterlere göre taşınmazın belediye imar arşivinde "iskansız / ruhsat süresi dolmuş" veya "projeye aykırı yapı tatil zaptı / yıkım ve encümen para cezası" bulunma ihtimali oldukça yüksektir. Tapu devri yapmadan önce mutlaka belediye arşiv dosyasını inceletin.',
      };
    }
    if (score >= 55) {
      return {
        level: 'ORTA – YÜKSEK RİSK (ARŞİV KONTROLÜ ŞART)',
        badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
        boxClass: 'bg-amber-50 border-amber-300',
        titleColor: 'text-amber-950',
        icon: <AlertTriangle size={36} className="text-amber-700 shrink-0" />,
        description:
          'Taşınmaz henüz tam kat mülkiyetine geçmemiş veya iskan sürecinde takılmış olabilir. Müteahhidin SGK/vergi borcu, sığınak/çatı/teras büyümesi veya kanal bağlantı (İSKİ/ASKİ) eksikliği nedeniyle iskan engeli olup olmadığı belediye arşivinden kontrol edilmelidir.',
      };
    }
    return {
      level: 'DÜŞÜK RİSK — PROJE & TADİLAT UYUMU KONTROL EDİLMELİ',
      badgeClass: 'bg-emerald-100 text-emerald-950 border-emerald-300',
      boxClass: 'bg-emerald-50 border-emerald-300',
      titleColor: 'text-emerald-950',
      icon: <CheckCircle2 size={36} className="text-emerald-700 shrink-0" />,
      description:
        'Taşınmazın temel göstergeleri olumlu görünmektedir. Ancak sonradan yapılan balkon/teras kapatma, dubleks büyütme veya bağımsız bölüm numarası kayması gibi tapuda görünmeyen risklere karşı resmi belediye arşiv raporu almanız önerilir.',
    };
  };

  const assessment = getRiskAssessment(totalScore);

  return (
    <section id="risk-testi" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-6xl border-2 border-slate-200 shadow-card p-8 md:p-14">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest">
            <Calculator size={16} className="text-indigo-700" />
            Ücretsiz Ön Değerlendirme Aracı
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            30 Saniyede <span className="text-primary">İskan & Tapu Risk</span> Testi
          </h2>
          <p className="text-base md:text-lg text-slate-700 font-semibold">
            Almayı düşündüğünüz veya sahibi olduğunuz gayrimenkulün 3 temel özelliğini seçin, olası belediye ve imar risklerini anında görün.
          </p>
        </div>

        <div className="space-y-10">
          {QUESTIONS.map((q) => (
            <div key={q.id} className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900">{q.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">{q.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id]?.label === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, [q.id]: opt }));
                        setShowResult(false);
                      }}
                      className={`text-left p-5 rounded-2xl border-2 transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/80 shadow-md'
                          : 'border-slate-200 bg-slate-50/60 hover:border-slate-400 hover:bg-white'
                      }`}
                    >
                      <div>
                        <div className="font-extrabold text-slate-900 text-sm md:text-base">
                          {opt.label}
                        </div>
                        <div className="text-xs text-slate-700 font-semibold mt-1">
                          {opt.desc}
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-slate-400 bg-white'
                        }`}
                      >
                        {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Action / Result */}
          {!showResult ? (
            <div className="pt-4 text-center">
              <button
                type="button"
                disabled={!allAnswered}
                onClick={() => setShowResult(true)}
                className={`px-10 py-5 rounded-3xl font-extrabold text-lg inline-flex items-center gap-3 transition-all shadow-xl ${
                  allAnswered
                    ? 'bg-primary text-white hover:bg-indigo-800 hover:scale-[1.02]'
                    : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                }`}
              >
                <FileSearch size={22} />
                {allAnswered ? 'Risk Analizini Göster' : 'Lütfen 3 Soruyu Yanıtlayın'}
              </button>
            </div>
          ) : (
            <div className={`p-8 rounded-4xl border-2 ${assessment.boxClass} space-y-6 animate-fade-in`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  {assessment.icon}
                  <div className="space-y-1">
                    <span className={`inline-block text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${assessment.badgeClass}`}>
                      Ön Değerlendirme Sonucu
                    </span>
                    <h4 className={`text-xl md:text-2xl font-extrabold ${assessment.titleColor}`}>
                      {assessment.level}
                    </h4>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setAnswers({});
                    setShowResult(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-700 hover:text-slate-950 underline"
                >
                  <RotateCcw size={14} /> Testi Sıfırla
                </button>
              </div>

              <p className="text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                {assessment.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-300/80">
                <div className="text-xs font-extrabold text-slate-700">
                  Seçimleriniz: {answers.tapu?.label} • {answers.age?.label} • {answers.utility?.label}
                </div>
                <a
                  href="#form"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-extrabold text-sm hover:bg-indigo-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  Resmi Belediye Arşiv Raporu Başvurusu Yap <ArrowRight size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IskanRiskCalculator;
