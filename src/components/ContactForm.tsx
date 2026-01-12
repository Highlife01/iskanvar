import { useState, FormEvent, ChangeEvent } from 'react';
import { ArrowRight, Upload, FileCheck } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  serviceType: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData, file: File | null) => void;
  isSubmitting: boolean;
  initialCity?: string;
  initialDistrict?: string;
}

const ContactForm = ({ onSubmit, isSubmitting, initialCity = '', initialDistrict = '' }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    city: initialCity,
    district: initialDistrict,
    serviceType: 'iskan', // Default
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData, file);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-32" id="form">
      <div className="bg-card rounded-8xl p-10 md:p-24 shadow-card border border-slate-50 grid lg:grid-cols-12 gap-20">

        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-foreground tracking-tight">Danışmanlık Formu</h2>
            <p className="section-desc">
              Uzmanlarımızın belediye dosyalarını incelemesi için lütfen tapu detaylarını iletin.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary font-extrabold text-xl shrink-0">01</div>
              <p className="text-muted-foreground font-bold leading-relaxed pt-3">Tapu belgenizi (PDF veya Fotoğraf) sisteme yükleyin.</p>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary font-extrabold text-xl shrink-0">02</div>
              <p className="text-muted-foreground font-bold leading-relaxed pt-3">İl ve ilçe bilgisini doğrulayarak talebi tamamlayın.</p>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-extrabold text-xl shrink-0">03</div>
              <p className="text-muted-foreground font-bold leading-relaxed pt-3">Raporunuz WhatsApp hattınıza gelsin.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50/80 rounded-6xl p-8 md:p-14 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-2">Ad Soyad</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Adınız Soyadınız"
                  aria-label="Ad Soyad"
                  className="form-input"
                  onChange={handleInputChange}
                  value={formData.fullName}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-2">E-posta</label>
                <input
                  type="email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="ornek@mail.com"
                  aria-label="E-posta Adresi"
                  className="form-input"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-2">WhatsApp No</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="05xx xxx xx xx"
                aria-label="WhatsApp Numarası"
                className="form-input"
                onChange={handleInputChange}
                value={formData.phone}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-2">Şehir</label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Örn: Antalya"
                  aria-label="Şehir"
                  className="form-input"
                  onChange={handleInputChange}
                  value={formData.city}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-2">İlçe</label>
                <input
                  type="text"
                  name="district"
                  required
                  placeholder="Örn: Kaş"
                  aria-label="İlçe"
                  className="form-input"
                  onChange={handleInputChange}
                  value={formData.district}
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 pb-2">
              <label className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-2">Hizmet Türü</label>
              <div className="grid grid-cols-1 gap-4">
                <label className={`relative flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.serviceType === 'iskan'
                  ? 'border-indigo-600 bg-indigo-50 shadow-md scale-[1.01]'
                  : 'border-slate-100 hover:border-slate-300'
                  }`}>
                  <input
                    type="radio"
                    name="serviceType"
                    value="iskan"
                    checked={formData.serviceType === 'iskan'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    aria-label="Bina İskan Araştırma"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center w-full">
                      <span className="block text-sm font-bold text-slate-900">Bina İskan Araştırma</span>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded ml-2">3000 TL</span>
                    </div>
                    <span className="block text-xs text-slate-500 font-medium mt-1">Standart araştırma hizmeti</span>
                  </div>
                </label>

                <label className={`relative flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.serviceType === 'imar'
                  ? 'border-indigo-600 bg-indigo-50 shadow-md scale-[1.01]'
                  : 'border-slate-100 hover:border-slate-300'
                  }`}>
                  <input
                    type="radio"
                    name="serviceType"
                    value="imar"
                    checked={formData.serviceType === 'imar'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    aria-label="İmar Durum Araştırma"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center w-full">
                      <span className="block text-sm font-bold text-slate-900">İmar Durum Araştırma</span>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded ml-2">3000 TL</span>
                    </div>
                    <span className="block text-xs text-slate-500 font-medium mt-1">Detaylı imar durum raporu ve analizi</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground ml-2">Tapu Belgesi (Gerekli)</label>
              <div className="relative group">
                <input
                  type="file"
                  required
                  name="tapu_belgesi"
                  aria-label="Tapu Belgesi Yükle"
                  onChange={handleFileChange}
                  accept="image/*,application/pdf"
                  className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                />
                <div className={`upload-zone ${file ? 'upload-zone-filled' : 'upload-zone-empty'}`}>
                  {file ? (
                    <div className="flex flex-col items-center gap-4 text-primary font-extrabold">
                      <FileCheck size={56} strokeWidth={1.5} />
                      <span className="text-sm tracking-widest uppercase">{file.name}</span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-20 h-20 bg-slate-50 rounded-4xl flex items-center justify-center mx-auto text-muted-foreground group-hover:text-primary transition-colors shadow-sm">
                        <Upload size={36} strokeWidth={1.5} />
                      </div>
                      <div className="text-sm font-bold text-muted-foreground italic">Dokümanı seçmek için tıklayın</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card/50 rounded-3xl border border-slate-100">
              <input
                type="checkbox"
                required
                id="consent"
                name="consent"
                aria-label="Danışmanlık onayı"
                className="mt-1 w-6 h-6 rounded-lg border-slate-300 text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed font-bold uppercase select-none cursor-pointer">
                <span className="text-primary hover:underline italic">KVKK Aydınlatma Metni</span>'ni okudum. Adıma resmi araştırma yapılmasını ve verilerimin bu kapsamda işlenmesini kabul ediyorum.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-7 rounded-5xl font-extrabold text-xl flex items-center justify-center gap-4 transition-all shadow-2xl ${isSubmitting
                ? 'bg-slate-300 cursor-not-allowed text-card'
                : 'bg-primary text-primary-foreground hover:bg-indigo-700 shadow-indigo-200 active:scale-[0.98]'
                }`}
            >
              {isSubmitting ? 'Dosya Hazırlanıyor...' : (
                <>Analizi Başlat <ArrowRight size={28} /></>
              )}
            </button>

            <div className="mt-8 p-6 bg-white/50 rounded-3xl border border-slate-200/60 text-[10px] text-slate-500 leading-relaxed font-medium">
              <h4 className="font-extrabold uppercase mb-2 text-slate-700">Resmî Kurum Olmadığına Dair Bilgilendirme ve Yasal Uyarı</h4>
              <p className="mb-2">
                iskanvar.com.tr, herhangi bir kamu kurumu, belediye, tapu müdürlüğü veya resmî devlet kuruluşu değildir.
                Site; yapı kullanma izin belgesi (iskan) ve benzeri resmî süreçlerle ilgili olarak, kullanıcılar adına takip, bilgilendirme ve danışmanlık hizmeti sunan özel bir platformdur.
              </p>
              <p className="mb-2">
                Sunulan hizmetler; ilgili resmî kurumlar nezdinde yürütülen işlemlerin takibini yapmak, başvuru süreci hakkında bilgilendirmek ve kullanıcı adına süreci organize etmek amacıyla sağlanır.
                iskanvar.com.tr üzerinden yapılan işlemler, doğrudan kamu kurumu işlemi yerine geçmez. Tüm resmî işlemler ve nihai kararlar, yetkili kamu kurumları tarafından verilir.
              </p>
              <div className="font-extrabold text-primary mt-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Yetki Belge No: 0100277
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
