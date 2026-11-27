export interface QuestionType {
    slug: string;
    title: string;
    h1: string;
    description: string;
    content: string;
    category: 'iskan' | 'imar';
    faqs: { question: string; answer: string }[];
}

export const questionTypes: QuestionType[] = [
    // MEVCUT SORULAR (KORUNAN)
    {
        slug: "iskan-sorgulama",
        title: "İskan Sorgulama",
        h1: "İskan Sorgulama | Binada İskan Var mı?",
        description: "Binada iskan var mı öğrenin. Tapu, ada parsel veya adres ile iskan sorgulama yapın. Ücretsiz ön kontrol, uzman araştırma hizmeti.",
        content: "Bir gayrimenkulün yasal durumunu anlamak için iskan sorgulama yapmanız kritik önem taşır. İskan belgesi, yapının belediye tarafından onaylandığını ve yaşanabilir standartlara uygun olduğunu gösterir.",
        category: 'iskan',
        faqs: [
            { question: "İskan sorgulama nasıl yapılır?", answer: "İskan sorgulama; tapu bilgileri, ada-parsel numarası veya adres bilgileri ile ilgili belediyeden yapılabilir." },
            { question: "İskan sorgulama ücreti nedir?", answer: "Belediyelerden yapılan resmi sorgulama genellikle ücretsizdir, ancak detaylı rapor hizmeti ücretlidir." },
            { question: "E-devlet'ten iskan sorgulama yapılabilir mi?", answer: "E-devlet üzerinden yapı ruhsatı görüntülenebilir, ancak iskan durumu için belediye arşivleri esastır." }
        ]
    },
    {
        slug: "binada-iskan-var-mi",
        title: "Binada İskan Var mı?",
        h1: "Binada İskan Var mı? | Hızlı Sorgulama",
        description: "Satın almak istediğiniz binada iskan var mı öğrenin. Tapu ve ada parsel bilgileriyle hızlı iskan kontrolü yapın.",
        content: "Bir binada iskan var mı sorusu, ev alacaklar ve kiracılar için kritik bir konudur. İskan, yapının belediye tarafından onaylandığını gösterir.",
        category: 'iskan',
        faqs: [
            { question: "İskanlı bina ne demektir?", answer: "İskanlı bina, yapı kullanma izin belgesi almış ve belediye tarafından oturuma uygun bulunmuş yapı demektir." },
            { question: "İskansız evde oturulur mu?", answer: "Oturulabilir ancak kredi, abonelik ve yasal riskler barındırır." },
            { question: "Binada iskan olup olmadığı nereden anlaşılır?", answer: "Tapu kaydı, belediye arşivi ve ada-parsel sorgulaması ile öğrenilebilir." }
        ]
    },

    // 1. İSKAN NEDİR?
    {
        slug: "iskan-nedir",
        title: "İskan Nedir?",
        h1: "İskan Nedir? | Yapı Kullanma İzin Belgesi",
        description: "İskan nedir, ne işe yarar? İskan belgesi hakkında tüm detaylar.",
        content: "İskan, bir yapının projesine uygun olarak tamamlandığını belgeleyen resmi oturma iznidir.",
        category: 'iskan',
        faqs: [
            { question: "İskan belgesi nedir?", answer: "Belediye tarafından verilen ve yapının oturuma uygun olduğunu gösteren resmi belgedir." },
            { question: "İskan ne işe yarar?", answer: "Binanın yasal olduğunu kanıtlar, kredi kullanımını sağlar." }
        ]
    },
    {
        slug: "iskan-raporu-nedir",
        title: "İskan Raporu Nedir?",
        h1: "İskan Raporu Nedir?",
        description: "İskan raporu ile iskan belgesi arasındaki farklar nelerdir?",
        content: "İskan raporu, genellikle iskan belgesi ile aynı anlamda kullanılır ancak teknik detayları içerir.",
        category: 'iskan',
        faqs: [
            { question: "Nereden alınır?", answer: "İlgili belediyenin İmar Müdürlüğü'nden." },
            { question: "Ücretli mi?", answer: "Belediye tarifesine göre değişir." }
        ]
    },
    {
        slug: "yapi-kullanma-izin-belgesi-nedir",
        title: "Yapı Kullanma İzin Belgesi Nedir?",
        h1: "Yapı Kullanma İzin Belgesi Nedir?",
        description: "Resmi adıyla Yapı Kullanma İzin Belgesi (İskan) detayları.",
        content: "Yapı kullanma izin belgesi, binanın tamamen bittiğini ve mevzuata uygun olduğunu belgeler.",
        category: 'iskan',
        faqs: [
            { question: "Kim verir?", answer: "İlçe belediyesi verir." },
            { question: "Ne zaman alınır?", answer: "İnşaat bitince alınır." }
        ]
    },
    {
        slug: "iskanli-bina-ne-demek",
        title: "İskanlı Bina Ne Demek?",
        h1: "İskanlı Bina Ne Demek?",
        description: "İskanlı bina nedir ve avantajları nelerdir?",
        content: "İskanlı bina, yasal süreçleri tamamlanmış ve oturuma hazır binadır.",
        category: 'iskan',
        faqs: [
            { question: "Kat mülkiyeti olur mu?", answer: "Evet, iskan varsa kat mülkiyetine geçilebilir." },
            { question: "Daha mı değerlidir?", answer: "Evet, yasal riski yoktur." }
        ]
    },
    {
        slug: "iskansiz-bina-ne-demek",
        title: "İskansız Bina Ne Demek?",
        h1: "İskansız Bina Ne Demek?",
        description: "İskansız bina nedir, riskleri nelerdir?",
        content: "İskansız bina, belediyeden oturum izni almamış yapıdır.",
        category: 'iskan',
        faqs: [
            { question: "Yasal mı?", answer: "Tamamen yasal sayılmaz, inşaat statüsündedir." },
            { question: "Kredi çıkar mı?", answer: "Genellikle çıkmaz." }
        ]
    },
    {
        slug: "iskan-almak-zorunlu-mu",
        title: "İskan Almak Zorunlu Mu?",
        h1: "İskan Almak Zorunlu Mu?",
        description: "Bina bitince iskan almak zorunlu mudur?",
        content: "3194 sayılı İmar Kanunu'na göre iskan almak zorunludur.",
        category: 'iskan',
        faqs: [
            { question: "Alınmazsa ne olur?", answer: "Şantiye tarifesi uygulanır." },
            { question: "Süresi var mı?", answer: "Ruhsat tarihinden itibaren 5 yıl." }
        ]
    },
    {
        slug: "iskan-kac-yil-gecerli",
        title: "İskan Kaç Yıl Geçerli?",
        h1: "İskan Belgesi Geçerlilik Süresi",
        description: "İskan belgesinin süresi var mıdır?",
        content: "İskan belgesinin süresi yoktur, bina değişmediği sürece geçerlidir.",
        category: 'iskan',
        faqs: [
            { question: "Yenilenir mi?", answer: "Tadilat yapılırsa gerekir." },
            { question: "Eski belge geçerli mi?", answer: "Evet geçerlidir." }
        ]
    },

    // 2. İSKAN SORGULAMA VE VAR MI?
    {
        slug: "iskan-var-mi",
        title: "İskan Var Mı?",
        h1: "İskan Var Mı? | Sorgulama Yöntemleri",
        description: "Bir binada iskan var mı yok mu nasıl anlaşılır? Hızlı sorgulama yöntemleri.",
        content: "İskan var mı sorusunun cevabı tapu ve belediye kayıtlarında gizlidir. Tapuda 'Kat Mülkiyeti' yazıyorsa iskan vardır.",
        category: 'iskan',
        faqs: [
            { question: "İnternetten bakılır mı?", answer: "Bazı belediyelerin e-imar sistemlerinden bakılabilir." },
            { question: "Yeni binada durum nedir?", answer: "Müteahhitten belge istenmelidir." }
        ]
    },
    {
        slug: "dairede-iskan-var-mi-nasil-ogrenilir",
        title: "Dairede İskan Var Mı Nasıl Öğrenilir?",
        h1: "Dairede İskan Var Mı Nasıl Öğrenilir?",
        description: "Satın alınacak dairenin iskan durumu nasıl öğrenilir?",
        content: "Tapu senedi ve belediye kayıtları en güvenilir kaynaklardır.",
        category: 'iskan',
        faqs: [
            { question: "Tapuda yazar mı?", answer: "Kat mülkiyeti varsa yazar." },
            { question: "Yönetici bilir mi?", answer: "Resmi belge esastır." }
        ]
    },
    {
        slug: "evimin-iskani-var-mi",
        title: "Evimin İskanı Var Mı?",
        h1: "Evimin İskanı Var Mı?",
        description: "Kendi oturduğunuz evin iskan durumunu öğrenin.",
        content: "Faturalarınıza bakarak anlayabilirsiniz. Mesken tarifesi ise iskan vardır.",
        category: 'iskan',
        faqs: [
            { question: "Doğalgaz referans mı?", answer: "Genellikle evet." },
            { question: "E-devlet?", answer: "Tapu bilgileri kontrol edilebilir." }
        ]
    },
    {
        slug: "online-iskan-sorgulama",
        title: "Online İskan Sorgulama",
        h1: "Online İskan Sorgulama",
        description: "İnternetten online iskan sorgulama nasıl yapılır?",
        content: "Belediyelerin e-imar veya kent rehberi sistemleri kullanılabilir.",
        category: 'iskan',
        faqs: [
            { question: "Her yerde var mı?", answer: "Hayır, tüm belediyelerde yok." },
            { question: "Kesin mi?", answer: "Bilgi amaçlıdır." }
        ]
    },
    {
        slug: "ada-parsel-iskan-sorgulama",
        title: "Ada Parsel İskan Sorgulama",
        h1: "Ada Parsel İskan Sorgulama",
        description: "Ada ve parsel no ile iskan nasıl sorgulanır?",
        content: "Ada parsel numarası ile belediye arşivinden detaylı sorgulama yapılabilir.",
        category: 'iskan',
        faqs: [
            { question: "Numarayı nereden bulurum?", answer: "Tapu senedinden veya e-devletten." },
            { question: "Hangi bilgiler çıkar?", answer: "Ruhsat ve iskan durumu." }
        ]
    },

    // 3. İSKANSIZ EV & OLAYLAR
    {
        slug: "iskan-olmazsa-ne-olur",
        title: "İskan Olmazsa Ne Olur?",
        h1: "İskan Olmazsa Ne Olur? | Karşılaşılacak Sorunlar",
        description: "Bir binada iskan olmazsa ne gibi sorunlar yaşanır? Abonelik, kredi ve yasal cezalar.",
        content: "İskan belgesi olmayan binalar yasal olarak 'inşaat' statüsündedir. Bu durum aboneliklerde yüksek tarife ve kredi kullanamama gibi sorunlar yaratır.",
        category: 'iskan',
        faqs: [
            { question: "Ceza gelir mi?", answer: "Binaya para cezası veya yıkım kararı çıkabilir." },
            { question: "Satılır mı?", answer: "Değerinden düşüğe satılabilir." }
        ]
    },
    {
        slug: "iskansiz-ev-alinir-mi",
        title: "İskansız Ev Alınır Mı?",
        h1: "İskansız Ev Alınır Mı?",
        description: "İskansız ev almak mantıklı mı, riskleri neler?",
        content: "Fiyat avantajı olsa da riskleri büyüktür. İleride ek maliyetler çıkabilir.",
        category: 'iskan',
        faqs: [
            { question: "Prim yapar mı?", answer: "Daha yavaş değerlenir." },
            { question: "Kiraya verilir mi?", answer: "Evet verilebilir." }
        ]
    },

    // DİĞER KATEGORİLER (Banka, Hukuk vb. - Özetle)
    {
        slug: "iskansiz-eve-kredi-cikar-mi",
        title: "İskansız Eve Kredi Çıkar Mı?",
        h1: "İskansız Eve Kredi Çıkar Mı?",
        description: "Bankalar iskansız eve kredi veriyor mu?",
        content: "Genellikle vermezler, ancak bina bitmişse bazı bankalar verebilir.",
        category: 'iskan',
        faqs: [
            { question: "Hangi bankalar?", answer: "Politikalar değişebilir." },
            { question: "Eksper raporu?", answer: "Rapora göre karar verilir." }
        ]
    },
    {
        slug: "iskan-alinmazsa-ceza-var-mi",
        title: "İskan Alınmazsa Ceza Var Mı?",
        h1: "İskan Alınmazsa Ceza Var Mı?",
        description: "İskan almamanın cezai yaptırımı var mıdır?",
        content: "Ruhsat süresi dolarsa cezai işlem uygulanabilir.",
        category: 'iskan',
        faqs: [
            { question: "Müteahhide dava?", answer: "Açılabilir." },
            { question: "Belediye cezası?", answer: "İmar cezası kesilebilir." }
        ]
    },

    // YENİ SORULAR - Masraf & Ceza Kategorisi
    {
        slug: "iskan-masraflari",
        title: "İskan Masrafları 2025",
        h1: "İskan Masrafları 2025 | Güncel Ücret Tarifesi",
        description: "2025 yılı iskan masrafları nelerdir? Belediye harçları, SSK primleri ve toplam iskan maliyeti hesaplama.",
        content: "İskan masrafları belediyeden belediyeye değişiklik göstermektedir. Genel olarak yapı denetim ücretleri, SSK primleri, belediye harçları ve teknik inceleme ücretlerini kapsar.",
        category: 'iskan',
        faqs: [
            { question: "İskan masrafı ne kadar?", answer: "Binanın büyüklüğüne ve belediyeye göre değişir, genellikle 5.000-50.000 TL arasındadır." },
            { question: "İskan masrafını kim öder?", answer: "Yeni binalarda müteahhit, eski binalarda mal sahibi öder." },
            { question: "İskan harçları nelerdir?", answer: "Yapı denetim, belediye tasdik ve teknik inceleme harçları dahildir." }
        ]
    },
    {
        slug: "iskan-cezasi",
        title: "İskan Cezası",
        h1: "İskan Cezası Ne Kadar? | 2025 Güncel",
        description: "İskan cezası ne kadar? İskansız bina ceza miktarları, ödeme şartları ve ceza affı bilgileri.",
        content: "İskan alınmaması durumunda belediyeler tarafından para cezası uygulanabilmektedir. Ceza miktarı yapının büyüklüğüne ve imar durumuna göre değişir.",
        category: 'iskan',
        faqs: [
            { question: "İskan cezası ne kadar?", answer: "Binanın m² ve imar durumuna göre değişir, yüz binlerce TL'ye çıkabilir." },
            { question: "Cezayı kim öder?", answer: "Yapı sahibi veya müteahhit ödemekle yükümlüdür." },
            { question: "Ceza taksitlendirilebilir mi?", answer: "Bazı durumlarda belediyeler taksit imkanı sunabilir." }
        ]
    },
    {
        slug: "iskan-harci",
        title: "İskan Harcı",
        h1: "İskan Harcı | Belediye Harç Bedelleri",
        description: "İskan harcı ne kadar? Belediye iskan harç bedelleri, ödeme yerleri ve harç hesaplama bilgileri.",
        content: "İskan harcı, yapı kullanma izin belgesi için belediyeye ödenen zorunlu harçtır. Harç miktarı belediye tarifelerine ve yapı özelliklerine göre belirlenir.",
        category: 'iskan',
        faqs: [
            { question: "İskan harcı nereye ödenir?", answer: "İlgili belediyenin veznesi veya online ödeme sistemine ödenir." },
            { question: "Harç makbuzu gerekli mi?", answer: "Evet, iskan başvurusunda sunulması zorunludur." }
        ]
    },
    {
        slug: "iskan-bedeli",
        title: "İskan Bedeli",
        h1: "İskan Bedeli | Toplam Maliyet Hesaplama",
        description: "İskan bedeli nasıl hesaplanır? Toplam iskan maliyeti, harç ve masraf kalemleri detayları.",
        content: "İskan bedeli; belediye harçları, yapı denetim ücretleri, SSK primleri ve diğer resmi giderlerin toplamından oluşur. Bina büyüklüğü ve belediyeye göre farklılık gösterir.",
        category: 'iskan',
        faqs: [
            { question: "Toplam iskan bedeli ne kadar?", answer: "Ortalama 10.000-100.000 TL arasında değişebilir." },
            { question: "İskan bedeli bina m²'sine göre mi?", answer: "Evet, yapının brüt alanına göre hesaplanır." }
        ]
    },
    {
        slug: "iskan-alma-suresi",
        title: "İskan Alma Süresi",
        h1: "İskan Alma Süresi | Ne Kadar Sürer?",
        description: "İskan alma süresi ne kadar? İskan başvurusundan belge almaya kadar geçen süre ve hızlandırma yöntemleri.",
        content: "İskan alma süresi belediye iş yükü, evrakların eksiksiz olması ve yapının uygunluğuna göre değişir. Normal süreçte 15-45 gün arasında tamamlanır.",
        category: 'iskan',
        faqs: [
            { question: "İskan kaç günde çıkar?", answer: "Evraklar tamam ise genellikle 15-30 iş günü içinde." },
            { question: "Süreç nasıl hızlandırılır?", answer: "Evrakların eksiksiz ve doğru sunulması süreci hızlandırır." }
        ]
    },
    {
        slug: "iskan-belgesi-nasil-alinir",
        title: "İskan Belgesi Nasıl Alınır?",
        h1: "İskan Belgesi Nasıl Alınır? | Adım Adım",
        description: "İskan belgesi nasıl alınır? Başvuru süreci, gerekli belgeler ve dikkat edilmesi gerekenler.",
        content: "İskan belgesi almak için öncelikle yapı denetim raporları, SSK iş bitirme belgesi ve belediye harç makbuzları ile başvuru yapılır. Belediye teknik ekibi yerinde inceleme yapar.",
        category: 'iskan',
        faqs: [
            { question: "Hangi belgeler gerekli?", answer: "Yapı denetim raporu, SGK borcu yoktur yazısı, harç makbuzları ve müracaat dilekçesi gereklidir." },
            { question: "Online başvuru yapılabilir mi?", answer: "Bazı belediyelerde e-belediye üzerinden başvuru yapılabilir." }
        ]
    },

    // YENİ SORULAR - İskansız Ev Riskleri
    {
        slug: "iskanli-iskansiz-ev",
        title: "İskanlı İskansız Ev Farkı",
        h1: "İskanlı vs İskansız Ev | Farkları ve Riskleri",
        description: "İskanlı ev ile iskansız ev arasındaki farklar nelerdir? Alım-satım, kredi ve yaşam açısından karşılaştırma.",
        content: "İskanlı ev belediye onaylı, yasal olarak oturuma hazır yapıdır. İskansız ev ise henüz yapı kullanma izni almamış, teknik olarak 'inşaat' statüsünde olan binadır.",
        category: 'iskan',
        faqs: [
            { question: "İskanlı ev daha mı değerli?", answer: "Evet, yasal güvence sağladığı için daha değerlidir." },
            { question: "İskansız ev satılabilir mi?", answer: "Satılabilir ancak bankadan kredi çıkmayabilir." },
            { question: "Fiyat farkı ne kadar?", answer: "İskansız evler genellikle %10-20 daha ucuzdur." }
        ]
    },
    {
        slug: "iskansiz-evde-oturulur-mu",
        title: "İskansız Evde Oturulur Mu?",
        h1: "İskansız Evde Oturulur Mu? | Riskler ve Dikkat Edilecekler",
        description: "İskansız evde oturulur mu? Yasal durum, fatura abonelikleri ve karşılaşılabilecek sorunlar.",
        content: "İskansız evde fiilen oturulabilir ancak yasal olarak yapı 'inşaat' statüsündedir. Elektrik ve su abonelikleri şantiye tarifesinden açılabilir.",
        category: 'iskan',
        faqs: [
            { question: "Elektrik aboneliği yapılır mı?", answer: "Şantiye tarifesiyle geçici abonelik yapılabilir." },
            { question: "Doğalgaz bağlatılır mı?", answer: "İskan olmadan doğalgaz bağlantısı genellikle yapılamaz." },
            { question: "Yasal sorun olur mu?", answer: "Belediye denetimlerinde cezai işlem uygulanabilir." }
        ]
    },
    {
        slug: "iskansiz-ev-riskleri",
        title: "İskansız Ev Riskleri",
        h1: "İskansız Ev Riskleri | Satın Almadan Bilinmesi Gerekenler",
        description: "İskansız ev almanın riskleri nelerdir? Hukuki, mali ve teknik açıdan değerlendirme.",
        content: "İskansız ev almak ciddi riskler barındırır: imar affına girememe, yıkım kararı, kredi kullanamama, yüksek tarife abonelikler ve değer kaybı başlıca sorunlardır.",
        category: 'iskan',
        faqs: [
            { question: "En büyük risk nedir?", answer: "Yıkım kararı veya ağır para cezası riski vardır." },
            { question: "Sigorta yapılır mı?", answer: "DASK zorunlu ancak diğer sigortalar sorunlu olabilir." },
            { question: "İleride iskan alınabilir mi?", answer: "Projeye uygunsa ek masrafla alınabilir." }
        ]
    },

    // YENİ SORULAR - Sorgulama Yöntemleri
    {
        slug: "tapudan-iskan-sorgulama",
        title: "Tapudan İskan Sorgulama",
        h1: "Tapudan İskan Sorgulama | Tapu ile İskan Kontrolü",
        description: "Tapu belgesiyle iskan nasıl sorgulanır? Tapu senedinde iskan bilgisi nasıl anlaşılır?",
        content: "Tapu senedinde 'Kat Mülkiyeti' ibaresi varsa yapının iskanı alınmıştır. 'Kat İrtifakı' yazıyorsa iskan henüz alınmamış demektir.",
        category: 'iskan',
        faqs: [
            { question: "Tapuda iskan yazar mı?", answer: "Doğrudan yazmaz ama mülkiyet türünden anlaşılır." },
            { question: "Kat mülkiyeti ne demek?", answer: "İskanlı ve tescilli bağımsız bölüm demektir." },
            { question: "E-devletten bakılır mı?", answer: "TAKBİS üzerinden tapu bilgisi görüntülenebilir." }
        ]
    },
    {
        slug: "adres-ile-iskan-sorgulama",
        title: "Adres ile İskan Sorgulama",
        h1: "Adres ile İskan Sorgulama",
        description: "Adres bilgisiyle iskan durumu nasıl sorgulanır? İl ilçe mahalle bazlı iskan kontrolü.",
        content: "Adres bilgisiyle iskan sorgulama için önce ada-parsel numarasının belirlenmesi, ardından ilgili belediyeden sorgulama yapılması gerekir.",
        category: 'iskan',
        faqs: [
            { question: "Sadece adresle sorgulanır mı?", answer: "Adres üzerinden ada-parsel bulunarak sorgulanır." },
            { question: "Online yapılabilir mi?", answer: "Parsel.com veya belediye e-imar sistemlerinden yapılabilir." }
        ]
    },
    {
        slug: "ev-alirken-iskan-sorgulama",
        title: "Ev Alırken İskan Sorgulama",
        h1: "Ev Alırken İskan Sorgulama | Alıcı Rehberi",
        description: "Ev satın almadan önce iskan durumu nasıl kontrol edilir? Alıcılar için kapsamlı rehber.",
        content: "Ev almadan önce iskan kontrolü kritik önem taşır. Tapu senedi, belediye arşivi ve ada-parsel sorgulaması ile yapının iskan durumu netleştirilmelidir.",
        category: 'iskan',
        faqs: [
            { question: "Satıcıya güvenilir mi?", answer: "Mutlaka resmi belgelerle kontrol edilmelidir." },
            { question: "Emlakçı kontrol eder mi?", answer: "Güvenilir emlakçılar eder ancak bizzat kontrol önerilir." },
            { question: "Banka kontrol eder mi?", answer: "Kredi sürecinde eksper raporu alınır." }
        ]
    },
    {
        slug: "konut-iskan-durumu",
        title: "Konut İskan Durumu",
        h1: "Konut İskan Durumu Sorgulama",
        description: "Konutun iskan durumu nasıl öğrenilir? Daire ve konut bazlı iskan kontrolü.",
        content: "Bir konutun iskan durumu, binanın genel iskan belgesine bağlıdır. Bağımsız bölüm iskanı, ana yapının iskanı alındıktan sonra düzenlenir.",
        category: 'iskan',
        faqs: [
            { question: "Her dairenin ayrı iskanı mı var?", answer: "Hayır, bina geneli için tek iskan belgesi düzenlenir." },
            { question: "Daire iskanı yok ama bina var?", answer: "Bu durumda daire de iskanlı sayılır." }
        ]
    },
    {
        slug: "daire-iskan-belgesi",
        title: "Daire İskan Belgesi",
        h1: "Daire İskan Belgesi | Bağımsız Bölüm İskanı",
        description: "Daire iskan belgesi nedir? Bağımsız bölüm bazında iskan nasıl sorgulanır?",
        content: "Daire iskan belgesi, binanın yapı kullanma izin belgesi kapsamında yer alır. Her bağımsız bölüm (daire) bu belge ile iskanlı kabul edilir.",
        category: 'iskan',
        faqs: [
            { question: "Daire bazlı iskan var mı?", answer: "Bina iskanı alındığında tüm daireler iskanlı olur." },
            { question: "Bina iskanı olmadan daire?", answer: "O zaman daire de iskansız sayılır." }
        ]
    },
    {
        slug: "parsel-bazli-iskan-kontrolu",
        title: "Parsel Bazlı İskan Kontrolü",
        h1: "Parsel Bazlı İskan Kontrolü",
        description: "Ada parsel numarası ile iskan durumu nasıl kontrol edilir? Parsel bazlı sorgulama rehberi.",
        content: "Ada-parsel numarası, bir taşınmazın kadastral kimliğidir. Bu numara ile belediye arşivlerinden yapının tüm ruhsat ve iskan bilgilerine ulaşılabilir.",
        category: 'iskan',
        faqs: [
            { question: "Ada parsel nereden öğrenilir?", answer: "Tapu senedi, e-devlet veya Parsel Sorgulama uygulamasından." },
            { question: "Hangi bilgiler çıkar?", answer: "Ruhsat tarihi, iskan durumu, kat sayısı ve proje bilgileri." }
        ]
    },
    {
        slug: "belediyeden-iskan-sorgulama",
        title: "Belediyeden İskan Sorgulama",
        h1: "Belediyeden İskan Sorgulama",
        description: "Belediyeden iskan nasıl sorgulanır? Resmi iskan sorgulama süreci ve başvuru yöntemleri.",
        content: "İskan sorgulamasının en güvenilir yolu ilgili belediyenin İmar Müdürlüğü'ne başvurmaktır. Ada-parsel veya adres bilgisiyle sorgulama yapılabilir.",
        category: 'iskan',
        faqs: [
            { question: "Hangi birime başvurulur?", answer: "İmar ve Şehircilik Müdürlüğü'ne başvurulur." },
            { question: "Ücretli mi?", answer: "Basit sorgulama genellikle ücretsizdir." },
            { question: "Online başvuru var mı?", answer: "Bazı belediyelerde e-belediye üzerinden yapılabilir." }
        ]
    },
    {
        slug: "iskan-ve-imar-farki",
        title: "İskan ile İmar Farkı",
        h1: "İskan ile İmar Farkı Nedir?",
        description: "İskan ve imar arasındaki fark nedir? İmar durumu belgesi ile iskan belgesi karşılaştırması.",
        content: "İmar durumu, arsanın ne şekilde yapılaşabileceğini belirler. İskan ise yapının tamamlanıp kullanıma hazır olduğunu belgeler. Biri inşaat öncesi, diğeri inşaat sonrası belgedir.",
        category: 'iskan',
        faqs: [
            { question: "Hangisi önce alınır?", answer: "Önce imar durumu, sonra iskan alınır." },
            { question: "İkisi de zorunlu mu?", answer: "Yasal inşaat için her ikisi de gereklidir." }
        ]
    },
    {
        slug: "iskan-almak-kimin-sorumlulugu",
        title: "İskan Almak Kimin Sorumluluğu?",
        h1: "İskan Almak Kimin Sorumluluğu?",
        description: "İskan almak kimin sorumluluğundadır? Müteahhit mi mal sahibi mi iskan başvurusu yapar?",
        content: "Yeni yapılarda iskan almak müteahhidin sorumluluğundadır. İnşaat tamamlandığında müteahhit iskan başvurusunu yapmalıdır. Eski binalarda mal sahibi sorumludur.",
        category: 'iskan',
        faqs: [
            { question: "Müteahhit almazsa ne olur?", answer: "Dava açılabilir veya mal sahibi kendi başvurabilir." },
            { question: "Sözleşmede yazılı mı?", answer: "Genellikle inşaat sözleşmesinde belirtilir." }
        ]
    },
    {
        slug: "imar-durumu-sorgulama",
        title: "İmar Durumu Sorgulama",
        h1: "İmar Durumu Sorgulama | Arsa ve Bina İmar Planı Analizi",
        description: "Gayrimenkul ve arsa imar durumu sorgulama hizmeti. TAKS, KAKS, kat adedi, çekme mesafeleri ve güncel belediye imar planı raporu.",
        content: "İmar durumu sorgulama, bir arsanın veya binanın bulunduğu parseldeki yapılaşma şartlarını (TAKS, KAKS/Emsal, kat yüksekliği, ön/yan bahçe çekme mesafeleri ve kullanım fonksiyonu) resmi belediye imar planlarından öğrenme işlemidir. Yatırım veya satın alma öncesinde olası kamulaştırma, yeşil alan terkleri veya yıkım/kısıtlama risklerini netleştirir.",
        category: 'imar',
        faqs: [
            { question: "İmar durumu belgesi nereden alınır?", answer: "Taşınmazın bağlı bulunduğu ilçe belediyesinin İmar ve Şehircilik Müdürlüğü'nden veya uzman danışmanlık aracılığıyla temin edilir." },
            { question: "TAKS ve KAKS (Emsal) ne anlama gelir?", answer: "TAKS taban oturum alanını, KAKS (Emsal) ise parsel üzerine yapılabilecek toplam inşaat alanını ifade eder." },
            { question: "E-imar ile resmi arşiv imar durumu arasındaki fark nedir?", answer: "E-imar ekranları bilgilendirme amaçlıdır ve son meclis kararlarını veya şerhleri içermeyebilir; arşiv incelemesi güncel hukuki durumu gösterir." }
        ]
    },
    {
        slug: "tapu-inceleme",
        title: "Tapu İnceleme ve Takyidat Analizi",
        h1: "Tapu İnceleme | Kat Mülkiyeti, Şerh ve Risk Analizi",
        description: "Gayrimenkul almadan önce profesyonel tapu inceleme hizmeti. Kat irtifakı, kat mülkiyeti, şerh, beyan ve belediye arşiv uyumu kontrolü.",
        content: "Tapu inceleme hizmeti; satın almayı planladığınız taşınmazın tapu senedi bilgileri ile belediye arşivindeki mimari proje, yapı ruhsatı ve iskan kayıtlarının birebir örtüşüp örtüşmediğini ortaya koyar. Tapuda görünmeyen belediye yıkım kararları, proje dışı kaçak katlar veya bağımsız bölüm uyumsuzlukları uzmanlarımızca raporlanır.",
        category: 'iskan',
        faqs: [
            { question: "Tapu incelemesinde nelere bakılır?", answer: "Mülkiyet niteliği (kat mülkiyeti/kat irtifakı), bağımsız bölüm numarası, arsa payı, mimari proje uyumu ve belediye arşivindeki şerh/ceza kayıtları incelenir." },
            { question: "Tapuda sorun yoksa belediyede sorun çıkabilir mi?", answer: "Evet. Belediye encümenince alınmış yıkım veya para cezası kararları her zaman tapu kaydına anında işlenmeyebilir; bu yüzden belediye arşiv taraması şarttır." }
        ]
    },
    {
        slug: "ada-parsel-ile-iskan",
        title: "Ada Parsel ile İskan Sorgulama",
        h1: "Ada Parsel ile İskan Sorgulama | Kadastral Arşiv Kontrolü",
        description: "Tapudaki ada ve parsel numaraları ile belediye arşivinden resmi iskan ve yapı kullanma izin belgesi sorgulaması yapın.",
        content: "Ada ve parsel numarası, bir taşınmazın değiştirilemez kadastral kimliğidir. Sokak veya bina kapı numaraları zamanla değişebilse de ada ve parsel bilgileri üzerinden belediye imar arşivinde yapılan sorgulama, binanın ilk ruhsatından güncel iskan durumuna kadar tüm resmi geçmişini kesin olarak ortaya çıkarır.",
        category: 'iskan',
        faqs: [
            { question: "Ada ve parsel numarası tapunun neresinde yazar?", answer: "Tapu senedinin üst bölümünde Mahalle/Köy bilgisinin hemen altında Ada No ve Parsel No olarak yer alır." },
            { question: "Sadece ada parsel bilgisiyle iskan durumu öğrenilir mi?", answer: "Evet, il, ilçe, mahalle ve ada/parsel bilgileri belediye arşiv taraması için yeterlidir." }
        ]
    }
];
