/**
 * Generate unique content for programmatic district pages
 * Uses template variations to avoid duplicate content
 */

const introTemplates = [
    (city: string, district: string) =>
        `${city} ${district} bölgesinde iskan belgesi sorgulama işlemleri için doğru adrestesiniz. Yapı kullanma izin belgesi (iskan belgesi) almak isteyen vatandaşlarımız için profesyonel danışmanlık hizmeti sunuyoruz. Belediyelerdeki yoğunluklarınızda yanınızdayız.`,
    (city: string, district: string) =>
        `${district}'da iskan durumu sorgulamak ve yapı kullanma izin belgesi işlemlerinizi hızlandırmak için uzman ekibimiz hizmetinizdedir. ${city} genelinde güvenilir iskan danışmanlığı ile gayrimenkul işlemlerinizi güvence altına alıyoruz.`,
    (city: string, district: string) =>
        `${city} ili ${district} bölgesinde yapı kullanma izin belgesi başvurusu ve iskan sorgulama konularında ekibimiz size yardımcı olmaktan mutluluk duyar. Karmaşık belediye prosedürlerini sizin için basitleştiriyor, zaman kazandırıyoruz.`,
    (city: string, district: string) =>
        `Gayrimenkulünüzün yasal durumunu netleştirmek için ${district} iskan sorgulama hizmetimizden faydalanabilirsiniz. ${city} bölgesinde binanızın yapı kullanma izni olup olmadığını resmi kaynaklardan teyit ediyoruz.`,
    (city: string, district: string) =>
        `${city} ${district} sınırları içerisinde konut veya işyeri alım satımı yapmadan önce mutlaka iskan durumunu kontrol ettirmelisiniz. İskansız yapıların hukuksal ve maddi risklerine karşı uzman danışmanlık sağlıyoruz.`
];

const procedureTemplates = [
    (city: string, district: string) =>
        `${district} belediyesinde iskan belgesi almak için gerekli evrakları hazırlamamız ve süreci takip etmemiz gerekmektedir. Yapı ruhsatı, mimari proje, statik proje ve zemin etüd raporu gibi belgeler eksiksiz olmalıdır. Fenni mesuliyet beyanları da usulüne uygun şekilde tamamlanmalıdır. ${city} belediyesi mevzuatına uygun olarak tüm belgeleri hazırlar ve başvurunuzu gerçekleştiririz.`,
    (city: string, district: string) =>
        `${city} ${district}'da iskan işlemleri için öncelikle binanızın inşaat aşaması tamamlanmış olmalıdır. Belediyeye sunulacak yapı ruhsatı, projeler ve teknik raporlar tam olmalıdır. Elektrik, su, doğalgaz gibi altyapı bağlantıları yapılmış ve belgelendirilmiş olmalıdır. Tüm bu süreçlerde size rehberlik eder, eksik evraklarınızı tamamlamanıza yardımcı oluruz.`,
    (city: string, district: string) =>
        `${district} bölgesinde yapı kullanma izin belgesi başvurusu için inşaatın tamamlanmış olması şarttır. ${city} belediyesinin istediği tüm belgeler hazırlanmalı, fenni mesul beyanları alınmalı ve gerekli kontroller yapılmalıdır. Sürecin her aşamasında yanınızdayız, başvurunuzun en kısa sürede sonuçlanması için çalışıyoruz.`,
    (city: string, district: string) =>
        `İskan başvurusu teknik bir süreçtir ve ${district} Belediyesi İmar Müdürlüğü tarafından titizlikle incelenir. Sığınak raporu, yangın merdiveni onayı, asansör ruhsatı gibi detayların eksiksiz olması gerekir. ${city} genelindeki uzmanlığımızla dosyanızı eksiksiz hazırlayıp onaya sunuyoruz.`,
    (city: string, district: string) =>
        `Yapı kullanma izni başvurusu öncesinde ${district} bölgesindeki binanızın projeye uygunluğu kontrol edilmelidir. Herhangi bir kaçak veya proje dışı imalat varsa, iskan almanız mümkün olmayabilir. ${city} mevzuatına hakim ekibimizle binanızın röntgenini çekiyor, iskan engelleyen durumları tespit ediyoruz.`
];

const municipalityTemplates = [
    (city: string, district: string) =>
        `${district} Belediyesi İmar ve Şehircilik Müdürlüğü, iskan belgesi başvurularını değerlendirmektedir. Belediye yetkilileriyle koordineli çalışarak sürecinizi hızlandırıyoruz. Evraklarınızın eksiksiz ve doğru hazırlanması, işlemlerin sorunsuz ilerlemesi için kritik önem taşır. ${city} genelindeki tecrübemizle size en iyi hizmeti sunuyoruz.`,
    (city: string, district: string) =>
        `${city} ${district}'da belediye işlemlerini takip ederken, tüm yasal prosedürlere riayet ediyoruz. İskan belgesi başvurunuzun belediye tarafından onaylanması için gerekli tüm adımları atıyor, süreci şeffaf bir şekilde yönetiyoruz. Herhangi bir eksiklik veya sorun durumunda anında bilgilendirilirsiniz.`,
    (city: string, district: string) =>
        `${district} belediyesi ile koordineli çalışarak iskan süreçlerinizi profesyonelce yönetiyoruz. ${city}'deki deneyimimiz sayesinde, olası sorunları önceden tespit eder ve çözümleriz. Başvurunuzun reddi riskini minimize ederek, sürecinizi güvence altına alıyoruz.`,
    (city: string, district: string) =>
        `${city} Büyükşehir ve ${district} ilçe belediyesi arasındaki bürokratik süreçleri iyi biliyoruz. Kanal bağlantı belgesi (İSKİ/ASKİ/BUSKİ vb.) ve diğer kurum görüşlerinin alınması aşamalarında da size destek veriyoruz.`,
    (city: string, district: string) =>
        `${district} bölgesindeki imar barışı ve yapı kayıt belgesi süreçleri ile yeni iskan başvuruları arasındaki farkları net bir şekilde ortaya koyuyoruz. ${city} genelinde mülkünüzün değerini artıracak yasal statüyü kazanmanız için çalışıyoruz.`
];

const faqTemplates = [
    (city: string, district: string) =>
        `${district}'da iskan belgesi ne kadar sürede çıkar? Süre, evrakların eksiksizliğine ve belediyenin iş yoğunluğuna göre değişir. ${city} belediyesinde ortalama 2-4 hafta sürmektedir. Bizimle çalışarak süreci hızlandırabilirsiniz.`,
    (city: string, district: string) =>
        `${city} ${district} bölgesinde iskan ücreti ne kadardır? Ücretler, binanın metrekaresi ve türüne göre değişkenlik gösterir. Belediye harçları ve teknik kontrol ücretleri toplam maliyete eklenir. Detaylı fiyat bilgisi için bizimle iletişime geçebilirsiniz.`,
    (city: string, district: string) =>
        `${district}'da iskansız ev satılabilir mi? Hayır, Türkiye'de iskan belgesi olmayan gayrimenkullerin krediye uygunluğu sorunludur ve satışı zordur. ${city}'de değer kaybı yaşamamak için iskan durumu önemlidir.`,
    (city: string, district: string) =>
        `${district} bölgesinde imar barışı başvurusu geçerli mi? İmar barışı (yapı kayıt belgesi) ile iskan aynı şey değildir. ${city} ili genelinde yapı kayıt belgesi olsa da iskan alınması gereken durumlar olabilir. Uzman görüşü almanızı tavsiye ederiz.`,
    (city: string, district: string) =>
        `${district}'da kat mülkiyeti ve kat irtifakı arasındaki fark nedir? İskan alındıktan sonra kat irtifaklı tapular kat mülkiyetine çevrilir. ${city} genelinde sorunsuz bir mülkiyet için kat mülkiyeti (iskanlı tapu) tercih edilmelidir.`
];

const ctaTemplates = [
    () =>
        `Profesyonel iskan danışmanlığı için hemen bizimle iletişime geçin. Aşağıdaki formu doldurun, size en kısa sürede dönüş yapalım.`,
    () =>
        `İskan belgesi sürecinizi hızlandırmak için uzman ekibimizden destek alın. Formu doldurun, detaylı bilgi ve fiyat teklifi alalım.`,
    () =>
        `Yapı kullanma izin belgesi başvurunuz için bugün harekete geçin. İletişim formunu kullanarak bize ulaşın, ücretsiz ön değerlendirme hizmeti alalım.`,
    () =>
        `Mülkünüzün değerini korumak ve yasal riskleri ortadan kaldırmak için bize ulaşın. İskan sorgulama formunu doldurarak ilk adımı atın.`,
    () =>
        `Vakit kaybetmeden iskan sorununuza çözüm bulalım. Uzmanlarımız dosyanızı incelesin ve size yol haritası çıkarsın. Hemen başvurun.`
];

/**
 * Generate unique 250-word content for a district
 */
export function generateDistrictContent(cityName: string, districtName: string): string {
    // Improve randomness/distribution using a simple hash of the name
    let hash = 0;
    const key = cityName + districtName;
    for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    const seed = Math.abs(hash);

    const intro = introTemplates[seed % introTemplates.length](cityName, districtName);
    const procedure = procedureTemplates[(seed + 1) % procedureTemplates.length](cityName, districtName);
    const municipality = municipalityTemplates[(seed + 2) % municipalityTemplates.length](cityName, districtName);
    const faq = faqTemplates[(seed + 3) % faqTemplates.length](cityName, districtName);
    const cta = ctaTemplates[(seed + 4) % ctaTemplates.length]();

    // Add randomized strong tags or subheaders if needed for better SEO structure in future iteration
    // For now, paragraph separation is good.

    return `${intro}\n\n${procedure}\n\n${municipality}\n\n${faq}\n\n${cta}`;
}
