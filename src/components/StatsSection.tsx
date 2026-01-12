import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Building2, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: 5000,
    suffix: "+",
    label: "Analiz Edilen Gayrimenkul",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Mutlu Müşteri",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Clock,
    value: 48,
    suffix: " Saat",
    label: "Ortalama Teslimat",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Müşteri Memnuniyeti",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString('tr-TR')}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-background -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="relative max-w-6xl mx-auto">
          {/* Floating decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-blob" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000" />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              
              return (
                <div
                  key={stat.label}
                  className={`relative group p-8 bg-card rounded-[2rem] border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon size={28} className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ color: 'inherit' }} />
                    <Icon size={28} className="absolute opacity-100" style={{ 
                      background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                    }} />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl lg:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>

                  {/* Label */}
                  <p className="text-sm font-semibold text-muted-foreground">{stat.label}</p>

                  {/* Decorative gradient line */}
                  <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>

          {/* Trust Badges */}
          <div className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-slate-100 shadow-sm">
              <TrendingUp size={20} className="text-emerald-500" />
              <span className="text-sm font-bold text-foreground">Türkiye Geneli Hizmet</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-slate-100 shadow-sm">
              <Award size={20} className="text-amber-500" />
              <span className="text-sm font-bold text-foreground">Resmi Arşiv Erişimi</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-slate-100 shadow-sm">
              <Users size={20} className="text-indigo-500" />
              <span className="text-sm font-bold text-foreground">Uzman Kadro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;