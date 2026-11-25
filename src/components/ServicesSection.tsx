import { Search, Briefcase, FileCheck, MapPin, Building2, FileText } from 'lucide-react';

const iskanServices = [
  {
    title: "Arşiv Sorgulama",
    icon: <Search />,
    desc: "Belediye arşivindeki Yapı Ruhsatı ve Yapı Kullanma İzin belgesi dijital/fiziki kayıtlarını tarıyoruz.",
    bg: "bg-indigo-50",
    text: "text-primary"
  },
  {
    title: "Hukuki Analiz",
    icon: <Briefcase />,
    desc: "Mevcut yapının, iskan belgesine aykırı tadilatlar içerip içermediğini ve yasal riskleri analiz ediyoruz.",
    bg: "bg-purple-50",
    text: "text-purple-600"
  },
  {
    title: "Sertifikalı Rapor",
    icon: <FileCheck />,
    desc: "Uzmanlarımız tarafından hazırlanan imzalı durum raporunu PDF olarak WhatsApp üzerinden iletiyoruz.",
    bg: "bg-emerald-50",
    text: "text-emerald-600"
  }
];

const imarServices = [
  {
    title: "İmar Durumu Belgesi",
    icon: <MapPin />,
    desc: "Parselin imar planındaki durumunu, yapılaşma koşullarını ve kullanım amacını resmi kaynaklardan araştırıyoruz.",
    bg: "bg-orange-50",
    text: "text-orange-600"
  },
  {
    title: "Yapılaşma Analizi",
    icon: <Building2 />,
    desc: "TAKS, KAKS, kat yüksekliği, çekme mesafeleri ve yapı düzeni gibi kritik imar verilerini raporluyoruz.",
    bg: "bg-cyan-50",
    text: "text-cyan-600"
  },
  {
    title: "İmar Planı Raporu",
    icon: <FileText />,
    desc: "Mevcut ve öngörülen imar planı değişikliklerini içeren kapsamlı bir değerlendirme raporu sunuyoruz.",
    bg: "bg-rose-50",
    text: "text-rose-600"
  }
];

const ServiceCard = ({ service, index }: { service: typeof iskanServices[0], index: number }) => (
  <div
    className="group p-10 bg-white rounded-3xl shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200/90 hover:border-indigo-400"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-200/70 ${service.bg} ${service.text} group-hover:scale-110 transition-transform`}>
      <span className="[&>svg]:w-7 [&>svg]:h-7 [&>svg]:stroke-[2]" aria-hidden="true">
        {service.icon}
      </span>
    </div>
    <h3 className="text-xl font-extrabold mb-3 tracking-tight text-slate-900">{service.title}</h3>
    <p className="text-slate-700 font-medium leading-relaxed text-sm">{service.desc}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-100/70 to-background" id="surec">
      <div className="container mx-auto px-4">
        {/* İskan Hizmetleri */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-extrabold mb-4">
              <FileCheck className="w-4 h-4 text-indigo-700" />
              İskan Sorgulama
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              İskan Durumu <span className="text-primary">Danışmanlığı</span>
            </h2>
            <p className="text-slate-700 font-medium">
              Gayrimenkul yatırımınızın hukuki statüsünü 3 temel aşamada güvenceye alıyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {iskanServices.map((s, i) => (
              <ServiceCard key={i} service={s} index={i} />
            ))}
          </div>
        </div>

        {/* İmar Hizmetleri */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-extrabold mb-4">
              <MapPin className="w-4 h-4 text-orange-700" />
              İmar Araştırması
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              İmar Durumu <span className="text-orange-600">Araştırması</span>
            </h2>
            <p className="text-slate-700 font-medium">
              Arsanızın veya binanızın imar durumunu detaylı şekilde araştırıyor, raporluyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {imarServices.map((s, i) => (
              <ServiceCard key={i} service={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
