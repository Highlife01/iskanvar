// Turkish cities and districts for programmatic SEO
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

export const cities: City[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    districts: [
      { slug: "kadikoy", name: "Kadıköy", neighborhoods: ["moda", "fenerbahce", "caferaga", "rasimpasa"] },
      { slug: "besiktas", name: "Beşiktaş", neighborhoods: ["levent", "etiler", "bebek", "ortakoy"] },
      { slug: "sisli", name: "Şişli", neighborhoods: ["nisantasi", "osmanbey", "mecidiyekoy"] },
      { slug: "uskudar", name: "Üsküdar", neighborhoods: ["cengelkoy", "kuzguncuk", "beylerbeyi"] },
      { slug: "bakirkoy", name: "Bakırköy", neighborhoods: ["atakoy", "yesilkoy", "florya"] },
      { slug: "fatih", name: "Fatih", neighborhoods: ["sultanahmet", "eminonu", "aksaray"] },
      { slug: "beyoglu", name: "Beyoğlu", neighborhoods: ["taksim", "cihangir", "galata"] },
      { slug: "sariyer", name: "Sarıyer", neighborhoods: ["istinye", "tarabya", "emirgan"] },
      { slug: "maltepe", name: "Maltepe", neighborhoods: ["altintepe", "cevizli", "idealtepe"] },
      { slug: "atasehir", name: "Ataşehir", neighborhoods: ["barbaros", "icerenkoy", "yenisahra"] },
    ]
  },
  {
    slug: "ankara",
    name: "Ankara",
    districts: [
      { slug: "cankaya", name: "Çankaya", neighborhoods: ["kizilay", "kavaklidere", "gaziosmanpasa"] },
      { slug: "kecioren", name: "Keçiören", neighborhoods: ["etlik", "kuserasi", "subayevleri"] },
      { slug: "mamak", name: "Mamak", neighborhoods: ["natoyolu", "saimekadin", "misket"] },
      { slug: "yenimahalle", name: "Yenimahalle", neighborhoods: ["batikent", "demetevler", "ostim"] },
      { slug: "etimesgut", name: "Etimesgut", neighborhoods: ["eryaman", "elvankent", "topcu"] },
    ]
  },
  {
    slug: "izmir",
    name: "İzmir",
    districts: [
      { slug: "karsiyaka", name: "Karşıyaka", neighborhoods: ["bostanli", "mavibahce", "alsancak"] },
      { slug: "konak", name: "Konak", neighborhoods: ["alsancak", "goztepe", "guzelyali"] },
      { slug: "bornova", name: "Bornova", neighborhoods: ["evka3", "erzene", "kazimdirik"] },
      { slug: "buca", name: "Buca", neighborhoods: ["sirinyer", "gediz", "tinaztepe"] },
      { slug: "bayrakli", name: "Bayraklı", neighborhoods: ["manavkuyu", "bayrakli", "smyrna"] },
    ]
  },
  {
    slug: "antalya",
    name: "Antalya",
    districts: [
      { slug: "muratpasa", name: "Muratpaşa", neighborhoods: ["lara", "konyaalti", "meltem"] },
      { slug: "kepez", name: "Kepez", neighborhoods: ["kepez", "varsak", "santral"] },
      { slug: "konyaalti", name: "Konyaaltı", neighborhoods: ["hurma", "liman", "sarisu"] },
      { slug: "alanya", name: "Alanya", neighborhoods: ["kestel", "mahmutlar", "oba"] },
      { slug: "kas", name: "Kaş", neighborhoods: ["kalkan", "kas", "cukurbag"] },
    ]
  },
  {
    slug: "bursa",
    name: "Bursa",
    districts: [
      { slug: "nilufer", name: "Nilüfer", neighborhoods: ["gorukle", "ozluce", "besevler"] },
      { slug: "osmangazi", name: "Osmangazi", neighborhoods: ["cekirge", "altiparmak", "emek"] },
      { slug: "yildirim", name: "Yıldırım", neighborhoods: ["erikli", "millet", "yavuzselim"] },
    ]
  },
  {
    slug: "adana",
    name: "Adana",
    districts: [
      { slug: "seyhan", name: "Seyhan", neighborhoods: ["gurselpasa", "resat", "cemalpasska"] },
      { slug: "cukurova", name: "Çukurova", neighborhoods: ["toros", "mahfesigmaz", "beyazevler"] },
      { slug: "yuregir", name: "Yüreğir", neighborhoods: ["serinevler", "karslitasya", "kocavezir"] },
    ]
  },
  {
    slug: "gaziantep",
    name: "Gaziantep",
    districts: [
      { slug: "sahinbey", name: "Şahinbey", neighborhoods: ["kolejtepe", "binevler", "incili"] },
      { slug: "sehitkamil", name: "Şehitkamil", neighborhoods: ["karatas", "maarif", "guvenevler"] },
    ]
  },
  {
    slug: "konya",
    name: "Konya",
    districts: [
      { slug: "selcuklu", name: "Selçuklu", neighborhoods: ["bosna", "yazir", "sille"] },
      { slug: "meram", name: "Meram", neighborhoods: ["havzan", "ladikli", "harmancik"] },
      { slug: "karatay", name: "Karatay", neighborhoods: ["fevzicakmak", "saraykent", "beysehir"] },
    ]
  },
  {
    slug: "kocaeli",
    name: "Kocaeli",
    districts: [
      { slug: "izmit", name: "İzmit", neighborhoods: ["yenisehir", "kozlu", "yahyakaptan"] },
      { slug: "gebze", name: "Gebze", neighborhoods: ["mustafapasa", "sultanorhan", "guzeltepe"] },
      { slug: "darica", name: "Darıca", neighborhoods: ["osmangazi", "piri", "bayramoglu"] },
    ]
  },
  {
    slug: "mersin",
    name: "Mersin",
    districts: [
      { slug: "yenisehir", name: "Yenişehir", neighborhoods: ["bahcelievler", "camlibel", "fuat"] },
      { slug: "mezitli", name: "Mezitli", neighborhoods: ["viransehir", "davultepe", "kuyuluk"] },
      { slug: "toroslar", name: "Toroslar", neighborhoods: ["arpacisakarlar", "alsancak", "camili"] },
    ]
  },
];
