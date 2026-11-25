import { useEffect, useRef, useState } from 'react';
import { FileUp, Search, FileCheck, Send, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: FileUp,
    title: "Tapu Belgesi Yükle",
    description: "Gayrimenkulünüzün tapu belgesini veya ada/parsel bilgilerini güvenli sistemimize yükleyin.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: 2,
    icon: Search,
    title: "Arşiv Taraması",
    description: "Uzman ekibimiz ilgili belediyenin arşivlerini detaylı şekilde tarar ve inceler.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    icon: FileCheck,
    title: "Durum Analizi",
    description: "İskan belgesi durumu, varsa eksiklikler ve çözüm önerileri hazırlanır.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: 4,
    icon: Send,
    title: "Rapor Teslimi",
    description: "Detaylı analiz raporu WhatsApp ve e-posta ile size iletilir.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="surec" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 shadow-sm border border-indigo-200 rounded-full text-xs font-extrabold text-indigo-800 uppercase tracking-widest mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles size={14} className="text-amber-600" />
            Süreç Adımları
          </div>
          <h2 className={`text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-gradient-primary">4 Adımda</span> İskan Sorgulama
          </h2>
          <p className={`text-xl text-slate-700 font-semibold transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Profesyonel ekibimiz ile güvenilir iskan sorgulaması sadece birkaç adım uzağınızda
          </p>
        </div>

        {/* Steps Timeline - Desktop */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1.5 bg-slate-200 rounded-full" />
          <div
            className="absolute top-24 left-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          />

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPassed = index < activeStep;

              return (
                <div
                  key={step.id}
                  className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-8">
                    <div
                      className={`relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${isActive
                          ? `bg-gradient-to-br ${step.color} text-white shadow-lg scale-110`
                          : isPassed
                            ? `bg-gradient-to-br ${step.color} text-white`
                            : 'bg-white border-2 border-slate-300 text-slate-700 shadow-sm'
                        }`}
                    >
                      {isPassed ? (
                        <FileCheck size={24} />
                      ) : (
                        <span className="text-xl font-extrabold">{step.id}</span>
                      )}

                      {/* Pulse Effect */}
                      {isActive && (
                        <>
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-30`} />
                          <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${step.color} opacity-20 animate-pulse`} />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`text-center p-6 rounded-3xl transition-all duration-500 border-2 ${isActive
                        ? `${step.bgColor} border-indigo-300 shadow-xl scale-105`
                        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-sm'
                      }`}
                  >
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${step.bgColor} border border-slate-200/60 flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-110 rotate-3' : ''}`}>
                      <Icon size={28} className={step.iconColor} />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Steps - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;

            return (
              <div
                key={step.id}
                className={`relative flex gap-6 p-6 rounded-3xl transition-all duration-500 cursor-pointer ${isActive ? `${step.bgColor} shadow-xl` : 'bg-card hover:bg-slate-50'
                  } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive
                      ? `bg-gradient-to-br ${step.color} text-white shadow-lg`
                      : `${step.bgColor} ${step.iconColor}`
                    }`}
                >
                  {isActive ? <Icon size={24} /> : <span className="text-lg font-bold">{step.id}</span>}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-3 left-10 text-slate-300">
                    <ArrowRight size={20} className="rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#form"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full font-bold text-lg shadow-button hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Hemen Başla
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;