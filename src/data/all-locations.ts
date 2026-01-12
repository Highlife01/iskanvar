export interface District {
    slug: string;
    name: string;
    neighborhoods?: string[];
}

export interface City {
    slug: string;
    name: string;
    districts: District[];
}

export const allCities: City[] = [
    {
        "slug": "adana",
        "name": "Adana",
        "districts": [
            { "slug": "seyhan", "name": "Seyhan", "neighborhoods": ["gurselpasa", "resatbey", "cemalpasa", "kurtulus"] },
            { "slug": "cukurova", "name": "Çukurova", "neighborhoods": ["guzelyali", "yurt", "mahfesigmaz", "huzurevleri"] },
            { "slug": "yuregir", "name": "Yüreğir", "neighborhoods": ["kislalis", "yavuzlar", "sinanpasa"] },
            { "slug": "saricam", "name": "Sarıçam", "neighborhoods": ["mehmetakifersoy", "osmangazi", "balcali"] },
            { "slug": "ceyhan", "name": "Ceyhan", "neighborhoods": ["istiklal", "cumhuriyet", "sahil"] }
        ]
    },
    {
        "slug": "adiyaman",
        "name": "Adıyaman",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["turgutreis", "sumerevler", "yenimahalle"] },
            { "slug": "besni", "name": "Besni", "neighborhoods": ["yenikent", "ciritmeydan"] },
            { "slug": "kahta", "name": "Kahta", "neighborhoods": ["girne", "karatas"] }
        ]
    },
    {
        "slug": "afyonkarahisar",
        "name": "Afyonkarahisar",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["duumlupinar", "erkmen", "fatih"] },
            { "slug": "bolvadin", "name": "Bolvadin", "neighborhoods": ["alis", "erkmen"] },
            { "slug": "dinar", "name": "Dinar", "neighborhoods": ["fatih", "baglar"] }
        ]
    },
    {
        "slug": "agri",
        "name": "Ağrı",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["firat", "hurbil", "abide"] },
            { "slug": "patnos", "name": "Patnos", "neighborhoods": ["yenimahalle", "cumhuriyet"] },
            { "slug": "dogubayazit", "name": "Doğubayazıt", "neighborhoods": ["buyukagri", "hasankeyf"] }
        ]
    },
    {
        "slug": "amasya",
        "name": "Amasya",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["hacilar", "seyhcui"] },
            { "slug": "merzifon", "name": "Merzifon", "neighborhoods": ["harmancik", "bahcelievler"] }
        ]
    },
    {
        "slug": "ankara",
        "name": "Ankara",
        "districts": [
            { "slug": "cankaya", "name": "Çankaya", "neighborhoods": ["kizilay", "bahcelievler", "umitkoy", "cayyolu", "ayranci"] },
            { "slug": "kecioren", "name": "Keçiören", "neighborhoods": ["etlik", "incirli", "kalaba", "ayvali"] },
            { "slug": "yenimahalle", "name": "Yenimahalle", "neighborhoods": ["batikent", "demetevler", "karsiyaka", "ostim"] },
            { "slug": "mamak", "name": "Mamak", "neighborhoods": ["abidinpasa", "akdere", "misket", "tuzlucayir"] },
            { "slug": "etimesgut", "name": "Etimesgut", "neighborhoods": ["eryaman", "elvankent", "baglica"] },
            { "slug": "sincan", "name": "Sincan", "neighborhoods": ["fatih", "plevne", "tandogan"] },
            { "slug": "altindag", "name": "Altındağ", "neighborhoods": ["ulus", "aydinlikevler", "siteler"] },
            { "slug": "pursaklar", "name": "Pursaklar", "neighborhoods": ["merkez", "saray"] },
            { "slug": "golbasi", "name": "Gölbaşı", "neighborhoods": ["incek", "karsiyaka"] }
        ]
    },
    {
        "slug": "antalya",
        "name": "Antalya",
        "districts": [
            { "slug": "muratpasa", "name": "Muratpaşa", "neighborhoods": ["lara", "fener", "caglayan", "meydankavagi", "sirinyali"] },
            { "slug": "kepez", "name": "Kepez", "neighborhoods": ["kultur", "ahatli", "gundogdu"] },
            { "slug": "konyaalti", "name": "Konyaaltı", "neighborhoods": ["liman", "hurma", "sarisu", "uncali", "altinkum"] },
            { "slug": "alanya", "name": "Alanya", "neighborhoods": ["mahmutlar", "oba", "tosmur", "cikcilli"] },
            { "slug": "manavgat", "name": "Manavgat", "neighborhoods": ["side", "sorgun", "ilica"] },
            { "slug": "kemer", "name": "Kemer", "neighborhoods": ["goynuk", "beldibi", "camyuva"] },
            { "slug": "kas", "name": "Kaş", "neighborhoods": ["kalkan", "gelemi", "gokseki"] }
        ]
    },
    {
        "slug": "artvin",
        "name": "Artvin",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["carsisi", "dere"] },
            { "slug": "hopa", "name": "Hopa", "neighborhoods": ["ortahopa", "sundura"] }
        ]
    },
    {
        "slug": "aydin",
        "name": "Aydın",
        "districts": [
            { "slug": "efeler", "name": "Efeler", "neighborhoods": ["mimar", "girne", "zafer"] },
            { "slug": "kusadasi", "name": "Kuşadası", "neighborhoods": ["kadinlar", "davutlar", "guzelcamli"] },
            { "slug": "didim", "name": "Didim", "neighborhoods": ["altinkum", "mavisehir", "akbuk"] },
            { "slug": "soke", "name": "Söke", "neighborhoods": ["yenikent", "cumhuriyet"] }
        ]
    },
    {
        "slug": "balikesir",
        "name": "Balıkesir",
        "districts": [
            { "slug": "altieylul", "name": "Altıeylül", "neighborhoods": ["bahcelievler", "plevne"] },
            { "slug": "karesi", "name": "Karesi", "neighborhoods": ["pasalani", "toygar"] },
            { "slug": "edremit", "name": "Edremit", "neighborhoods": ["akcay", "altinoluk", "gure"] },
            { "slug": "bandirma", "name": "Bandırma", "neighborhoods": ["pasabayir", "sunullah"] },
            { "slug": "ayvalik", "name": "Ayvalık", "neighborhoods": ["sarimsakli", "cunda", "altinova"] }
        ]
    },
    {
        "slug": "bilecik",
        "name": "Bilecik",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["bahcelievler", "ertugrulgazi"] },
            { "slug": "bozuyuk", "name": "Bozüyük", "neighborhoods": ["yenimahalle", "kasippasa"] }
        ]
    },
    {
        "slug": "bingol",
        "name": "Bingöl",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["kultur", "saray"] }
        ]
    },
    {
        "slug": "bitlis",
        "name": "Bitlis",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["besminare", "husrevpasa"] },
            { "slug": "tatvan", "name": "Tatvan", "neighborhoods": ["kultur", "aydinlar"] }
        ]
    },
    {
        "slug": "bolu",
        "name": "Bolu",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["kalici", "borazanlar", "saglik"] },
            { "slug": "gerede", "name": "Gerede", "neighborhoods": ["kabiller", "demirciler"] }
        ]
    },
    {
        "slug": "burdur",
        "name": "Burdur",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["ozgurluk", "konak"] },
            { "slug": "bucak", "name": "Bucak", "neighborhoods": ["fatih", "oguzhan"] }
        ]
    },
    {
        "slug": "bursa",
        "name": "Bursa",
        "districts": [
            { "slug": "nilufer", "name": "Nilüfer", "neighborhoods": ["ozluce", "ertugrul", "balat", "ihsaniye", "besevler", "gorukle"] },
            { "slug": "osmangazi", "name": "Osmangazi", "neighborhoods": ["cekirge", "altiparmak", "kukurtlu", "hursiyet", "emek"] },
            { "slug": "yildirim", "name": "Yıldırım", "neighborhoods": ["erikli", "millet", "yavuzselim", "siteler"] },
            { "slug": "mudanya", "name": "Mudanya", "neighborhoods": ["guzelyali", "halitpasa"] },
            { "slug": "gemlik", "name": "Gemlik", "neighborhoods": ["manastir", "esrefdincer"] },
            { "slug": "inegol", "name": "İnegöl", "neighborhoods": ["kemalpasa", "yilmaz"] }
        ]
    },
    {
        "slug": "canakkale",
        "name": "Çanakkale",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["barboros", "cevatoasa", "esenler"] },
            { "slug": "biga", "name": "Biga", "neighborhoods": ["sakarya", "sirintepe"] },
            { "slug": "gelibolu", "name": "Gelibolu", "neighborhoods": ["gazi", "yazicizade"] }
        ]
    },
    {
        "slug": "cankiri",
        "name": "Çankırı",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["bugday", "fatih"] }
        ]
    },
    {
        "slug": "corum",
        "name": "Çorum",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["bahcelievler", "buhara", "ulsukavak"] },
            { "slug": "sungurlu", "name": "Sungurlu", "neighborhoods": ["baspinar", "sunguroglu"] }
        ]
    },
    {
        "slug": "denizli",
        "name": "Denizli",
        "districts": [
            { "slug": "pamukkale", "name": "Pamukkale", "neighborhoods": ["bagbasi", "kinikli", "zeytinkoy"] },
            { "slug": "merkezefendi", "name": "Merkezefendi", "neighborhoods": ["yenisehir", "adaled", "servergazi"] }
        ]
    },
    {
        "slug": "diyarbakir",
        "name": "Diyarbakır",
        "districts": [
            { "slug": "baglar", "name": "Bağlar", "neighborhoods": ["bagcilar", "kaynartepe"] },
            { "slug": "kayapinar", "name": "Kayapınar", "neighborhoods": ["firat", "huzurevleri", "peyaz"] },
            { "slug": "yenisehir", "name": "Yenişehir", "neighborhoods": ["ofis", "kooperatifler"] },
            { "slug": "sur", "name": "Sur", "neighborhoods": ["melikahmet", "dabanoğolu"] }
        ]
    },
    {
        "slug": "duzce",
        "name": "Düzce",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["kalici", "konuralp", "kultur"] },
            { "slug": "akcakoca", "name": "Akçakoca", "neighborhoods": ["osmaniye", "yali"] }
        ]
    },
    {
        "slug": "edirne",
        "name": "Edirne",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["sukrupasa", "fatih", "kocasinan"] },
            { "slug": "kesan", "name": "Keşan", "neighborhoods": ["asagi", "yukari"] }
        ]
    },
    {
        "slug": "elazig",
        "name": "Elazığ",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["atasehir", "sursuru", "dogukent", "cumhuriyet"] }
        ]
    },
    {
        "slug": "erzincan",
        "name": "Erzincan",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["inonu", "mimar"] }
        ]
    },
    {
        "slug": "erzurum",
        "name": "Erzurum",
        "districts": [
            { "slug": "yakutiye", "name": "Yakutiye", "neighborhoods": ["terminal", "sukrupasa"] },
            { "slug": "palandoken", "name": "Palandöken", "neighborhoods": ["yildizkent", "yenisehir"] },
            { "slug": "aziziye", "name": "Aziziye", "neighborhoods": ["dadasment", "ilica"] }
        ]
    },
    {
        "slug": "eskisehir",
        "name": "Eskişehir",
        "districts": [
            { "slug": "odunpazari", "name": "Odunpazarı", "neighborhoods": ["visnelik", "gokmeydan", "emek", "buyukdere"] },
            { "slug": "tepebasi", "name": "Tepebaşı", "neighborhoods": ["batikent", "camlica", "sirintepe", "yenibaglar"] }
        ]
    },
    {
        "slug": "gaziantep",
        "name": "Gaziantep",
        "districts": [
            { "slug": "sahinbey", "name": "Şahinbey", "neighborhoods": ["karatas", "guneykent", "yeditepe", "akkent"] },
            { "slug": "sehitkamil", "name": "Şehitkamil", "neighborhoods": ["guvenevler", "batikent", "ibrahimli", "gazikent"] }
        ]
    },
    {
        "slug": "giresun",
        "name": "Giresun",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["gedikkaya", "tinztepe"] },
            { "slug": "bulancak", "name": "Bulancak", "neighborhoods": ["ihsaniye", "ballica"] }
        ]
    },
    {
        "slug": "gumushane",
        "name": "Gümüşhane",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["baglarbasi", "hasanbey"] }
        ]
    },
    {
        "slug": "hakkari",
        "name": "Hakkari",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["dagcol", "bulak"] },
            { "slug": "yuksekova", "name": "Yüksekova", "neighborhoods": ["esentepe", "yenimahalle"] }
        ]
    },
    {
        "slug": "hatay",
        "name": "Hatay",
        "districts": [
            { "slug": "antakya", "name": "Antakya", "neighborhoods": ["sumer", "akasiya", "odabasi"] },
            { "slug": "iskenderun", "name": "İskenderun", "neighborhoods": ["numune", "denizciler", "meydan"] },
            { "slug": "defne", "name": "Defne", "neighborhoods": ["cekmece", "subasi"] }
        ]
    },
    {
        "slug": "igdir",
        "name": "Iğdır",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["cumhuriyet", "sogutlu"] }
        ]
    },
    {
        "slug": "isparta",
        "name": "Isparta",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["counur", "fatih", "modern"] }
        ]
    },
    {
        "slug": "istanbul",
        "name": "İstanbul",
        "districts": [
            { "slug": "esenyurt", "name": "Esenyurt", "neighborhoods": ["cumhuriyet", "guzelyurt", "pinar", "mehtercesme"] },
            { "slug": "kadikoy", "name": "Kadıköy", "neighborhoods": ["moda", "fenerbahce", "caddebostan", "suadiye", "goztepe", "bostanci", "caferaga", "rasimpasa", "kosuyolu", "acibadem"] },
            { "slug": "besiktas", "name": "Beşiktaş", "neighborhoods": ["levent", "etiler", "bebek", "ortakoy", "arnavutkoy", "ulus", "yildiz", "dikilitas"] },
            { "slug": "sisli", "name": "Şişli", "neighborhoods": ["nisantasi", "osmanbey", "mecidiyekoy", "fulya", "kustepe", "ferikoy", "bomonti"] },
            { "slug": "uskudar", "name": "Üsküdar", "neighborhoods": ["cengelkoy", "kuzguncuk", "beylerbeyi", "altunizade", "kisikli", "bulgurlu"] },
            { "slug": "bakirkoy", "name": "Bakırköy", "neighborhoods": ["atakoy", "yesilkoy", "florya", "yesilyurt", "incirli"] },
            { "slug": "fatih", "name": "Fatih", "neighborhoods": ["sultanahmet", "eminonu", "aksaray", "balat", "fener"] },
            { "slug": "beyoglu", "name": "Beyoğlu", "neighborhoods": ["taksim", "cihangir", "galata", "karakoy", "kasimpasa"] },
            { "slug": "sariyer", "name": "Sarıyer", "neighborhoods": ["istinye", "tarabya", "emirgan", "yenikoy", "zekeriyakoy", "maslak"] },
            { "slug": "maltepe", "name": "Maltepe", "neighborhoods": ["altintepe", "cevizli", "idealtepe", "kucukyali", "zumrutevler"] },
            { "slug": "atasehir", "name": "Ataşehir", "neighborhoods": ["barbaros", "icerenkoy", "yenisahra", "ataturk", "kayisdagi"] },
            { "slug": "umraniye", "name": "Ümraniye", "neighborhoods": ["cakmak", "ihlamurkuyu", "serifali", "atakent"] },
            { "slug": "pendik", "name": "Pendik", "neighborhoods": ["kurtkoy", "yenihesir", "kaynarca", "guzelyali"] },
            { "slug": "bahcelievler", "name": "Bahçelievler", "neighborhoods": ["sirinevler", "yenibosna", "siyavuspasa"] },
            { "slug": "kucukcekmece", "name": "Küçükçekmece", "neighborhoods": ["halkali", "sefakoy", "atakent"] },
            { "slug": "bagcilar", "name": "Bağcılar", "neighborhoods": ["gunesli", "mahmutbey"] },
            { "slug": "basaksehir", "name": "Başakşehir", "neighborhoods": ["kayasehir", "bahcesehir", "altinsehir"] },
            { "slug": "beylikduzu", "name": "Beylikdüzü", "neighborhoods": ["büyükşehir", "adnan", "kavakli", "yakuplu", "gurpinar"] },
            { "slug": "sancaktepe", "name": "Sancaktepe", "neighborhoods": ["sarigazi", "yenidogan"] },
            { "slug": "kartal", "name": "Kartal", "neighborhoods": ["yakacik", "soganlik", "kordonboyu", "dragos"] },
            { "slug": "gaziosmanpasa", "name": "Gaziosmanpaşa", "neighborhoods": ["kucukkoy", "yildiz"] },
            { "slug": "sultangazi", "name": "Sultangazi", "neighborhoods": ["gazi", "cebeci"] },
            { "slug": "eyupsultan", "name": "Eyüpsultan", "neighborhoods": ["alibeykoy", "gokturk", "kemerburgaz"] },
            { "slug": "kagithane", "name": "Kağıthane", "neighborhoods": ["gultepe", "caglayan", "celiktepe"] },
            { "slug": "zeytinburnu", "name": "Zeytinburnu", "neighborhoods": ["cirpici", "merkezefendi"] },
            { "slug": "avcilar", "name": "Avcılar", "neighborhoods": ["cihangir", "gumuspala", "denizkoskler"] }
        ]
    },
    {
        "slug": "izmir",
        "name": "İzmir",
        "districts": [
            { "slug": "karsiyaka", "name": "Karşıyaka", "neighborhoods": ["bostanli", "mavibahce", "alsancak", "aksoy", "nergiz"] },
            { "slug": "konak", "name": "Konak", "neighborhoods": ["alsancak", "goztepe", "guzelyali", "pasaport", "basmane"] },
            { "slug": "bornova", "name": "Bornova", "neighborhoods": ["evka3", "erzene", "kazimdirik", "ozkanlar", "altindag"] },
            { "slug": "buca", "name": "Buca", "neighborhoods": ["sirinyer", "gediz", "tinaztepe", "evka1"] },
            { "slug": "bayrakli", "name": "Bayraklı", "neighborhoods": ["manavkuyu", "ozkanlar", "smyrna"] },
            { "slug": "balcova", "name": "Balçova", "neighborhoods": ["inciralti", "koruturk"] },
            { "slug": "cigli", "name": "Çiğli", "neighborhoods": ["atasehir", "balatcik", "evka2"] },
            { "slug": "gaziemir", "name": "Gaziemir", "neighborhoods": ["atiftbey", "sarnic"] },
            { "slug": "narlidere", "name": "Narlıdere", "neighborhoods": ["huzur", "ilica"] },
            { "slug": "cesme", "name": "Çeşme", "neighborhoods": ["alacati", "ilica", "dalyan"] },
            { "slug": "urla", "name": "Urla", "neighborhoods": ["iskele", "cesmealti"] }
        ]
    },
    {
        "slug": "kahramanmaras",
        "name": "Kahramanmaraş",
        "districts": [
            { "slug": "onikisubat", "name": "Onikişubat", "neighborhoods": ["haydarbey", "tekerek", "yirmiikigun"] },
            { "slug": "dulkadiroglu", "name": "Dulkadiroğlu", "neighborhoods": ["dogukent", "namikkemal"] }
        ]
    },
    {
        "slug": "karabuk",
        "name": "Karabük",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["yuzuncuyil", "besbinevler"] },
            { "slug": "safranbolu", "name": "Safranbolu", "neighborhoods": ["emek", "esentepe"] }
        ]
    },
    {
        "slug": "karaman",
        "name": "Karaman",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["mehmetakif", "pirireis"] }
        ]
    },
    {
        "slug": "kars",
        "name": "Kars",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["cumhuriyet", "ortakapi"] }
        ]
    },
    {
        "slug": "kastamonu",
        "name": "Kastamonu",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["kuzeykent", "insa"] }
        ]
    },
    {
        "slug": "kayseri",
        "name": "Kayseri",
        "districts": [
            { "slug": "melikgazi", "name": "Melikgazi", "neighborhoods": ["ildem", "talas", "kosk", "alpaslan"] },
            { "slug": "kocasinan", "name": "Kocasinan", "neighborhoods": ["yakut", "mithatpasa", "erkilet"] },
            { "slug": "talas", "name": "Talas", "neighborhoods": ["bahcelievler", "mevlana", "yenidogan"] }
        ]
    },
    {
        "slug": "kirikkale",
        "name": "Kırıkkale",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["yenimahalle", "baglarbasi"] }
        ]
    },
    {
        "slug": "kirklareli",
        "name": "Kırklareli",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["karakaş", "istasyon"] },
            { "slug": "luleburgaz", "name": "Lüleburgaz", "neighborhoods": ["zafer", "hurriyet"] }
        ]
    },
    {
        "slug": "kirsehir",
        "name": "Kırşehir",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["ahi", "nasuhdede"] }
        ]
    },
    {
        "slug": "kilis",
        "name": "Kilis",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["besevler", "ekrem"] }
        ]
    },
    {
        "slug": "kocaeli",
        "name": "Kocaeli",
        "districts": [
            { "slug": "izmit", "name": "İzmit", "neighborhoods": ["yenisehir", "yahyakaptan", "topcular", "yesilova"] },
            { "slug": "gebze", "name": "Gebze", "neighborhoods": ["arapcesme", "guzeller", "osmanyilmaz"] },
            { "slug": "darica", "name": "Darıca", "neighborhoods": ["baglarbasi", "kazimkarabekir"] },
            { "slug": "golcuk", "name": "Gölcük", "neighborhoods": ["ciftlik", "degirmendere"] },
            { "slug": "korfez", "name": "Körfez", "neighborhoods": ["yavuzselim", "guney"] },
            { "slug": "kartepe", "name": "Kartepe", "neighborhoods": ["fatih", "istasyon"] },
            { "slug": "basiskele", "name": "Başiskele", "neighborhoods": ["barbaros", "fatih"] }
        ]
    },
    {
        "slug": "konya",
        "name": "Konya",
        "districts": [
            { "slug": "selcuklu", "name": "Selçuklu", "neighborhoods": ["bosna", "yazir", "buhara", "kosova", "selahaddin"] },
            { "slug": "meram", "name": "Meram", "neighborhoods": ["havzan", "yorganci", "armagan", "koycegiz"] },
            { "slug": "karatay", "name": "Karatay", "neighborhoods": ["fetih", "akabe", "saracoglu"] }
        ]
    },
    {
        "slug": "kutahya",
        "name": "Kütahya",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["zafer", "meydan"] }
        ]
    },
    {
        "slug": "malatya",
        "name": "Malatya",
        "districts": [
            { "slug": "battalgazi", "name": "Battalgazi", "neighborhoods": ["pasakosku", "firat"] },
            { "slug": "yesilyurt", "name": "Yeşilyurt", "neighborhoods": ["bostanbasi", "yakinca", "tecde"] }
        ]
    },
    {
        "slug": "manisa",
        "name": "Manisa",
        "districts": [
            { "slug": "yunusemre", "name": "Yunusemre", "neighborhoods": ["guzelyurt", "unkapan"] },
            { "slug": "sehzadeler", "name": "Şehzadeler", "neighborhoods": ["peker", "yarhasanlar"] },
            { "slug": "turgutlu", "name": "Turgutlu", "neighborhoods": ["cumhuriyet", "ergenekon"] },
            { "slug": "akhisar", "name": "Akhisar", "neighborhoods": ["hurriyet", "resatbey"] },
            { "slug": "salihli", "name": "Salihli", "neighborhoods": ["kurtulus", "cumhuriyet"] }
        ]
    },
    {
        "slug": "mardin",
        "name": "Mardin",
        "districts": [
            { "slug": "artuklu", "name": "Artuklu", "neighborhoods": ["13mart", "yenisehir"] },
            { "slug": "kiziltepe", "name": "Kızıltepe", "neighborhoods": ["yenimahalle", "tepebasi"] },
            { "slug": "midyat", "name": "Midyat", "neighborhoods": ["bahcelievler", "ulucami"] }
        ]
    },
    {
        "slug": "mersin",
        "name": "Mersin",
        "districts": [
            { "slug": "yenisehir", "name": "Yenişehir", "neighborhoods": ["guvenevler", "ciftlikkoy", "mentes", "egriçam"] },
            { "slug": "mezitli", "name": "Mezitli", "neighborhoods": ["menderes", "akdeniz", "viransehir", "kuyuluk"] },
            { "slug": "akdeniz", "name": "Akdeniz", "neighborhoods": ["ihsaniye", "nusretiye"] },
            { "slug": "toroslar", "name": "Toroslar", "neighborhoods": ["portakal", "akbelen"] },
            { "slug": "tarsus", "name": "Tarsus", "neighborhoods": ["aksemsettin", "sehitler"] },
            { "slug": "erdemli", "name": "Erdemli", "neighborhoods": ["merkez", "kocahasanli"] },
            { "slug": "silifke", "name": "Silifke", "neighborhoods": ["goksu", "gazi"] }
        ]
    },
    {
        "slug": "mugla",
        "name": "Muğla",
        "districts": [
            { "slug": "bodrum", "name": "Bodrum", "neighborhoods": ["gumbet", "bitez", "ortakent", "yalikavak", "turgutreis"] },
            { "slug": "fethiye", "name": "Fethiye", "neighborhoods": ["tasyaka", "babatas", "karagozler"] },
            { "slug": "marmaris", "name": "Marmaris", "neighborhoods": ["siteler", "armutalan", "icmeler"] },
            { "slug": "mentese", "name": "Menteşe", "neighborhoods": ["kotekli", "muslihittin"] },
            { "slug": "milas", "name": "Milas", "neighborhoods": ["ismetpasa", "aydinlikevler"] }
        ]
    },
    {
        "slug": "mus",
        "name": "Muş",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["kultur", "saray"] }
        ]
    },
    {
        "slug": "nevsehir",
        "name": "Nevşehir",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["guzelyurt", "2000evler"] },
            { "slug": "urgup", "name": "Ürgüp", "neighborhoods": ["cumhuriyet", "fatih"] }
        ]
    },
    {
        "slug": "nigde",
        "name": "Niğde",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["asagi", "yukari"] }
        ]
    },
    {
        "slug": "ordu",
        "name": "Ordu",
        "districts": [
            { "slug": "altinordu", "name": "Altınordu", "neighborhoods": ["sahincili", "akyazi", "bucak"] },
            { "slug": "fatsa", "name": "Fatsa", "neighborhoods": ["kurtulus", "evkaf"] },
            { "slug": "unye", "name": "Ünye", "neighborhoods": ["ataturk", "fevzi"] }
        ]
    },
    {
        "slug": "osmaniye",
        "name": "Osmaniye",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["fakiusagi", "esenevler", "rahimehatun"] },
            { "slug": "kadirli", "name": "Kadirli", "neighborhoods": ["sefaret", "sehit"] }
        ]
    },
    {
        "slug": "rize",
        "name": "Rize",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["gulbahar", "muminler"] },
            { "slug": "cayeli", "name": "Çayeli", "neighborhoods": ["yenipazar"] }
        ]
    },
    {
        "slug": "sakarya",
        "name": "Sakarya",
        "districts": [
            { "slug": "adapazari", "name": "Adapazarı", "neighborhoods": ["seker", "yenigun", "korucuk", "karaman"] },
            { "slug": "serdivan", "name": "Serdivan", "neighborhoods": ["kemalpasa", "koprubasi", "bahcelievler"] },
            { "slug": "erenler", "name": "Erenler", "neighborhoods": ["dilmen", "baglar"] },
            { "slug": "hendek", "name": "Hendek", "neighborhoods": ["yenimahalle", "baspinar"] },
            { "slug": "akyazi", "name": "Akyazı", "neighborhoods": ["ozanlar", "fatih"] }
        ]
    },
    {
        "slug": "samsun",
        "name": "Samsun",
        "districts": [
            { "slug": "ilkadim", "name": "İlkadım", "neighborhoods": ["bahcelievler", "kadikoy", "kale", "derebahce"] },
            { "slug": "atakum", "name": "Atakum", "neighborhoods": ["yenimahalle", "mimarsinan", "cumhuriyet", "esenevler"] },
            { "slug": "canik", "name": "Canik", "neighborhoods": ["karsiyaka", "gaziosmanpasa"] },
            { "slug": "bafra", "name": "Bafra", "neighborhoods": ["mevlana", "altinyaprak"] },
            { "slug": "carsamba", "name": "Çarşamba", "neighborhoods": ["orta", "kirazlik"] }
        ]
    },
    {
        "slug": "siirt",
        "name": "Siirt",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["bahcelievler", "kooperatif"] }
        ]
    },
    {
        "slug": "sinop",
        "name": "Sinop",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["gelincik", "korucuk"] }
        ]
    },
    {
        "slug": "sivas",
        "name": "Sivas",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["kümbet", "egri", "dirilis"] }
        ]
    },
    {
        "slug": "sanliurfa",
        "name": "Şanlıurfa",
        "districts": [
            { "slug": "haliliye", "name": "Haliliye", "neighborhoods": ["bahcelievler", "yenisehir", "sirrin"] },
            { "slug": "eyyubiye", "name": "Eyyübiye", "neighborhoods": ["aksemsettin", "buhara"] },
            { "slug": "karakopru", "name": "Karaköprü", "neighborhoods": ["dogukent", "akkipyi", "gullubag"] },
            { "slug": "siverek", "name": "Siverek", "neighborhoods": ["yenisehir", "baglar"] },
            { "slug": "viransehir", "name": "Viranşehir", "neighborhoods": ["kislalis", "yeni"] }
        ]
    },
    {
        "slug": "sirnak",
        "name": "Şırnak",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["bahcelievler", "yeni"] },
            { "slug": "cizre", "name": "Cizre", "neighborhoods": ["nur", "cud"] }
        ]
    },
    {
        "slug": "tekirdag",
        "name": "Tekirdağ",
        "districts": [
            { "slug": "suleymanpasa", "name": "Süleymanpaşa", "neighborhoods": ["hurriyet", "100yil", "altinova"] },
            { "slug": "corlu", "name": "Çorlu", "neighborhoods": ["emlak", "seyhsinan", "resadiye", "omurtak"] },
            { "slug": "cerkezkoy", "name": "Çerkezköy", "neighborhoods": ["gazi", "baglik"] },
            { "slug": "kapakli", "name": "Kapaklı", "neighborhoods": ["gumhuriyet", "inonu"] }
        ]
    },
    {
        "slug": "tokat",
        "name": "Tokat",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["karsiyaka", "yesilirmak"] },
            { "slug": "erbaa", "name": "Erbaa", "neighborhoods": ["gazi", "cumhuriyet"] },
            { "slug": "turhal", "name": "Turhal", "neighborhoods": ["celal", "hacilar"] },
            { "slug": "niksar", "name": "Niksar", "neighborhoods": ["fatih", "baglar"] }
        ]
    },
    {
        "slug": "trabzon",
        "name": "Trabzon",
        "districts": [
            { "slug": "ortahisar", "name": "Ortahisar", "neighborhoods": ["besirli", "kalkinma", "konaklar", "yenicuma"] },
            { "slug": "akcaabat", "name": "Akçaabat", "neighborhoods": ["sogutlu", "yildizli", "yaylacik"] },
            { "slug": "yomra", "name": "Yomra", "neighborhoods": ["kasustu", "sancak"] },
            { "slug": "arsin", "name": "Arsin", "neighborhoods": ["yali", "cumhuriyet"] }
        ]
    },
    {
        "slug": "tunceli",
        "name": "Tunceli",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["ataturk", "moğultay"] }
        ]
    },
    {
        "slug": "usak",
        "name": "Uşak",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["cumhuriyet", "kemaloz", "durak"] }
        ]
    },
    {
        "slug": "van",
        "name": "Van",
        "districts": [
            { "slug": "ipekyolu", "name": "İpekyolu", "neighborhoods": ["cumhuriyet", "ali Pasa", "hafiziye"] },
            { "slug": "tusba", "name": "Tuşba", "neighborhoods": ["iskele", "beyuzumu"] },
            { "slug": "edremit", "name": "Edremit", "neighborhoods": ["erenkent", "esentepe"] },
            { "slug": "ercis", "name": "Erciş", "neighborhoods": ["kislalis", "vanyolu"] }
        ]
    },
    {
        "slug": "yalova",
        "name": "Yalova",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["bahcelievler", "gaziosmanpasa", "adnanmenderes"] },
            { "slug": "ciftlikkoy", "name": "Çiftlikköy", "neighborhoods": ["sahil", "mehmetakif"] }
        ]
    },
    {
        "slug": "yozgat",
        "name": "Yozgat",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["bilal", "seymos"] },
            { "slug": "sorgun", "name": "Sorgun", "neighborhoods": ["bahcelievler", "aydinli"] }
        ]
    },
    {
        "slug": "zonguldak",
        "name": "Zonguldak",
        "districts": [
            { "slug": "merkez", "name": "Merkez", "neighborhoods": ["mesrutiyet", "tepebasi", "bahcelievler"] },
            { "slug": "eregli", "name": "Ereğli", "neighborhoods": ["baglik", "murtaza"] },
            { "slug": "caycuma", "name": "Çaycuma", "neighborhoods": ["yenicami", "istasyon"] }
        ]
    }
];
