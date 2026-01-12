export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: 'İskan' | 'İmar' | 'Tapu';
}

export const blogPosts: BlogPost[] = [
  {
    id: 'user-guide-1',
    slug: 'iskan-sorgulama-rehberi-nasil-yapilir',
    title: 'İskan Sorgulama Nedir? Nasıl Yapılır? | Detaylı Rehber',
    summary: 'İskan sorgulama süreçleri, gerekli evraklar ve e-Devlet üzerinden sorgulama adımları. İskan belgesi hakkında bilmeniz gereken her şey.',
    content: `
      <h2>İskan Sorgulama Nedir? Nasıl Yapılır?</h2>
      <p>İnşaatı tamamlanmış bir binanın mimari projeye uygun şekilde yapıldığını onaylayan belgeye <strong>iskan ruhsatı</strong> denir. İskan, oturma izni anlamına gelmektedir. İskan olmaması durumunda oturduğunuz mülkte elektrik ve su bağlantı izni de yoktur demektir.</p>

      <p>İskan sorgulama için tapusuna bakılabilir. <strong>Kat mülkiyeti</strong> ibaresi varsa konut iskanlıdır. Kat irtifaklı ise edilen müracaatla tapu kadastrodaki görevli projeyi yerinde inceliyor. Proje uygun ise cins değişikliğinin tamamlar ve binanıza iskan verilir. e-Devlet üzerinden de iskan sorgulaması yapılabilmektedir.</p>

      <h3>İskan Nasıl Alınır?</h3>
      <p>İskan inşaatı yapan kişinin sorumluluğundadır. İnşaattan sorumlu kişi belediyelerin imar müdürlüklerine verecekleri dilekçe ile iskan almak için başvuruda bulunabilirler. Yapı başvurusu şartlarında belirlenmiş olan şartların yerine getirilmesi gerekmektedir. Belediyeye yatırılan harçlar tamamlanıp iskan alınabilir.</p>

      <h3>İskan Sorgulama Nasıl Yapılır?</h3>
      <p>Bir yapının Yapı Kullanma İzin Belgesi (İskan) belgesi olup olmadığını sorgulama yaparak öğrenilir. İskan sorgulama için bulunduğunuz il veya ilçedeki belediyenin imar müdürlüğüne başvurabilirsiniz. Eğer tapu sahibi iseniz aşağıdaki adımları uygulayabilirsiniz;</p>

      <ol>
        <li><strong>e-Devlet</strong> sistemine giriş yapın.</li>
        <li>İskan sorgulama yapacağınız yapının tapusu, kimin adına ise onun sisteminden bakılır.</li>
        <li>Arama bölümüne "Yapı Kullanma İzin Belgesi (İskan) Verilmesi" yazarak ilgili sayfaya gidin.</li>
        <li>"Uygulamaya Git" butonuna tıklayın.</li>
      </ol>
      <p>Bu adımları takip ederek kolaylıkla iskan sorgulayabilirsiniz.</p>

      <h3>İskan Başvurusu İçin Gerekli Evraklar Nelerdir?</h3>
      <ul>
        <li>İskan için başvuru dilekçesi</li>
        <li>Yapı denetimden alınan belge</li>
        <li>Isı yalıtım belgesi</li>
        <li>İş bitiş tutanağı</li>
        <li>İnşaat ruhsat fotokopisi</li>
        <li>Tapu bilgileri</li>
        <li>Dış Kanal Belgesi (İZSU)</li>
        <li>Asansör firmasından alınan TSE Belgeleri</li>
        <li>Vergi Dairesi’nden alınan "borcu yoktur" yazısı</li>
        <li>SGK "borcu yoktur" yazısı</li>
        <li>Yapının dış cephe fotoğrafları</li>
      </ul>

      <h3>Binada Asansör Varsa İskan İçin İstenen Belgeler Nelerdir?</h3>
      <p>İnşaatı tamamlanan binanın içerisinde asansör varsa, birkaç ek belge daha istenebilir. Ek olarak istenen belgeler şunlardır:</p>
      <ul>
        <li>4 adet Muayene Raporu</li>
        <li>Asansör firmasından alınacak TSE belgeleri</li>
        <li>Muayene fişi</li>
        <li>Sığınak raporu</li>
        <li>Yangın tesisat raporu</li>
        <li>Garanti belgesi</li>
        <li>Mühendislerin SMM belgeleri</li>
        <li>Uygulama projeleri</li>
      </ul>

      <h3>Tapu Kat İrtifaklı İse İskansız Mıdır?</h3>
      <p>Bina cins değişikliği için tapu kadastroya müracaat edilmelidir. İşlem yapılmadıysa tapuda cins değişikliği yapılmamış ve kat irtifaklı tapuyla devam edilmektedir.</p>

      <h3>İskan Alınmaz İse Ne Olur?</h3>
      <p>İskanı bulunmayan bir ev satın aldığınız zaman bazı sorunlarla karşılaşabilirsiniz. İşte karşılaşmanız muhtemel sorunlar şunlardır:</p>
      <ul>
        <li>Dairenizi satın alacak olan kişi kredi ile satın alacaksa kredi kullanmada sıkıntılar çıkabilir.</li>
        <li>İskan belgesi bulunmayan daireler kat mülkiyetine döndürülemez.</li>
        <li>İnşaatın projeye uygun olmayan bölümleri belediye tarafından yıkılabilir.</li>
        <li>Belediye iskanı olmayan ev için para cezası uygulayabilir ve hatta yıkım kararı bile alabilir.</li>
        <li>İskan belgesi olmadan ev satın alacaksanız mutlaka bir uzmana danışmalısınız.</li>
      </ul>

      <h3>İskan Belgesi Ne Zaman Verilir?</h3>
      <p>Öncelikle işlemlerin tamamlanmış olması gerekir. İşlemler tamamlandıktan sonra inceleme süresi başlar. Belgenin çıkıp çıkmadığını e-Devlet üzerinden bakabilirsiniz. Uygun olduğu takdirde geçici iskan belgesi verilebilir. Aksi durumlarda bu süreç uzamaktadır.</p>

      <h3>İskan Belgesi Neden Verilir? Gerekli Midir?</h3>
      <p>İskan belgesi yapının oturum iznidir. Gerekli tüm şartlara uygunluğunun kanıtıdır. Yeni yapılarda oturum izni, elektrik ve su bağlantısı, doğalgaz bağlantısı gibi izinleri almak adına iskan alınması gerekir. Eğer iskansız bir evde otuyorsanız ve elektrik su kullanıyorsanız fatura ödemeleri şantiye üzerinden olacaktır. Şantiye üzerinden yapılan ödemeler oldukça fazladır. Fakat iskan alınırsa mesken olarak ödeme yapılır ve bunun bedeli daha düşüktür. Aradaki farkı faturanızdan görebilirsiniz. Bunun haricinde yapı eğer belediye tarafından onaylanmayıp iskan verilmemişse bina da bir kusur olduğunun göstergesidir.</p>

      <h3>Beş Yıl İçerisinde İskan Alınmaz İse Ne Olur?</h3>
      <p>İnşaat ruhsat tarihinden itibaren 5 yıl içerisinde inşaatın tamamlanarak iskan belgesinin çıkarılması gerekmektedir. 3194 Sayılı İmar Kanunu’na göre: 5 yıl içerisinde inşaat biter ve iskan raporu alınmaz ise inşaat ruhsatı işlevini yitirir. Bundan dolayı da yapılan yapı ruhsatsız kaçak yapı durumuna düşer. Bağlı bulunan belediye tarafından iskanı bulunmayan yapıya para cezası uygulanabilir ve hatta yıkım gerçekleştirilebilir.</p>
    `,
    image: '/iskan_sorgulama_rehberi.png',
    date: '29 Aralık 2024',
    readTime: '8 dk okuma',
    category: 'İskan'
  },
  {
    id: '1',
    slug: 'iskan-belgesi-nedir-neden-onemlidir',
    title: 'İskan Belgesi Nedir ve Neden Önemlidir?',
    summary: 'Yapı Kullanma İzin Belgesi (İskan) hakkında merak edilenler, alınmasının önemi ve hukuki boyutu bu yazımızda.',
    content: `
      <h2>İskan Belgesi (Yapı Kullanma İzin Belgesi) Nedir?</h2>
      <p>İskan belgesi, bir yapının tasdikli projesine uygun olarak tamamlandığını, fen ve sağlık kurallarına uygun olduğunu gösteren ve ilgili belediye tarafından verilen resmi bir belgedir. Halk arasında "iskan" olarak bilinen bu belgenin resmi adı "Yapı Kullanma İzin Belgesi"dir.</p>
      
      <h3>İskan Belgesi Neden Bu Kadar Önemli?</h3>
      <p>Bir binanın iskanının olması, o yapının yasal süreçlerinin tamamlandığını gösterir. İskansız binalar hukuken "inşaat" vasfında görünür. Bu durum şu sorunlara yol açabilir:</p>
      <ul>
        <li><strong>Abonelik Sorunları:</strong> İskanı olmayan dairelerde elektrik ve su abonelikleri "şantiye" tarifesinden açılabilir, bu da faturaların çok daha yüksek gelmesine neden olur.</li>
        <li><strong>Kredi Kullanımı:</strong> Bankalar genellikle iskanı olmayan (kat irtifaklı) yapılara konut kredisi vermekten kaçınır veya daha düşük tutarlarda kredi verir.</li>
        <li><strong>Kat Mülkiyeti:</strong> Kat mülkiyetine geçebilmek için iskan belgesi şarttır.</li>
      </ul>

      <h3>İskan Nasıl Alınır?</h3>
      <p>İnşaat tamamlandıktan sonra müteahhit veya mülk sahibi, belediyenin İmar Müdürlüğü'ne başvurur. Belediye ekipleri binayı yerinde denetler. Eğer bina projeye uygunsa, SGK ve vergi borcu yoksa iskan belgesi düzenlenir.</p>
    `,
    image: '/iskan_belgesi_onemi.png',
    date: '29 Aralık 2024',
    readTime: '4 dk okuma',
    category: 'İskan'
  },
  {
    id: '2',
    slug: 'imar-durumu-sorgulama-nasil-yapilir',
    title: 'İmar Durumu Sorgulama Nasıl Yapılır?',
    summary: 'Arsa veya arazinizin imar durumunu öğrenmenin yolları. E-devlet ve belediye sorgulama yöntemleri.',
    content: `
      <h2>İmar Durumu Nedir?</h2>
      <p>İmar durumu, bir arazinin imar planındaki kullanım amacını (konut, ticaret, park vb.) ve yapılaşma koşullarını (kat adedi, TAKS, KAKS) gösteren belgedir.</p>

      <h3>Sorgulama Yöntemleri</h3>
      <p>İmar durumunu öğrenmek için birkaç farklı yöntem bulunmaktadır:</p>
      
      <h4>1. Belediyeden Sorgulama</h4>
      <p>En kesin ve detaylı bilgi için ilgili belediyenin İmar Müdürlüğü'ne tapunuzla birlikte başvurabilirsiniz. Buradan alacağınız "İmar Durum Belgesi" resmi nitelik taşır.</p>

      <h4>2. E-İmar ve Online Sistemler</h4>
      <p>Birçok belediye (İstanbul, Ankara, İzmir vb.) "E-İmar" veya "Kent Rehberi" uygulamaları üzerinden ada/parsel numarası ile sorgulama imkanı sunmaktadır. Bu sistemler genellikle bilgi amaçlıdır.</p>

      <h4>3. Tapu ve Kadastro Bilgi Sistemi (TAKBİS)</h4>
      <p>Parsel Sorgulama uygulaması üzerinden arazinin öznitelik bilgilerine ulaşabilirsiniz, ancak detaylı imar notları için belediye verisi esastır.</p>
    `,
    image: '/imar_durumu_sorgulama.png',
    date: '28 Aralık 2024',
    readTime: '3 dk okuma',
    category: 'İmar'
  },
  {
    id: '3',
    slug: 'kat-irtifaki-ile-kat-mulkiyeti-farki',
    title: 'Kat İrtifakı ve Kat Mülkiyeti Arasındaki Farklar',
    summary: 'Ev alırken karşınıza çıkan kat irtifakı ve kat mülkiyeti kavramları arasındaki kritik farkları öğrenin.',
    content: `
      <h2>Kat İrtifakı Nedir?</h2>
      <p>Kat irtifakı, henüz tamamlanmamış veya iskanı alınmamış binalarda, hak sahiplerinin paylarını gösteren tapu türüdür. Hukuken bina henüz "arsa" üzerindeki bir proje olarak görünür.</p>

      <h2>Kat Mülkiyeti Nedir?</h2>
      <p>Kat mülkiyeti, iskanı alınmış (bitmiş) binalarda, her bir bağımsız bölümün (dairenin) ayrı ayrı mülkiyetinin tescil edildiği tapu türüdür. En güvenli tapu türüdür.</p>

      <h3>Arasındaki Temel Farklar</h3>
      <ul>
        <li><strong>İskan:</strong> Kat mülkiyeti için iskan şarttır, kat irtifakı için değildir.</li>
        <li><strong>Yasal Statü:</strong> Kat mülkiyeti "bina" statüsündedir, kat irtifakı tapuda genellikle "arsa" paylı olarak görünür.</li>
        <li><strong>Kredi:</strong> Kat mülkiyetli dairelere kredi çıkması çok daha kolaydır.</li>
      </ul>

      <p>Not: Ev alırken mutlaka "Kat Mülkiyeti" kutucuğunun işaretli olduğu tapuları tercih etmeniz önerilir.</p>
    `,
    image: '/kat_mulkiyeti_vs_irtifak.png',
    date: '27 Aralık 2024',
    readTime: '5 dk okuma',
    category: 'Tapu'
  },
  {
    id: '4',
    slug: 'iskansiz-ev-almanin-riskleri',
    title: 'İskansız Ev Almanın Riskleri Nelerdir?',
    summary: 'Fiyatı uygun diye iskansız ev almayı düşünüyorsanız bu riskleri mutlaka gözden geçirin.',
    content: `
      <h2>İskansız Ev Neden Ucuzdur?</h2>
      <p>İskansız evler piyasa değerinin %10-20 altında satılabilir. Bunun sebebi barındırdığı belirsizlikler ve potansiyel masraflardır.</p>

      <h3>Başlıca Riskler</h3>
      <ol>
        <li><strong>Para Cezaları ve Yıkım:</strong> Eğer bina projeye aykırı yapıldığı için iskan alamıyorsa, belediye tarafından yıkım kararı veya ağır para cezaları uygulanabilir. Bu borçlar mülk sahibine rücu edebilir.</li>
        <li><strong>Abonelik Zorlukları:</strong> Elektrik ve su aboneliklerini üzerinize almak zor olabilir veya yüksek tarifeli şantiye elektriği kullanmak zorunda kalabilirsiniz.</li>
        <li><strong>Satış Zorluğu:</strong> İleride evi satmak istediğinizde, kredi çıkmayacağı veya zor çıkacağı için alıcı bulmakta zorlanabilirsiniz.</li>
      </ol>

      <p>Uzman Tavsiyesi: İskansız bir ev almadan önce mutlaka belediyeden dosyasını inceletin. Neden iskan alınamadığını öğrenin.</p>
    `,
    image: '/iskansiz_ev_riskleri.png',
    date: '26 Aralık 2024',
    readTime: '4 dk okuma',
    category: 'İskan'
  },
  {
    id: '5',
    slug: 'tapu-senedinde-iskan-nasil-anlasilir',
    title: 'Tapu Senedinde İskan Nasıl Anlaşılır?',
    summary: 'Elinizdeki tapuya bakarak iskan durumunu anlamanın basit yolları. Tapu okuma rehberi.',
    content: `
      <h2>Tapu Senedini Okumak</h2>
      <p>Tapu senedi üzerinde gayrimenkulün iskan durumu hakkında en net bilgiyi veren kısım "Niteliği" ve "Kat Mülkiyeti/Kat İrtifakı" kutucuklarıdır.</p>

      <h3>Hangi İfade Ne Anlama Geliyor?</h3>
      <ul>
        <li><strong>Kat Mülkiyeti (İşaretli):</strong> %99 ihtimalle binanın iskanı vardır. Bu en güvenli durumdur.</li>
        <li><strong>Kat İrtifakı (İşaretli):</strong> Bina henüz inşaat aşamasında olabilir VEYA bina bitmiş ama iskan alınmamış olabilir. Risk içerir.</li>
        <li><strong>Niteliği Kısmı:</strong> Eğer burada "Arsa" yazıyorsa bina tapuya işlenmemiştir. "Kargir Apartman", "Mesken" gibi ifadeler varsa bina resmileşmiştir.</li>
      </ul>

      <p>Dikkat: Tapu üzerindeki bilgiler her zaman güncel olmayabilir (örn: bina yıkılmış olabilir). Bu yüzden belediye teyidi her zaman şarttır.</p>
    `,
    image: '/tapu_senedi_detay.png',
    date: '25 Aralık 2024',
    readTime: '3 dk okuma',
    category: 'Tapu'
  },
  {
    id: '6',
    slug: 'imar-barisi-ve-yapi-kayit-belgesi',
    title: 'İmar Barışı ve Yapı Kayıt Belgesi',
    summary: 'İmar barışı nedir, yapı kayıt belgesi ne işe yarar, ruhsatsız yapılar için düzenlemeler.',
    content: `
      <h2>İmar Barışı Nedir?</h2>
      <p>İmar barışı, ruhsatsız veya ruhsat eklerine aykırı yapılmış yapıların kayıt altına alınması amacıyla çıkarılan bir düzenlemedir. Bu kapsamda "Yapı Kayıt Belgesi" verilir.</p>

      <h3>Yapı Kayıt Belgesi İskan Yerine Geçer mi?</h3>
      <p>Yapı Kayıt Belgesi, tam anlamıyla bir iskan (yapı kullanma izin belgesi) değildir, ancak iskanın sağladığı birçok hakkı sağlar:</p>
      <ul>
        <li>Elektrik, su ve doğalgaz aboneliği bağlanmasını sağlar.</li>
        <li>Yapı hakkında verilen yıkım kararlarını ve para cezalarını durdurur.</li>
        <li>Tapuda cins değişikliği yapılmasının yolunu açar.</li>
      </ul>

      <p>Ancak, kentsel dönüşüm veya bina yenileme durumunda bu belgenin geçerliliği ve binaya sağladığı haklar (ilave kat vb.) iyi araştırılmalıdır.</p>
    `,
    image: '/imar_barisi_basvuru.png',
    date: '24 Aralık 2024',
    readTime: '5 dk okuma',
    category: 'İmar'
  }
];
