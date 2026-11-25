import { MapPin, Users, Building2, CheckCircle2 } from "lucide-react";

const cities = [
  "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana",
  "Konya", "Gaziantep", "Mersin", "Kayseri", "Eskişehir", "Diyarbakır",
  "Samsun", "Denizli", "Şanlıurfa", "Malatya", "Trabzon", "Erzurum"
];

const CoverageSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-extrabold mb-6">
            <MapPin className="w-4 h-4 text-indigo-700" />
            Türkiye Geneli Hizmet
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Türkiye'nin <span className="text-primary">Her Noktasında</span> Yanınızdayız
          </h2>
          <p className="text-lg text-slate-700 font-medium max-w-2xl mx-auto">
            81 ilde konuşlanmış uzman ekiplerimiz ile iskan araştırmanızı
            <span className="text-primary font-extrabold"> yerinde</span> gerçekleştiriyoruz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: MapPin, value: "81", label: "İl Kapsamı", color: "text-indigo-700", bg: "bg-indigo-100 border-indigo-200" },
            { icon: Users, value: "32", label: "Saha Ekibi", color: "text-purple-700", bg: "bg-purple-100 border-purple-200" },
            { icon: Building2, value: "973", label: "İlçe Erişimi", color: "text-blue-700", bg: "bg-blue-100 border-blue-200" },
            { icon: CheckCircle2, value: "%100", label: "Türkiye Kapsamı", color: "text-emerald-700", bg: "bg-emerald-100 border-emerald-200" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-white border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-soft hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3.5 rounded-xl border ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-700 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Turkey Map Visual */}
        <div className="relative bg-white border-2 border-slate-200 shadow-card rounded-3xl p-8 md:p-12">
          <div className="absolute -top-3.5 left-8 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-extrabold shadow-lg">
            🇹🇷 Aktif Bölgeler
          </div>

          {/* City Tags */}
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city, index) => (
              <div
                key={city}
                className="group relative px-4 py-2 bg-slate-50 border-2 border-slate-200 rounded-full text-sm font-bold text-slate-800 hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-800 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  {city}
                </span>
              </div>
            ))}
            <div className="px-4 py-2 bg-indigo-100 border-2 border-indigo-300 rounded-full text-sm font-extrabold text-indigo-800">
              +63 İl Daha
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-4 bg-slate-900 text-white border border-slate-800 rounded-2xl px-6 py-4 shadow-lg">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-slate-900 flex items-center justify-center text-white font-bold text-xs"
                  >
                    {i === 4 ? "+" : "👤"}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-extrabold text-white">Yerinde Denetim Ekibi</p>
                <p className="text-sm text-slate-300 font-medium">Belediye arşivlerinde bizzat araştırma</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-700 font-semibold mb-4">
            Hangi ilde olursanız olun, ekibimiz <span className="text-primary font-extrabold">48 saat</span> içinde sahada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
