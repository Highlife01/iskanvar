import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Building2, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: 5000,
    suffix: "+",
    label: "Analiz Edilen Gayrimenkul",
    color: "from-indigo-600 to-indigo-800",
    bgColor: "bg-indigo-100 border border-indigo-200",
    iconColor: "text-indigo-700",
  },
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Mutlu Müşteri",
    color: "from-emerald-600 to-emerald-800",
    bgColor: "bg-emerald-100 border border-emerald-200",
    iconColor: "text-emerald-700",
  },
  {
    icon: Clock,
    value: 48,
    suffix: " Saat",
    label: "Ortalama Teslimat",
    color: "from-amber-600 to-amber-800",
    bgColor: "bg-amber-100 border border-amber-200",
    iconColor: "text-amber-700",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Müşteri Memnuniyeti",
    color: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-100 border border-purple-200",
    iconColor: "text-purple-700",
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
                  className={`relative group p-8 bg-white rounded-[2rem] border-2 border-slate-200/90 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon size={28} className={stat.iconColor} />
                  </div>

                  {/* Value */}
                  <div className={`text-4xl lg:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>

                  {/* Label */}
                  <p className="text-sm font-extrabold text-slate-700">{stat.label}</p>

                  {/* Decorative gradient line */}
                  <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              );
            })}
          </div>

          {/* Trust Badges */}
          <div className={`mt-16 flex flex-wrap justify-center items-center gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-full border-2 border-slate-200 shadow-sm">
              <TrendingUp size={20} className="text-emerald-600" />
              <span className="text-sm font-extrabold text-slate-900">Türkiye Geneli Hizmet</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-full border-2 border-slate-200 shadow-sm">
              <Award size={20} className="text-amber-600" />
              <span className="text-sm font-extrabold text-slate-900">Resmi Arşiv Erişimi</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3.5 bg-white rounded-full border-2 border-slate-200 shadow-sm">
              <Users size={20} className="text-indigo-600" />
              <span className="text-sm font-extrabold text-slate-900">Uzman Kadro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;