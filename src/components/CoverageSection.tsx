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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Türkiye Geneli Hizmet
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Türkiye'nin <span className="text-primary">Her Noktasında</span> Yanınızdayız
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            81 ilde konuşlanmış uzman ekiplerimiz ile iskan araştırmanızı
            <span className="text-primary font-semibold"> yerinde</span> gerçekleştiriyoruz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: MapPin, value: "81", label: "İl Kapsamı", color: "text-primary" },
            { icon: Users, value: "32", label: "Saha Ekibi", color: "text-accent" },
            { icon: Building2, value: "973", label: "İlçe Erişimi", color: "text-primary" },
            { icon: CheckCircle2, value: "%100", label: "Türkiye Kapsamı", color: "text-green-500" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-muted/50 ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Turkey Map Visual */}
        <div className="relative bg-gradient-to-br from-card/80 to-muted/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12">
          <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            🇹🇷 Aktif Bölgeler
          </div>

          {/* City Tags */}
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city, index) => (
              <div
                key={city}
                className="group relative px-4 py-2 bg-background/80 border border-border/50 rounded-full text-sm font-medium text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  {city}
                </span>
              </div>
            ))}
            <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-bold text-primary">
              +63 İl Daha
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl px-6 py-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-primary-foreground font-bold text-xs"
                  >
                    {i === 4 ? "+" : "👤"}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Yerinde Denetim Ekibi</p>
                <p className="text-sm text-muted-foreground">Belediye arşivlerinde bizzat araştırma</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Hangi ilde olursanız olun, ekibimiz <span className="text-primary font-semibold">48 saat</span> içinde sahada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
