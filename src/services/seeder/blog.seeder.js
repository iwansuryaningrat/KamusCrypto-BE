import db from "../../models/index.js";
const News = db.news;

const date1 = new Date("2023-01-15").getTime();
const date2 = new Date("2023-01-13").getTime();
const date3 = new Date("2022-09-13").getTime();
const date4 = new Date("2022-12-28").getTime();
const date5 = new Date("2023-01-11").getTime();
const date6 = new Date("2022-01-10").getTime();

const news = [
  {
    title:
      "Salah satu kampus terbesar di Amerika Serikat telah mulai mengajarkan siswa tentang Bitcoin",
    author: "Brayden Lindrea",
    category: "Cryptocurrency",
    tags: ["Bitcoin", "Cryptocurrency", "Education"],
    date: date1,
    thumbnail: {
      imageAlt: "brayden-lindrea",
      imageName: "BRAYDEN LINDREA",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/BRAYDEN-LINDREA.png",
    },
    body: [
      {
        paragraph:
          'Profesor mengatakan bahwa kursus "Programming Bitcoin" akan mengikuti kursus Bitcoin pertama, di mana siswa akan belajar bagaimana "membuat perpustakaan Bitcoin dari awal." Adopsi ruang kelas dari kursus Bitcoin dan cryptocurrency terus meningkat, dengan Texas A&M sekarang menjadi perguruan tinggi di AS yang menawarkan kursus Bitcoin ke sebagian dari 74.000+ siswanya.',
      },
      {
        paragraph:
          'Berita ini diumumkan pada 13 Januari oleh Profesor Asosiasi Korok Ray dari Mays Business School di Texas A&M, yang akan mengajar kursus "Bitcoin Protocol" kepada siswa di College of Engineering dan Mays Business School saat Semester Musim Semi dimulai pada 17 Januari. Ray menyatakan dalam thread Twitter 4 bagian bahwa "Programming Bitcoin" akan mengikuti Bitcoin Protocol, di mana siswa akan belajar untuk "membuat perpustakaan Bitcoin dari awal."',
      },
      {
        paragraph:
          'Profesor menambahkan bahwa tidak mudah untuk mendapatkan persetujuan dari badan komite kurikulum yang relevan di sekolah, yang datang setelah "bulan-bulan" kerja keras. Kekurangan pendidikan crypto berkualitas tinggi telah disebut sebagai hambatan utama dalam mengambil adopsi ke tingkat berikutnya, menurut peneliti crypto Josh Cowell, yang menyarankan bahwa itu dapat meningkatkan literasi keuangan jika dilakukan dengan benar.',
      },
      {
        paragraph:
          'Cointelegraph menghubungi Ray untuk menanyakan berapa banyak siswa yang mendaftar ke kelas tetapi tidak menerima respons yang segera. Implikasi hukum dan regulasi dari teknologi blockchain dan cryptocurrency sekarang juga diajarkan di perguruan tinggi AS. Professor Adjunct Thomas Hook dari University of Boston Law School baru-baru ini mengatakan kepada Cointelegraph bahwa sekolah hukum sekarang menawarkan kursus "Crypto Regulation" bagi siswa yang tertarik untuk belajar bagaimana advokat crypto-versed dan perusahaan crypto dapat terbaik menavigasi melalui ketidakpastian regulasi saat mereka mencari pasar produk dan layanan mereka.',
      },
      {
        paragraph:
          "Universitas lain yang sekarang menawarkan kursus cryptocurrency termasuk Harvard University, Massachusetts Institute of Technology, Oxford University, National University of Singapore, Cornell University dan University of California Berkeley.",
      },
    ],
    source: "CoinTelegraph",
    status: "Published",
  },
  {
    title: "Pemanfaatan Kegunaan teknologi blockchain dalam berbagai Industri",
    author: "Ana Paula Pereira",
    category: "Blockchain",
    tags: ["Blockchain", "Technology"],
    date: date2,
    thumbnail: {
      imageAlt: "ana-paula-pereira",
      imageName: "ANA PAULA PEREIRA",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/ANA-PAULA-PEREIRA.png",
    },
    body: [
      {
        paragraph:
          "Blockchain adalah teknologi yang terdesentralisasi, transparan, dan meningkatkan kapasitas jaringan secara keseluruhan sambil memberikan kontrol penuh atas data kepada pengguna. Penggunaan blockchain telah menyebar jauh di luar mata uang kripto dalam beberapa tahun terakhir, dengan berbagai industri yang menerima teknologi ini dalam berbagai bidang, termasuk kesehatan, logistik, dan jasa keuangan.",
      },
      {
        paragraph:
          "Ada banyak faktor di balik hype blockchain. Blockchain terdesentralisasi, transparan, dan meningkatkan kapasitas jaringan, membuka jendela untuk solusi yang memerlukan daya komputasi yang signifikan. Lebih penting lagi, mereka memberikan kemampuan kepada pengguna untuk mengontrol aset mereka, termasuk data mereka, tanpa tergantung pada pihak ketiga.",
      },
      {
        paragraph:
          "Kesehatan di blockchain: Rekam medis telah lama dianggap sebagai domain dari klinisi atau lembaga kesehatan di seluruh dunia. Pada tahun 2020, sebuah basis data yang mencakup informasi sensitif seperti ID pemerintah dan nomor ID pajak dari lebih dari 115.000 orang yang mendaftar untuk izin circulasi COVID-19 terpapar di Argentina. Melalui ekstensi atau aplikasi mobile berbasis blockchain, pengguna dapat mengakses dashboard rekam medis dan melakukan semua operasi yang diperlukan kapan saja. Ini juga memungkinkan pasien untuk melacak lampiran email dan mencabut akses, tanpa peduli apakah penerima sudah membuka email tersebut.",
      },
      {
        paragraph:
          "Kepemilikan data: Data telah menjadi sumber daya yang berharga sejak debut internet. Secara historis, pengguna telah menyerahkan informasi pribadi mereka ke situs web dan layanan secara gratis dan tidak mendapatkan keuntungan finansial saat perusahaan tersebut menjual informasi pribadi mereka kepada pihak ketiga. Namun, dengan Web3, pengguna dapat kembali mengontrol data mereka sendiri dan menentukan apakah ingin memonetisasi data untuk keuntungan mereka sendiri.",
      },
      {
        paragraph:
          "Luxuris berpindah ke blockchain: Aura Blockchain Consortium didirikan untuk memungkinkan pelanggan merek mewah untuk memverifikasi keaslian produk. Melalui kerja sama dengan Aura, misalnya, Prada memungkinkan klien untuk melacak perhiasan emas dan berlian yang didaur ulang, memastikan keaslian dan transparansi pada setiap tahap pembuatan. Dengan menggunakan teknologi blockchain, pelanggan dapat memverifikasi asal-usul produk dan memastikan bahwa produk tersebut asli dan tidak dipalsukan. Hal ini sangat penting dalam industri mewah karena produk-produk palsu dapat merugikan merek dan mengurangi kepercayaan konsumen. Selain itu, teknologi blockchain juga dapat digunakan untuk melacak produk dari sumber hingga tujuan, membuat proses logistik lebih transparan dan efisien.",
      },
    ],
    source: "CoinTelegraph",
    status: "Published",
  },
  {
    title:
      'Mean Girls siap untuk kembali di Web3 sebagai "crypto-collectibles"',
    author: "Judith Bannermanquist",
    category: "Web3",
    tags: ["Web3", "Technology"],
    date: date3,
    thumbnail: {
      imageAlt: "judith-bannermanquist",
      imageName: "Judith Bannermanquist",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Judith-Bannermanquist.png",
    },
    body: [
      {
        paragraph:
          'Film komedi remaja Amerika Mean Girls (2004) mungkin segera kembali dengan Web3, dengan pengajuan merek dagang terbaru oleh Paramount Pictures yang mengungkapkan rencana untuk memperluas merek tersebut ke dalam "koleksi kripto." Menurut tweet yang dibagikan oleh pengacara merek dagang berlisensi Mike Kondoudis, Paramount Pictures mengajukan dua permohonan merek dagang pada 7 September untuk film komedi remaja tahun 2000-an yang dibintangi oleh mantan aktris Disney Lindsay Lohan. Aplikasi merek dagang tersebut mencakup "file multimedia yang dapat diunduh yang berisi karya seni" yang diautentikasi oleh token tidak fungible (NFTs), serta "barang virtual yang dapat diunduh" termasuk koleksi kripto dan NFTs.',
      },
      {
        paragraph:
          "Mean Girls adalah film komedi remaja tahun 2004 yang kemudian mengembangkan pengikut yang signifikan, menghasilkan banyak meme dan reaksi GIF yang dibuat oleh penggemar. Ini dianggap sebagai salah satu film yang paling banyak dikutip sepanjang masa dan bahkan menyebabkan Hari Mean Girls Nasional setiap tahun pada 3 Oktober. Aplikasi ini mengikuti hanya satu hari setelah konglomerat media massa Viacom International mengajukan permohonan merek dagang yang serupa yang bertujuan untuk memperluas merek Teenage Mutant Ninja Turtles ke dunia virtual. Jumlah perusahaan yang mengajukan merek dagang untuk koleksi kripto, token tidak fungible (NFTs), dan Metaverse terus bertambah.",
      },
      {
        paragraph:
          "Baru-baru ini, Cointelegraph melaporkan bahwa jumlah merek dagang yang diajukan dalam ruang Web3 diharapkan melebihi yang diajukan pada tahun 2021, karena diharapkan lebih banyak perusahaan akan ikut dalam perburuan untuk mengamankan bagian dari pie web3. Merek dagang terbaru dalam ruang NFT dan Metaverse bervariasi dari merek desainer mewah, seperti Hérmes hingga Sony Music Entertainment, sampai merek mobil balap Formula One.",
      },
      {
        paragraph:
          "Data yang dipublikasikan oleh Dune Analytics menunjukkan bahwa merek-merek terkenal seperti Nike, Gucci, Dolce & Gabbana, Adidas, dan Tiffany & Co. sudah mengumpulkan sekitar $260 juta dari penjualan NFT, sehingga menjadikan adopsi NFT sebagai tambahan yang sangat menguntungkan dan menguntungkan bagi merek yang ingin memperluas ke Web3. Keberhasilan merek-merek terkenal dalam mengadopsi NFT menunjukkan bahwa ini adalah peluang yang menjanjikan bagi perusahaan lain untuk ikut serta dalam pasar ini. Film Mean Girls yang memiliki pengikut yang cukup besar, mengambil kesempatan untuk memperluas merek tersebut ke dalam koleksi kripto dan NFTs akan menjadi langkah yang cerdas bagi Paramount Pictures. Namun, sampai saat ini belum ada konfirmasi resmi dari pihak Paramount Pictures mengenai rencana tersebut.",
      },
    ],
    source: "CoinTelegraph",
    status: "Published",
  },
  {
    title:
      "Anatoly Yakovenko dari Solana berbagi pemikiran tentang proyek NFT terbesar dari ekosistem yang pergi ke Ethereum dan Polygon",
    author: "Conor Devitt",
    category: "NFTs",
    tags: ["NFTs", "Technology"],
    date: date4,
    thumbnail: {
      imageAlt: "conor-devitt",
      imageName: "Conor Devitt",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
    body: [
      {
        paragraph:
          "Solana (SOL) co-creator Anatoly Yakovenko has chimed in on the expansion of some of the blockchain’s biggest projects to other chains.",
      },
      {
        paragraph:
          "In November, Solana’s largest marketplace for non-fungible tokens (NFTs), Magic Eden, announced it was expanding to its third chain, Polygon (MATIC). Magic Eden also operates on Ethereum (ETH). Later that month, Solana crypto wallet Phantom added support for Ethereum and Polygon. And this Sunday at nearly the same time, Solana-based NFT projects y00ts and DeGods III announced on Twitter that they are bridging to Ethereum and Polygon next year.",
      },
      {
        paragraph:
          "Says Yakovenko of the migrations, “Solana unicorns like Magic Eden, Phantom, [and] DeGods are going multichain. It’s bittersweet to watch. It would be awesome for them to 100% focus on Solana. But [the] reality is that these projects want to conquer the world. But so does the Solana community!",
      },
      {
        paragraph:
          "The goal is to onboard everyone in the world to self-custody, and the path there is hard. These unicorns figured out product-market fit in an insanely competitive market. They were built on Solana because Solana is where the best products can be built. There will be users of other chains that for the first time try Solana because of ME, Phantom and DeGods, and they will be blown away by the experience and they will tell all their friends. What Solana needs is twenty more unicorns that are so ambitious that Solana can’t contain them.”",
      },
      {
        paragraph:
          "SOL has been ravaged by the ongoing crypto bear market and is down more than 71% in the past six months. The 18th-ranked crypto asset by market cap is trading at $10.91 at time of writing.",
      },
      {
        paragraph:
          "Co-creator Solana (SOL), Anatoly Yakovenko, mengomentari tentang ekspansi beberapa proyek blockchain terbesar ke rantai lain. Pada bulan November, pasar terbesar Solana untuk token non-fungible (NFT), Magic Eden, mengumumkan bahwa mereka akan mengekspansi ke rantai ketiga mereka, Polygon (MATIC).",
      },
      {
        paragraph:
          'Magic Eden juga beroperasi di Ethereum (ETH). Kemudian pada bulan yang sama, dompet crypto Solana, Phantom, menambahkan dukungan untuk Ethereum dan Polygon. Dan pada Minggu ini, proyek NFT berbasis Solana, y00ts dan DeGods III, mengumumkan di Twitter bahwa mereka akan menyambung ke Ethereum dan Polygon tahun depan. Yakovenko mengatakan tentang migrasi ini, "Unicorn Solana seperti Magic Eden, Phantom, [dan] DeGods sedang berkembang ke multichain. Sedih untuk melihatnya. Sangat bagus jika mereka 100% fokus pada Solana. Namun, kenyataannya adalah proyek-proyek ini ingin menaklukkan dunia. Namun demikian, komunitas Solana juga ingin menaklukkan dunia! Tujuan kami adalah untuk mengaktifkan semua orang di dunia untuk self-custody, dan jalannya sulit. Unicorn ini menemukan produk-pasar yaing sesuai di pasar yang sangat kompetitif. Mereka dibangun di Solana karena Solana adalah tempat di mana produk terbaik dapat dibangun.',
      },
      {
        paragraph:
          'Akan ada pengguna rantai lain yang pertama kali mencoba Solana karena ME, Phantom, dan DeGods, dan mereka akan terpikat oleh pengalaman tersebut dan akan memberitahu semua teman mereka. Yang dibutuhkan Solana adalah dua puluh unicorn lain yang sangat ambisius sehingga Solana tidak dapat mengendalikannya." SOL telah dirusak oleh pasar crypto yang berlangsung dan turun lebih dari 71% dalam enam bulan terakhir. Aset crypto peringkat 18 berdasarkan market cap saat ini diperdagangkan pada $10,91 saat ditulis.',
      },
    ],
    source: "Dailyhodl",
    status: "Published",
  },
  {
    title:
      "Aktivitas Cardano DeFi Melonjak 36% Saat ADA Membuka 2023 dengan Reli Besar",
    author: "Conor Devitt",
    category: "DeFI",
    tags: ["DeFI", "Technology"],
    date: date5,
    thumbnail: {
      imageAlt: "conor-devitt2",
      imageName: "Conor Devitt2",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt2.png",
    },
    body: [
      {
        paragraph:
          "Aktivitas keuangan terdesentralisasi (DeFi) melonjak di Cardano (ADA) saat pesaing Ethereum (ETH) memulai awal yang sangat panas pada tahun 2023. Pelacak DeFi Llama melaporkan bahwa Cardano memiliki $65,97 juta dalam total nilai terkunci (TVL) saat ditulis, sekitar 36% meningkat dari 1 Januari ketika TVL Cardano terdaftar di $48,5 juta. TVL dari blockchain mewakili total modal yang ditahan dalam kontrak cerdasnya. TVL dihitung dengan mengalikan jumlah jaminan yang terkunci ke dalam jaringan dengan nilai saat ini dari aset.",
      },
      {
        paragraph:
          "Aplikasi terdesentralisasi (DApp) teratas Cardano adalah Minswap, sebuah bursa terdesentralisasi multi-pool (DEX). Dengan $27,26 juta dalam total nilai terkunci, Minswap mewakili lebih dari 41% dari TVL di blockchain Cardano. DApp kedua yang paling penting di Cardano adalah Indigo, platform perdagangan sintetis terdesentralisasi yang memiliki $11,35 juta dalam TVL. Ketiga, adalah WingRiders, sebuah DEX automated market maker (AMM) dengan $10,87 juta dalam TVL. Kedua Indigo dan WingRiders telah melihat kenaikan TVL sekitar 25% dalam satu bulan terakhir.",
      },
      {
        paragraph:
          "Lonjakan TVL Cardano mirip dengan kenaikan harganya: ADA diperdagangkan sekitar $0,322 saat ditulis dan naik lebih dari 31% sejak 31 Desember. Aset kripto ke-8 berdasarkan kapitalisasi pasar masih tetap hampir 90% turun dari puncak tertingginya $3,09, yang dicapai pada September 2021.",
      },
    ],
    source: "Dailyhodl",
    status: "Published",
  },
  {
    title:
      "Microsoft Akan Memiliki 49% Saham OpenAI Setelah Kesepakatan $10 Miliar",
    author: "Falkris",
    category: "Technology",
    tags: ["Technology", "Microsoft"],
    date: date6,
    thumbnail: {
      imageAlt: "openai-msft-twitter",
      imageName: "Open AI MSFT Twitter",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/openai-msft-twitter.jpeg",
    },
    body: [
      {
        paragraph:
          "Laporan muncul bahwa Microsoft Corp sedang dalam negosiasi lanjutan untuk melakukan investasi besar-besaran di OpenAI, perusahaan di balik chatbot revolusioner ChatGPT. Para insider mengungkapkan bahwa kesepakatan ini dapat melihat Microsoft menyuntikkan sebesar $10 miliar, yang akan memberikan nilai OpenAI sebesar $29 miliar. Ini berarti bahwa OpenAI Inc yang non-profit bisa saja memiliki hanya 2% sementara 49% akan tetap untuk investor lain saat Microsoft memakan bagian terbesar. Investasi potensial ini memiliki implikasi jangka panjang untuk masa depan OpenAI dan sektor AI secara luas. Keputusan untuk membuat Microsoft pemegang saham mayoritas dapat berpotensi mengubah tujuan awal OpenAI untuk terbuka dan mudah diakses oleh masyarakat, sesuai dengan namanya. Hal ini juga dapat menimbulkan pertanyaan tentang arah dan prioritas masa depan organisasi dan produk-produknya. Investasi yang diusulkan akan dibagikan dalam jangka waktu yang lama, namun, detail kesepakatan mungkin masih dapat diubah sebelum perjanjian akhir terjadi. Menurut sumber-sumber, kedua perusahaan telah berdiskusi tentang kesepakatan ini selama beberapa bulan.",
      },
      {
        paragraph:
          "Investasi potensial Microsoft di OpenAI adalah langkah terbaru dalam upaya strategis perusahaan ke ruang AI. Dalam beberapa tahun terakhir, Microsoft telah melakukan beberapa akuisisi dan investasi untuk memperluas kemampuannya dan tetap di depan inovasi AI. Investasi sebesar $1 miliar di OpenAI pada tahun 2019, yang juga membuat Microsoft Azure platform awan eksklusif untuk menyediakan layanan OpenAI, bukanlah kali pertamanya dalam industri ini. Tiga tahun sebelumnya, Microsoft mencoba untuk mendapatkan perusahaan pengenalan suara AI, Nuance, yang sepenuhnya diakuisisi sebesar $19,7 miliar (akuisisi kedua terbesar) pada Maret 2022. Raksasa teknologi ini juga mengakuisisi Softomotive - penyedia terkemuka perangkat lunak Robotic Process Automation (RPA) pada tahun 2020.",
      },
      {
        paragraph:
          "Selain itu, Microsoft juga sedang bekerja pada inisiatif R&D-nya, termasuk Seeing AI, Counterfeit, MusicBERT, dan AI teks-ke-suara (TTS) berbasis jaringan saraf. Jika kesepakatan dengan OpenAI terwujud, ini akan memberikan Microsoft kepemilikan yang signifikan pada unicorn AI lainnya, yang telah menyebar berita besar dengan chatbot ChatGPT-nya dan alat pembuatan gambar Dall-E. ChatGPT khususnya telah menghasilkan buzz terbesar pada tahun 2022 karena kemampuannya untuk meniru percakapan manusia dengan akurasi yang luar biasa dan bahkan menjawab pertanyaan lanjutan.",
      },
    ],
    source: "Dailyhodl",
    status: "Published",
  },
];

const seedNews = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(news);
    return true;
  } catch (error) {
    return false;
  }
};

export default seedNews;
