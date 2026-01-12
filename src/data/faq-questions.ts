export interface FAQQuestion {
    slug: string;
    question: string;
    shortAnswer: string;
    detailedAnswer: string;
    relatedQuestions: string[];
    category: 'genel' | 'yoksa' | 'ada-parsel' | 'banka' | 'ceza' | 'alici' | 'belge' | 'surec';
}

export const faqQuestions: FAQQuestion[] = [
    // GENEL - İskan Temel Bilgiler
    {
        slug: "iskansiz-ev-alinir-mi",
        question: "İskansız Ev Alınır Mı?",
        shortAnswer: "İskansız ev alınabilir ancak ciddi riskler barındırır. Kredi kullanamama, yüksek fatura tarifeleri ve yasal sorunlar yaşanabilir.",
        detailedAnswer: "İskansız ev satın almak yasal olarak mümkündür, ancak dikkatli olmak gerekir. İskansız evlerde banka kredisi kullanmak zordur, elektrik ve su abonelikleri şantiye tarifesinden açılır ve yüksek ücretler ödenir. Ayrıca belediye tarafından imar cezası veya yıkım kararı çıkma riski vardır. Satın almadan önce mutlaka iskan durumunu araştırın.",
        relatedQuestions: ["iskansiz-evde-oturulur-mu", "iskansiz-eve-kredi-cikar-mi", "iskansiz-ev-riskleri-nelerdir"],
        category: 'alici'
    },
    {
        slug: "iskan-belgesi-nasil-alinir",
        question: "İskan Belgesi Nasıl Alınır?",
        shortAnswer: "İskan belgesi, gerekli evraklar ile belediyeye başvurarak alınır. Yapı denetim raporu, SGK borcu yoktur yazısı ve harç makbuzları gereklidir.",
        detailedAnswer: "İskan belgesi almak için yapı denetim kuruluşunun uygunluk raporu, SGK iş bitirme belgesi, belediye harç makbuzları ve başvuru dilekçesi ile İmar Müdürlüğü'ne başvurulur. Belediye teknik ekibi yerinde inceleme yapar ve yapının projeye uygunluğunu kontrol eder. Süreç 15-45 gün sürebilir.",
        relatedQuestions: ["iskan-icin-gerekli-belgeler", "iskan-basvurusu-nereye-yapilir", "iskan-alma-suresi-ne-kadar"],
        category: 'surec'
    },
    {
        slug: "iskan-yoksa-kredi-cikar-mi",
        question: "İskan Yoksa Kredi Çıkar Mı?",
        shortAnswer: "Genellikle çıkmaz. Bankalar iskansız evlere konut kredisi vermekten kaçınır. Ancak bazı istisnai durumlar vardır.",
        detailedAnswer: "Bankalar risk yönetimi gereği iskansız evlere kredi vermezler. İskan belgesi olmayan yapılar yasal olarak 'inşaat' statüsünde kabul edilir ve teminat olarak kabul edilmez. Ancak yapı bitirilmiş ancak henüz iskan alınmamışsa bazı bankalar eksper raporuna göre kredi verebilir. Kesin bilgi için bankalarla görüşmeniz önerilir.",
        relatedQuestions: ["iskansiz-ev-alinir-mi", "bankalarin-iskan-sartlari", "eksper-raporu-nedir"],
        category: 'banka'
    },
    {
        slug: "iskan-almak-kimin-sorumlulugunda",
        question: "İskan Almak Kimin Sorumluluğundadır?",
        shortAnswer: "Yeni binalarda müteahhit, eski binalarda mal sahibi iskan almakla yükümlüdür.",
        detailedAnswer: "3194 sayılı İmar Kanunu'na göre yeni yapılarda iskan almak müteahhidin sorumluluğundadır. İnşaat sözleşmelerinde bu genellikle açıkça belirtilir. Müteahhit iskan almadan evi teslim etmişse hukuki süreç başlatılabilir. Eski binalarda veya iskan affından yararlanan yapılarda mal sahibi başvuru yapmalıdır.",
        relatedQuestions: ["muteahhit-iskan-almazsa-ne-olur", "iskan-davasi-nasil-acilir", "iskan-alinmazsa-ceza-nedir"],
        category: 'surec'
    },
    {
        slug: "belediyeden-iskan-sorgulama-nasil-yapilir",
        question: "Belediyeden İskan Sorgulama Nasıl Yapılır?",
        shortAnswer: "Ada-parsel numarası veya adres ile İmar Müdürlüğü'ne başvurarak sorgulama yapabilirsiniz.",
        detailedAnswer: "Belediyeden iskan sorgulama için İmar ve Şehircilik Müdürlüğü'ne giderek ada-parsel numarası veya tam adres bilgisiyle başvurunuz. Bazı belediyeler e-belediye sistemleri üzerinden online sorgulama imkanı sunar. Parsel.com gibi platformlardan da ön bilgi alabilirsiniz ancak resmi bilgi için belediye arşivi esastır.",
        relatedQuestions: ["ada-parsel-numarasi-nereden-ogrenilir", "e-devletten-iskan-sorgulama", "online-iskan-sorgulama-siteleri"],
        category: 'ada-parsel'
    },
    {
        slug: "iskansiz-evde-oturulur-mu",
        question: "İskansız Evde Oturulur Mu?",
        shortAnswer: "Fiilen oturulabilir ancak yasal riskler ve yüksek fatura tarifeleri vardır.",
        detailedAnswer: "İskansız evde yaşamak mümkündür ancak yapı yasal olarak 'inşaat' statüsündedir. Elektrik ve su şantiye tarifesiyle bağlanır, doğalgaz genellikle bağlanamaz. Belediye denetimlerinde para cezası uygulanabilir. Sigorta ve kredi işlemlerinde de sorunlar yaşanır.",
        relatedQuestions: ["iskansiz-eve-elektrik-aboneligi", "iskansiz-eve-dogalgaz-baglama", "santiye-tarifesi-nedir"],
        category: 'yoksa'
    },
    {
        slug: "iskan-icin-gerekli-belgeler",
        question: "İskan İçin Gerekli Belgeler Nelerdir?",
        shortAnswer: "Yapı denetim raporu, SGK borcu yoktur yazısı, harç makbuzları, sığınak raporu ve başvuru dilekçesi gereklidir.",
        detailedAnswer: "İskan başvurusu için: 1) Yapı denetim kuruluşunun uygunluk raporu, 2) SGK'dan iş bitirme belgesi, 3) Belediye harç makbuzları, 4) Sığınak raporu (gerekirse), 5) İtfaiye raporu (gerekirse), 6) Asansör muayene belgesi (varsa), 7) Başvuru dilekçesi. Belediyelere göre ek belgeler istenebilir.",
        relatedQuestions: ["iskan-belgesi-nasil-alinir", "yapi-denetim-raporu-nedir", "sgk-is-bitirme-belgesi-nasil-alinir"],
        category: 'belge'
    },
    {
        slug: "iskan-masrafi-ne-kadar",
        question: "İskan Masrafı Ne Kadar?",
        shortAnswer: "Binanın büyüklüğü ve belediyeye göre değişir, ortalama 10.000 - 100.000 TL arasındadır.",
        detailedAnswer: "İskan masrafları yapı denetim ücretleri, SGK primleri, belediye harçları ve teknik inceleme bedellerini içerir. 100 m² bir daire için ortalama 15.000-30.000 TL, büyük bir bina için 50.000-100.000 TL veya daha fazla olabilir. Güncel rakamlar için ilgili belediyeyle iletişime geçin.",
        relatedQuestions: ["iskan-harcı-nereye-odenir", "iskan-masrafini-kim-oder", "2025-iskan-harclari"],
        category: 'ceza'
    },
    {
        slug: "tapuda-iskan-nasil-anlasilir",
        question: "Tapuda İskan Nasıl Anlaşılır?",
        shortAnswer: "Tapu senedinde 'Kat Mülkiyeti' yazıyorsa iskan alınmıştır, 'Kat İrtifakı' yazıyorsa alınmamıştır.",
        detailedAnswer: "Tapu senedinin mülkiyet türü bölümüne bakarak iskan durumunu anlayabilirsiniz. 'Kat Mülkiyeti' ibaresi iskanlı yapıyı gösterir. 'Kat İrtifakı' ise henüz iskan alınmadığını belirtir. E-devlet TAKBİS sisteminden de tapu bilgilerinizi görüntüleyebilirsiniz.",
        relatedQuestions: ["kat-mulkiyeti-ne-demek", "kat-irtifaki-ne-demek", "e-devletten-tapu-sorgulama"],
        category: 'belge'
    },
    {
        slug: "iskansiz-bina-cezasi-ne-kadar",
        question: "İskansız Bina Cezası Ne Kadar?",
        shortAnswer: "Binanın m² ve imar durumuna göre değişir, on binlerce hatta yüz binlerce TL'ye ulaşabilir.",
        detailedAnswer: "3194 sayılı İmar Kanunu'na göre ruhsatsız veya ruhsata aykırı yapılara ağır para cezaları uygulanır. Ceza miktarı yapının büyüklüğü, aykırılık türü ve bölgeye göre değişir. Ayrıca yıkım kararı çıkabilir. İmar barışına başvurulmuş ise cezalar farklı değerlendirilir.",
        relatedQuestions: ["imar-cezasi-nedir", "iskan-cezasi-taksitlendirme", "imar-barisi-nedir"],
        category: 'ceza'
    },
    // Devam eden sorular...
    {
        slug: "e-devletten-iskan-sorgulama",
        question: "E-Devlet'ten İskan Sorgulama Yapılabilir Mi?",
        shortAnswer: "E-devlet üzerinden yapı ruhsatı görüntülenebilir ancak iskan durumu için belediye arşivleri esastır.",
        detailedAnswer: "E-devlet TAKBİS sistemi üzerinden tapu bilgilerinizi (kat mülkiyeti/irtifakı) görebilirsiniz. Yapı ruhsatı bilgisi de bazı sistemlerde mevcuttur. Ancak iskanın kesin durumu için ilgili belediyenin arşivlerinden sorgulama yapılması önerilir.",
        relatedQuestions: ["takbis-nedir", "parsel-sorgulama-nasil-yapilir", "belediye-e-imar-sistemi"],
        category: 'ada-parsel'
    },
    {
        slug: "yeni-binada-iskan-ne-zaman-alinir",
        question: "Yeni Binada İskan Ne Zaman Alınır?",
        shortAnswer: "İnşaat tamamlandıktan sonra, ruhsat süresi dolmadan (genellikle 5 yıl içinde) alınmalıdır.",
        detailedAnswer: "Yeni yapılarda inşaat bitiminden sonra müteahhit iskan başvurusu yapmalıdır. Yapı ruhsatı 5 yıl geçerlidir ve bu süre zarfında iskan alınmalıdır. Süre dolunca ruhsat yenilenmeli veya iskan affından yararlanılmalıdır. Daire satın alırken müteahhitten iskan taahhüdü alınmalıdır.",
        relatedQuestions: ["yapi-ruhsati-gecerlilik-suresi", "muteahhit-iskan-vermezse", "iskan-suresi-uzatilir-mi"],
        category: 'surec'
    },
    {
        slug: "ada-parsel-ile-iskan-sorgulama",
        question: "Ada Parsel ile İskan Sorgulama Nasıl Yapılır?",
        shortAnswer: "Ada ve parsel numarası ile belediye İmar Müdürlüğü'ne başvurarak veya online sistemlerden sorgulayabilirsiniz.",
        detailedAnswer: "Ada-parsel numarası taşınmazın kadastral kimliğidir. Bu numara ile belediye arşivlerinden yapının ruhsat durumu, iskan belgesi, kat sayısı ve proje bilgilerine ulaşılabilir. Parsel.com veya belediye e-imar sistemlerinden online ön sorgulama yapılabilir.",
        relatedQuestions: ["ada-parsel-nedir", "parsel-numarasi-nereden-ogrenilir", "kadastro-sorgulama"],
        category: 'ada-parsel'
    },
    {
        slug: "kat-mulkiyeti-kat-irtifaki-farki",
        question: "Kat Mülkiyeti ile Kat İrtifakı Farkı Nedir?",
        shortAnswer: "Kat mülkiyeti iskanlı yapılarda, kat irtifakı henüz iskan alınmamış yapılarda geçerlidir.",
        detailedAnswer: "Kat irtifakı, arsa üzerinde inşaat henüz devam ederken veya tamamlanmamışken kurulan mülkiyet türüdür. İskan alındıktan sonra kat mülkiyetine geçilir. Kat mülkiyeti daha değerlidir ve yasal güvence sağlar. Tapu alırken bu ayrıma dikkat edilmelidir.",
        relatedQuestions: ["tapuda-iskan-nasil-anlasilir", "kat-mulkiyetine-gecis-nasil-yapilir"],
        category: 'belge'
    },
    {
        slug: "iskan-ne-kadar-surede-cikar",
        question: "İskan Ne Kadar Sürede Çıkar?",
        shortAnswer: "Evraklar tamam ise genellikle 15-30 iş günü içinde tamamlanır.",
        detailedAnswer: "İskan süresi belediyenin iş yüküne, evrakların eksiksizliğine ve yapının projeye uygunluğuna bağlıdır. Normal şartlarda 15-45 gün arasında tamamlanır. Eksik evrak veya projeye aykırılık tespit edilirse süre uzar. Bazı belediyeler hızlı işlem için ek ücret alabilir.",
        relatedQuestions: ["iskan-basvurusu-nasil-takip-edilir", "iskan-sureci-hizlandirma"],
        category: 'surec'
    },
    {
        slug: "iskansiz-eve-dogalgaz-baglama",
        question: "İskansız Eve Doğalgaz Bağlanır Mı?",
        shortAnswer: "Hayır, iskan belgesi olmadan doğalgaz aboneliği yapılamaz.",
        detailedAnswer: "Doğalgaz şirketleri güvenlik gerekçesiyle iskan belgesi talep eder. İskansız yapılarda doğalgaz bağlantısı yasal olarak yapılamaz. Alternatif olarak tüplü gaz veya elektrikli ısıtma sistemleri kullanılabilir ancak maliyetler yüksek olur.",
        relatedQuestions: ["iskansiz-evde-oturulur-mu", "santiye-tarifesi-nedir", "iskansiz-eve-elektrik-aboneligi"],
        category: 'yoksa'
    },
    {
        slug: "imar-barisi-iskan-veriyor-mu",
        question: "İmar Barışı İskan Veriyor Mu?",
        shortAnswer: "İmar barışı ile yapı kayıt belgesi alınır, ancak bu tam anlamıyla iskan değildir.",
        detailedAnswer: "İmar barışı (yapı kayıt belgesi) imara aykırı yapıların yasal statü kazanmasını sağlar. Bu belge ile abonelikler mesken tarifesine geçirilebilir. Ancak tam iskan belgesi değildir ve bazı işlemlerde kısıtlamalar olabilir. Süresiz değildir ve yenilenmesi gerekebilir.",
        relatedQuestions: ["yapi-kayit-belgesi-nedir", "imar-affi-sartlari", "yapi-kayit-belgesi-iskan-yerine-gecer-mi"],
        category: 'belge'
    },
    {
        slug: "dask-icin-iskan-gerekli-mi",
        question: "DASK İçin İskan Gerekli Mi?",
        shortAnswer: "DASK zorunlu deprem sigortası için iskan şart değildir, yapı kayıt belgesi veya tapu yeterlidir.",
        detailedAnswer: "DASK (Zorunlu Deprem Sigortası) için iskan belgesi zorunlu değildir. Tapuda kayıtlı olan veya yapı kayıt belgesi bulunan binalar DASK yaptırabilir. Ancak hasar durumunda iskansız yapılarda tazminat ödemelerinde sorunlar yaşanabilir.",
        relatedQuestions: ["dask-nasil-yaptirilir", "deprem-sigortasi-zorunlu-mu", "iskansiz-ev-sigortalanir-mi"],
        category: 'belge'
    },
    {
        slug: "muteahhit-iskan-vermezse-ne-yapilir",
        question: "Müteahhit İskan Vermezse Ne Yapılır?",
        shortAnswer: "Hukuki süreç başlatılabilir, noter ihtarname çekilir ve gerekirse dava açılır.",
        detailedAnswer: "Müteahhit sözleşmeye rağmen iskan vermiyorsa önce noter kanalıyla ihtarname gönderilir. Makul süre tanınır. Yanıt gelmezse tüketici hakem heyeti veya mahkemeye başvurulabilir. Eksik işler ve iskan masrafları müteahhitten talep edilebilir. Sözleşme hükümleri önemlidir.",
        relatedQuestions: ["iskan-davasi-nasil-acilir", "tuketici-hakem-heyeti-basvurusu", "muteahhit-sorumlulugu-nedir"],
        category: 'surec'
    },
    {
        slug: "kooperatif-evinde-iskan-sorgulama",
        question: "Kooperatif Evinde İskan Nasıl Sorgulanır?",
        shortAnswer: "Kooperatif yönetiminden veya belediyeden ada-parsel ile sorgulama yapılabilir.",
        detailedAnswer: "Kooperatif evlerinde iskan sorgulama için kooperatif yönetiminden bilgi alınabilir. Ayrıca tapu bilgileri ve ada-parsel numarası ile belediyeden resmi sorgulama yapılabilir. Kooperatif tasfiye olmuşsa belediye arşivleri tek başvuru noktasıdır.",
        relatedQuestions: ["kooperatif-evi-nasil-satilir", "kooperatif-tasfiyesi-nedir"],
        category: 'ada-parsel'
    },
    {
        slug: "kiralik-evde-iskan-kontrolu",
        question: "Kiraladığım Evde İskan Var Mı Nasıl Öğrenirim?",
        shortAnswer: "Ev sahibinden iskan belgesi isteyebilir veya belediyeden sorgulama yapabilirsiniz.",
        detailedAnswer: "Kiracı olarak iskan durumunu öğrenmek için: 1) Ev sahibinden iskan belgesi fotokopisi isteyin, 2) Fatura tarifesine bakın - mesken tarifesi ise iskan vardır, 3) Belediyeden ada-parsel ile sorgulayın. İskansız evde kira sözleşmesi geçerlidir ancak faturalar yüksek olur.",
        relatedQuestions: ["kiraci-haklari-iskansiz-ev", "ev-sahibi-iskan-vermezse"],
        category: 'alici'
    },
    {
        slug: "iskan-belgesi-fotokopisi-gecerli-mi",
        question: "İskan Belgesi Fotokopisi Geçerli Mi?",
        shortAnswer: "Çoğu işlem için fotokopi yeterlidir, ancak bazı resmi işlemler için aslı veya onaylı sureti istenebilir.",
        detailedAnswer: "İskan belgesi fotokopisi bilgi amaçlı kullanılabilir. Banka kredisi, noter işlemleri veya resmi başvurularda genellikle belediyeden alınan onaylı suret veya e-imzalı belge talep edilir. Güncel belge istendiğinde belediyeden yeniden alınabilir.",
        relatedQuestions: ["iskan-belgesi-nereden-alinir", "iskan-belgesi-yenileme"],
        category: 'belge'
    },
    {
        slug: "eski-evde-iskan-var-mi",
        question: "Eski Evlerde İskan Var Mı Nasıl Anlaşılır?",
        shortAnswer: "Tapu türü ve fatura tarifeleri kontrol edilerek anlaşılabilir. Belediye arşivinden kesin bilgi alınır.",
        detailedAnswer: "Eski evlerde iskan kontrolü için: 1) Tapu senedinde kat mülkiyeti/irtifakı kontrolü, 2) Elektrik, su, doğalgaz faturalarının tarife türü (mesken ise iskanlı), 3) Belediye imar müdürlüğünden resmi sorgulama. 1980 öncesi bazı yapılar için iskan belgesi bulunmayabilir.",
        relatedQuestions: ["1980-oncesi-binalarda-iskan", "imar-affi-gecmisi"],
        category: 'alici'
    },
    {
        slug: "iskan-belgesi-kayip-yenileme",
        question: "İskan Belgesi Kayıpsa Yenisi Nasıl Alınır?",
        shortAnswer: "Belediye arşivinden tekrar talep edilebilir, ada-parsel bilgisi ile başvuru yapılır.",
        detailedAnswer: "İskan belgesi kaybedilmişse belediye İmar Müdürlüğü arşivinden yenisi alınabilir. Ada-parsel numarası ve tapu fotokopisi ile başvuru yapılır. Dijital arşivler sayesinde çoğu belediyede bu işlem hızlı tamamlanır. Hizmet bedeli belediyeye göre değişir.",
        relatedQuestions: ["belediye-arsiv-sorgulama", "iskan-belgesi-harci"],
        category: 'belge'
    },
    {
        slug: "arsa-tapusu-iskan-durumu",
        question: "Arsa Tapusu Olan Evde İskan Var Mı?",
        shortAnswer: "Arsa tapusu varsa henüz kat mülkiyetine geçilmemiştir, iskan durumu ayrıca sorgulanmalıdır.",
        detailedAnswer: "Arsa tapulu yapılarda iskan olabilir veya olmayabilir. İskan alınmış olsa bile kat mülkiyetine geçilmemiş olabilir. Bu durumda belediyeden iskan belgesi ayrıca sorgulanmalıdır. Kat mülkiyetine geçiş için tüm maliklerin onayı ve ek prosedürler gerekir.",
        relatedQuestions: ["arsa-tapusu-kat-mulkiyeti-farki", "kat-mulkiyetine-gecis-sureci"],
        category: 'belge'
    },
    {
        slug: "villa-iskan-sorgulama",
        question: "Villa ve Müstakil Evlerde İskan Nasıl Sorgulanır?",
        shortAnswer: "Apartmanlarla aynı şekilde belediyeden ada-parsel ile sorgulama yapılır.",
        detailedAnswer: "Villa ve müstakil evlerde iskan sorgulama apartmanlarla aynı prosedürle yapılır. Ada-parsel numarası ile belediye İmar Müdürlüğü'ne başvurulur. Villalarda bahçe düzenlemesi, havuz, müştemilat gibi eklentilerin de ruhsata uygunluğu kontrol edilmelidir.",
        relatedQuestions: ["villa-ruhsati-kontrolu", "mustakil-ev-iskan-masrafi"],
        category: 'ada-parsel'
    },
    {
        slug: "iskan-harci-kim-oder",
        question: "İskan Harcını Kim Öder?",
        shortAnswer: "Yeni binalarda müteahhit, mevcut binalarda mal sahibi iskan harcını öder.",
        detailedAnswer: "İskan harcı yapının inşaat sürecinde müteahhidin sorumluluğundadır ve genellikle satış fiyatına dahildir. Sözleşmede aksi belirtilmemişse müteahhit öder. Eski binalarda veya iskan affı başvurularında mal sahibi ödeme yapar.",
        relatedQuestions: ["iskan-masrafi-ne-kadar", "muteahhit-sorumlulugu"],
        category: 'ceza'
    },
    {
        slug: "iskansiz-ev-satiş-fiyatı",
        question: "İskansız Ev Fiyatı Ne Kadar Düşük Olmalı?",
        shortAnswer: "İskansız evler genellikle piyasa değerinin %10-25 altında satılır.",
        detailedAnswer: "İskansız evler yasal riskler, kredi zorluğu ve ek masraflar nedeniyle daha düşük fiyata satılır. İndirim oranı yapının durumuna, iskan alınabilirlik durumuna ve bölgeye göre değişir. İskan alınması mümkün ise maliyet hesaplanarak pazarlık yapılabilir.",
        relatedQuestions: ["iskansiz-ev-alinir-mi", "iskan-masrafi-ne-kadar", "ev-deger-tespiti"],
        category: 'alici'
    },
    {
        slug: "yapi-ruhsati-iskan-farki",
        question: "Yapı Ruhsatı ile İskan Farkı Nedir?",
        shortAnswer: "Yapı ruhsatı inşaat iznidir, iskan ise bitirilmiş yapının kullanım iznidir.",
        detailedAnswer: "Yapı ruhsatı belediyeden inşaata başlamak için alınan izindir. İskan (yapı kullanma izin belgesi) ise inşaat tamamlandıktan sonra yapının projeye uygun olduğunu ve oturuma hazır olduğunu belgeler. Ruhsat inşaat öncesi, iskan inşaat sonrası alınır.",
        relatedQuestions: ["yapi-ruhsati-nasil-alinir", "ruhsat-suresi-ne-kadar"],
        category: 'belge'
    },
    {
        slug: "iskan-olmadan-tapu-alinir-mi",
        question: "İskan Olmadan Tapu Alınabilir Mi?",
        shortAnswer: "Evet, kat irtifakı ile tapu alınabilir ancak bu iskanlı değildir.",
        detailedAnswer: "İskan alınmadan kat irtifakı tapusu alınabilir. Ancak bu durumda yapı yasal olarak iskansız kabul edilir. Tapu devrinde sorun olmaz ama kredi, abonelik ve sigorta işlemlerinde kısıtlamalar yaşanır. Alıcı olarak iskan durumunu bilerek hareket etmelisiniz.",
        relatedQuestions: ["kat-irtifaki-nedir", "tapuda-iskan-yazilir-mi"],
        category: 'belge'
    }
];

// Tüm kategoriler için slug listesi
export const getAllFAQSlugs = (): string[] =>
    faqQuestions.map(q => q.slug);

// Kategoriye göre filtreleme
export const getFAQsByCategory = (category: FAQQuestion['category']): FAQQuestion[] =>
    faqQuestions.filter(q => q.category === category);

// Slug ile soru bulma
export const findFAQBySlug = (slug: string): FAQQuestion | undefined =>
    faqQuestions.find(q => q.slug === slug);

// İlgili soruları getirme
export const getRelatedFAQs = (slug: string): FAQQuestion[] => {
    const question = findFAQBySlug(slug);
    if (!question) return [];

    return question.relatedQuestions
        .map(relSlug => findFAQBySlug(relSlug))
        .filter((q): q is FAQQuestion => q !== undefined);
};
