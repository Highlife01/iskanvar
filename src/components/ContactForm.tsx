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
    <section className="max-w-7xl mx-auto px-6 py-24" id="form">
      <div className="bg-white rounded-8xl p-8 md:p-16 lg:p-20 shadow-card border-2 border-slate-200 grid lg:grid-cols-12 gap-14">

        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Danışmanlık Formu</h2>
            <p className="text-slate-700 font-semibold text-lg leading-relaxed">
              Uzmanlarımızın belediye dosyalarını incelemesi için lütfen tapu detaylarını iletin.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-indigo-100 border border-indigo-200 rounded-2xl flex items-center justify-center text-indigo-800 font-extrabold text-xl shrink-0">01</div>
              <p className="text-slate-800 font-bold leading-relaxed pt-2">Tapu belgenizi (PDF veya Fotoğraf) sisteme yükleyin.</p>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-indigo-100 border border-indigo-200 rounded-2xl flex items-center justify-center text-indigo-800 font-extrabold text-xl shrink-0">02</div>
              <p className="text-slate-800 font-bold leading-relaxed pt-2">İl ve ilçe bilgisini doğrulayarak talebi tamamlayın.</p>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-emerald-100 border border-emerald-200 rounded-2xl flex items-center justify-center text-emerald-800 font-extrabold text-xl shrink-0">03</div>
              <p className="text-slate-800 font-bold leading-relaxed pt-2">Raporunuz WhatsApp hattınıza gelsin.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-50 rounded-6xl p-8 md:p-12 border-2 border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 ml-1">Ad Soyad</label>
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
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 ml-1">E-posta</label>
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

            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 ml-1">WhatsApp No</label>
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
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 ml-1">Şehir</label>
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
              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 ml-1">İlçe</label>
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

            <div className="space-y-3 pt-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 ml-1">Hizmet Türü</label>
              <div className="grid grid-cols-1 gap-4">
                <label className={`relative flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all bg-white ${formData.serviceType === 'iskan'
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-md'
                  : 'border-slate-200 hover:border-slate-400'
                  }`}>
                  <input
                    type="radio"
                    name="serviceType"
                    value="iskan"
                    checked={formData.serviceType === 'iskan'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-indigo-600 border-gray-400 focus:ring-indigo-500"
                    aria-label="Bina İskan Araştırma"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center w-full">
                      <span className="block text-sm font-extrabold text-slate-900">Bina İskan Araştırma</span>
                      <span className="bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-extrabold px-2.5 py-1 rounded-md ml-2">3000 TL</span>
                    </div>
                    <span className="block text-xs text-slate-700 font-semibold mt-1">Standart araştırma hizmeti</span>
                  </div>
                </label>

                <label className={`relative flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all bg-white ${formData.serviceType === 'imar'
                  ? 'border-indigo-600 bg-indigo-50/70 shadow-md'
                  : 'border-slate-200 hover:border-slate-400'
                  }`}>
                  <input
                    type="radio"
                    name="serviceType"
                    value="imar"
                    checked={formData.serviceType === 'imar'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-indigo-600 border-gray-400 focus:ring-indigo-500"
                    aria-label="İmar Durum Araştırma"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center w-full">
                      <span className="block text-sm font-extrabold text-slate-900">İmar Durum Araştırma</span>
                      <span className="bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-extrabold px-2.5 py-1 rounded-md ml-2">3000 TL</span>
                    </div>
                    <span className="block text-xs text-slate-700 font-semibold mt-1">Detaylı imar durum raporu ve analizi</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 ml-1">Tapu Belgesi (Gerekli)</label>
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
                    <div className="flex flex-col items-center gap-3 text-indigo-700 font-extrabold">
                      <FileCheck size={48} strokeWidth={2} />
                      <span className="text-sm tracking-wider uppercase">{file.name}</span>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-indigo-50 border border-indigo-200 rounded-3xl flex items-center justify-center mx-auto text-indigo-700 group-hover:scale-105 transition-transform shadow-sm">
                        <Upload size={30} strokeWidth={2} />
                      </div>
                      <div className="text-sm font-extrabold text-slate-700">Tapu dokümanını seçmek için tıklayın</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border-2 border-slate-200">
              <input
                type="checkbox"
                required
                id="consent"
                name="consent"
                aria-label="Danışmanlık onayı"
                className="mt-1 w-5 h-5 rounded border-slate-400 text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-slate-800 leading-relaxed font-bold select-none cursor-pointer">
                <span className="text-primary underline font-extrabold">KVKK Aydınlatma Metni</span>'ni okudum. Adıma resmi araştırma yapılmasını ve verilerimin bu kapsamda işlenmesini kabul ediyorum.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-6 rounded-4xl font-extrabold text-xl flex items-center justify-center gap-3 transition-all shadow-xl ${isSubmitting
                ? 'bg-slate-400 cursor-not-allowed text-white'
                : 'bg-primary text-primary-foreground hover:bg-indigo-800 active:scale-[0.98]'
                }`}
            >
              {isSubmitting ? 'Dosya Hazırlanıyor...' : (
                <>Analizi Başlat <ArrowRight size={26} /></>
              )}
            </button>

            <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-slate-200 text-xs text-slate-700 leading-relaxed font-semibold">
              <h4 className="font-extrabold uppercase mb-2 text-slate-900">Resmî Kurum Olmadığına Dair Bilgilendirme ve Yasal Uyarı</h4>
              <p className="mb-2">
                iskanvar.com.tr, herhangi bir kamu kurumu, belediye, tapu müdürlüğü veya resmî devlet kuruluşu değildir.
                Site; yapı kullanma izin belgesi (iskan) ve benzeri resmî süreçlerle ilgili olarak, kullanıcılar adına takip, bilgilendirme ve danışmanlık hizmeti sunan özel bir platformdur.
              </p>
              <p className="mb-2">
                Sunulan hizmetler; ilgili resmî kurumlar nezdinde yürütülen işlemlerin takibini yapmak, başvuru süreci hakkında bilgilendirmek ve kullanıcı adına süreci organize etmek amacıyla sağlanır.
                iskanvar.com.tr üzerinden yapılan işlemler, doğrudan kamu kurumu işlemi yerine geçmez. Tüm resmî işlemler ve nihai kararlar, yetkili kamu kurumları tarafından verilir.
              </p>
              <div className="font-extrabold text-indigo-700 mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-700 rounded-full" />
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
