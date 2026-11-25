import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mehmet Yılmaz",
    location: "Kadıköy, İstanbul",
    rating: 5,
    text: "Satın almak istediğim dairenin iskan durumunu öğrenmek için başvurdum. 2 gün içinde detaylı raporu aldım. Gerçekten profesyonel bir hizmet.",
    date: "15 Aralık 2024"
  },
  {
    id: 2,
    name: "Ayşe Kara",
    location: "Çankaya, Ankara",
    rating: 5,
    text: "E-devlet'te bilgi yoktu ama iskanvar belediye arşivinden belgemi buldu. Kredi başvurum için çok önemliydi, teşekkürler!",
    date: "12 Aralık 2024"
  },
  {
    id: 3,
    name: "Ali Demir",
    location: "Karşıyaka, İzmir",
    rating: 5,
    text: "Hızlı ve güvenilir hizmet. WhatsApp üzerinden anlık bilgi aldım. Kesinlikle tavsiye ediyorum.",
    date: "8 Aralık 2024"
  },
  {
    id: 4,
    name: "Fatma Özkan",
    location: "Nilüfer, Bursa",
    rating: 5,
    text: "Gayrimenkul yatırımı yapmadan önce iskan kontrolü yaptırdım. Olası bir sorundan kurtuldum. Çok memnunum.",
    date: "5 Aralık 2024"
  },
  {
    id: 5,
    name: "Mustafa Çelik",
    location: "Pendik, İstanbul",
    rating: 5,
    text: "Profesyonel ekip ve hızlı geri dönüş. Belgelerimi zamanında teslim ettiler. 5 yıldızı hak ediyorlar.",
    date: "1 Aralık 2024"
  },
  {
    id: 6,
    name: "Zeynep Arslan",
    location: "Bornova, İzmir",
    rating: 5,
    text: "İskan sorgulaması için en güvenilir adres. Detaylı rapor ve açıklayıcı bilgilendirme aldım.",
    date: "28 Kasım 2024"
  },
  {
    id: 7,
    name: "Hakan Yıldız",
    location: "Ümraniye, İstanbul",
    rating: 5,
    text: "Eski bir binada daire aldım ve iskan durumu belirsizdi. İskanvar sayesinde tüm süreci öğrendim. Harika bir hizmet!",
    date: "25 Kasım 2024"
  },
  {
    id: 8,
    name: "Elif Şahin",
    location: "Konak, İzmir",
    rating: 5,
    text: "Banka kredi için iskan belgesi istedi. 3 gün içinde elime ulaştı. Süper hızlı ve güvenilir.",
    date: "22 Kasım 2024"
  },
  {
    id: 9,
    name: "Oğuz Kaya",
    location: "Beylikdüzü, İstanbul",
    rating: 5,
    text: "WhatsApp desteği çok pratik. Sorularıma anında cevap aldım. Teşekkürler iskanvar ekibi!",
    date: "18 Kasım 2024"
  },
  {
    id: 10,
    name: "Seda Aktaş",
    location: "Yenimahalle, Ankara",
    rating: 5,
    text: "Ev almadan önce mutlaka iskan kontrolü yaptırın diyorum herkese. İskanvar bu konuda en güvenilir adres.",
    date: "15 Kasım 2024"
  },
  {
    id: 11,
    name: "Burak Eren",
    location: "Muratpaşa, Antalya",
    rating: 5,
    text: "Tatil için aldığım yazlığın iskan durumunu sorguladım. Her şey şeffaf ve net açıklandı. Mükemmel!",
    date: "12 Kasım 2024"
  },
  {
    id: 12,
    name: "Derya Koç",
    location: "Osmangazi, Bursa",
    rating: 5,
    text: "Apartmanımızın kat mülkiyeti işlemleri için danıştık. Çok yardımcı oldular, kesinlikle tavsiye ederim.",
    date: "8 Kasım 2024"
  },
  {
    id: 13,
    name: "Emre Polat",
    location: "Maltepe, İstanbul",
    rating: 5,
    text: "Fiyatlar çok makul, hizmet kalitesi üst düzey. Rakiplerine göre çok daha profesyoneller.",
    date: "5 Kasım 2024"
  },
  {
    id: 14,
    name: "Gülşen Aydın",
    location: "Mamak, Ankara",
    rating: 5,
    text: "Yaşlı annem için iskan sorgulama yaptırdım. Her adımda bilgilendirildim. Güvenle çalışabilirsiniz.",
    date: "1 Kasım 2024"
  }
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;

        // Reset when we've scrolled through half (since content is duplicated)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}
      />
    ));
  };

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-extrabold rounded-full mb-4">
            Müşteri Yorumları
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-slate-700 font-medium">
            Binlerce memnun müşterimizin deneyimlerini keşfedin
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            aria-hidden={index >= testimonials.length}
            className="flex-shrink-0 w-[350px] md:w-[400px] p-6 bg-white border-2 border-slate-200 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h4 className="font-extrabold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-600 font-semibold">{testimonial.location}</p>
              </div>
              <Quote size={24} className="text-indigo-200" />
            </div>

            <div className="flex gap-0.5 mb-3">
              {renderStars(testimonial.rating)}
            </div>

            <p className="text-slate-700 font-medium text-sm leading-relaxed mb-4">
              "{testimonial.text}"
            </p>

            <p className="text-xs text-slate-500 font-semibold">{testimonial.date}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="flex justify-center items-center gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-slate-900">4.9/5</p>
            <p className="text-sm text-slate-700 font-bold">Ortalama Puan</p>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div>
            <p className="text-3xl font-extrabold text-slate-900">2,500+</p>
            <p className="text-sm text-slate-700 font-bold">Mutlu Müşteri</p>
          </div>
          <div className="w-px h-12 bg-slate-300"></div>
          <div>
            <p className="text-3xl font-extrabold text-slate-900">%98</p>
            <p className="text-sm text-slate-700 font-bold">Memnuniyet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
