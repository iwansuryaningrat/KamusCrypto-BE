import db from "../../models/index.js";
const Liveclass = db.liveclass;

const data = [
  {
    title: "Sejarah Uang, Pengenalan Blockchain, dan Pengenalan Cryptocurrency",
    number: 1,
    liveclassCode: "LC-01-Silver",
    description:
      "Uang telah digunakan selama ribuan tahun sebagai alat pembayaran dan pertukaran nilai. Blockchain adalah teknologi yang memungkinkan pengiriman data digital secara aman dan transparan tanpa pihak ketiga, dan cryptocurrency adalah bentuk uang digital yang menggunakan teknologi kriptografi untuk keamanan dan verifikasi transaksi. Bitcoin adalah cryptocurrency pertama yang dikenal dan nilainya ditentukan oleh pasar. Meskipun belum diakui secara luas, cryptocurrency semakin populer dan semakin banyak digunakan.",
    memberType: "Silver",
    type: "Free",
    category: "-",
    tags: ["Uang", "Blockchain", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title:
      "Bagaimana cara kerja Cryptocurrency, Apa itu Bitcoin, dan Perbedaan Emas, Uang Fiat, dan Bitcoin?",
    number: 2,
    liveclassCode: "LC-02-Silver",
    description:
      "Cryptocurrency menggunakan teknologi blockchain dan kriptografi untuk membuat transaksi yang aman dan terdesentralisasi. Bitcoin adalah cryptocurrency pertama dan paling populer. Perbedaan antara emas, uang fiat, dan bitcoin adalah emas memiliki nilai intrinsik, uang fiat diatur oleh pemerintah, sedangkan bitcoin nilai dan keamanannya ditentukan oleh pasar dan teknologi blockchain dan kriptografi.",
    memberType: "Silver",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Uang", "Blockchain", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title:
      "Apa itu Altcoins Pengenalan Layer 1 & 2 dan Cryptocurrency Apa yang Harus Anda Beli",
    number: 3,
    liveclassCode: "LC-03-Silver",
    description:
      "Altcoins adalah cryptocurrency selain Bitcoin. Layer 1 adalah blockchain utama, sedangkan Layer 2 adalah pengembangan untuk meningkatkan kecepatan transaksi. Saat memilih cryptocurrency, pertimbangkan kapitalisasi pasar, adopsi, dan potensi nilai kenaikan jangka panjang.",
    memberType: "Silver",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Altcoins", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title:
      "Cara membeli Cryptocurrency dan Platform Perdagangan: Decentralized Exchange (DEX) vs Centralized Exchange (CEX)",
    number: 4,
    liveclassCode: "LC-04-Silver",
    description:
      "Untuk membeli cryptocurrency, daftar di platform perdagangan seperti Binance, Kucoin, Tokocrypto, atau Pintu dan beli cryptocurrency yang diinginkan. Ada dua jenis platform perdagangan: Decentralized Exchange (DEX) dan Centralized Exchange (CEX). DEX tidak memiliki server pusat dan transaksi dilakukan peer-to-peer, sedangkan CEX lebih mudah digunakan namun lebih rentan terhadap risiko keamanan. Pilih platform yang sesuai dengan kebutuhan dan kenyamanan Anda.",
    memberType: "Silver",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Decentralized Exchange", "Centralized Exchange", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title:
      "Apa yang menentukan harga Cryptocurrency dan Dimana tempat Penyimpanan Cryptocurrency (Hot & Cold Wallet)",
    number: 5,
    liveclassCode: "LC-05-Silver",
    description:
      "Harga cryptocurrency ditentukan oleh pasokan, permintaan, adopsi pasar, dan faktor berita dan kebijakan. Untuk menyimpan cryptocurrency, ada hot wallet (dompet online untuk transaksi harian) dan cold wallet (dompet offline untuk penyimpanan jangka panjang dan keamanan). Pilih jenis dompet yang sesuai dengan kebutuhan dan risiko Anda.",
    memberType: "Silver",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Hot Wallet", "Cold Wallet", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Money Management & Investing Risk",
    number: 1,
    liveclassCode: "LC-01-Gold",
    description:
      "Money management adalah cara mengatur keuangan dengan tujuan memaksimalkan keuntungan dan meminimalkan risiko. Berinvestasi di cryptocurrency memiliki risiko sendiri, sehingga manajemen risiko yang baik sangat penting. Ini dapat dilakukan dengan cara diversifikasi portofolio, menetapkan tujuan investasi, dan memantau investasi secara teratur.",
    memberType: "Gold",
    type: "Free",
    category: "Money management",
    tags: ["Uang", "Blockchain", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Fundamental dan Potensi Cryptocurrency",
    number: 2,
    liveclassCode: "LC-02-Gold",
    description:
      "Fundamental cryptocurrency merujuk pada faktor yang mempengaruhi nilai dan keandalan mata uang digital seperti teknologi blockchain, adopsi pasar, dan regulasi pemerintah. Potensi cryptocurrency terletak pada teknologi blockchain yang menawarkan transaksi yang cepat, aman, dan hemat biaya. Namun, investasi di cryptocurrency tetap memiliki risiko dan potensi keuntungan yang perlu dipahami dengan baik sebelum melakukan investasi.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Uang", "Blockchain", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Membaca Trend Market dan Mengenal FED Rate Moves",
    number: 3,
    liveclassCode: "LC-03-Gold",
    description:
      "Membaca trend pasar cryptocurrency melibatkan analisis teknis dan fundamental untuk memprediksi arah pergerakan harga. FED Rate Moves adalah kebijakan suku bunga bank sentral Amerika Serikat yang dapat mempengaruhi nilai tukar cryptocurrency. Pemahaman yang baik tentang tren pasar dan FED Rate Moves penting untuk membuat keputusan investasi yang cerdas di cryptocurrency.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Market", "Trend", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Cara Mengirimkan Asset Digital/Cryptocurrency Antar Network",
    number: 4,
    liveclassCode: "LC-04-Gold",
    description:
      "Untuk mengirim cryptocurrency antar jaringan, perlu pastikan aset didukung oleh jaringan tujuan, buat alamat dompet di jaringan tujuan, kirim aset dari dompet jaringan asal ke alamat dompet jaringan tujuan dengan alamat publik, dan bayar biaya transaksi jika diperlukan.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Assets", "Network", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Apa itu DeFi (Decentralized Finance)",
    number: 5,
    liveclassCode: "LC-05-Gold",
    description:
      "DeFi (Decentralized Finance) adalah sistem keuangan terdesentralisasi yang memungkinkan pengguna untuk melakukan transaksi dan layanan keuangan tanpa melalui perantara seperti bank atau lembaga keuangan tradisional, dengan menggunakan teknologi blockchain dan smart contract.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["DeFi", "Decentralized", "Finance"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Pengenalan Lending & Leverage",
    number: 6,
    liveclassCode: "LC-06-Gold",
    description:
      "Lending dan leverage dalam cryptocurrency merujuk pada praktik meminjamkan aset digital kepada orang lain atau menggunakan modal pinjaman untuk memperbesar potensi keuntungan atau kerugian dalam trading cryptocurrency. Lending dapat memberikan penghasilan pasif bagi pemilik aset, sementara leverage dapat meningkatkan risiko dan potensi keuntungan dalam trading.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Lending", "Leverage", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Large & Small Marketcaps",
    number: 7,
    liveclassCode: "LC-07-Gold",
    description:
      "Marketcap di cryptocurrency mengacu pada nilai total pasar dari suatu aset digital, yang dihitung dengan mengalikan jumlah total koin yang beredar dengan harga pasar saat ini. Large marketcaps mengindikasikan aset yang lebih stabil dengan tingkat adopsi yang lebih luas, sedangkan small marketcaps memiliki potensi keuntungan yang lebih besar namun juga risiko yang lebih tinggi. Pemilihan marketcap yang tepat dapat menjadi faktor penting dalam strategi investasi di cryptocurrency.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Marketcap", "Large", "Small"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Apa itu ICO dan Apa itu Tokenomics",
    number: 8,
    liveclassCode: "LC-08-Gold",
    description:
      "ICO atau Initial Coin Offering merujuk pada proses penggalangan dana oleh perusahaan atau proyek baru dalam bentuk cryptocurrency yang baru diciptakan. Sedangkan tokenomics adalah ilmu tentang bagaimana sebuah token kripto diciptakan, didistribusikan, dan digunakan dalam sebuah proyek. Tokenomics mencakup aspek-aspek seperti model ekonomi, sistem reward, dan fungsi token dalam ekosistem proyek tersebut. Keduanya adalah konsep penting dalam cryptocurrency yang berkaitan dengan pengembangan proyek dan penggalangan dana.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["ICO", "Tokenomics", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title:
      "Apa itu Penambangan Blockchain dan Bagaimana Cara Menambang Cryptocurrency",
    number: 9,
    liveclassCode: "LC-09-Gold",
    description:
      "Penambangan blockchain adalah proses verifikasi transaksi dan penciptaan blok baru dalam blockchain dengan menggunakan sumber daya komputasi. Dalam cryptocurrency, cara menambangnya adalah dengan menginstal perangkat lunak dan memecahkan puzzle kriptografis untuk memperoleh cryptocurrency sebagai hadiah.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Penambangan", "Mining", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Memetakan Pasar Saham ke Pasar Crypto dan Apa itu Hedging",
    number: 10,
    liveclassCode: "LC-10-Gold",
    description:
      "Memetakan pasar saham ke pasar crypto adalah upaya untuk menghubungkan pergerakan harga saham dengan aset digital, dengan tujuan memprediksi pergerakan harga cryptocurrency berdasarkan peristiwa atau kondisi yang terjadi di pasar saham. Hedging adalah strategi lindung nilai untuk meminimalkan risiko kerugian dalam investasi. Dalam cryptocurrency, hedging dilakukan dengan menggunakan kontrak berjangka (futures) atau opsi untuk melindungi nilai investasi dari perubahan harga yang tidak terduga.",
    memberType: "Gold",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Penambangan", "Mining", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 90,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Market Psychology dan Market Cycle of Cryptocurrency",
    number: 1,
    liveclassCode: "LC-01-Platinum",
    description:
      "Market psychology dan market cycle adalah konsep penting dalam cryptocurrency yang berkaitan dengan perilaku pasar dan pola pergerakan harga. Market psychology melibatkan emosi dan sentimen pasar, sedangkan market cycle mencakup pola pergerakan harga berdasarkan sejarah pergerakan harga. Memahami keduanya membantu investor membuat keputusan investasi yang lebih baik.",
    memberType: "Platinum",
    type: "Free",
    category: "Cryptocurrency",
    tags: ["Uang", "Blockchain", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title:
      "Bitcoin Dominance dan Strategy of Dollar Cost Averaging (DCA) Bitcoin",
    number: 2,
    liveclassCode: "LC-02-Platinum",
    description:
      "Bitcoin dominance adalah persentase nilai pasar Bitcoin terhadap nilai pasar cryptocurrency secara keseluruhan, sementara strategi dollar cost averaging (DCA) Bitcoin adalah membeli Bitcoin secara teratur dengan jumlah yang sama pada interval waktu tertentu untuk mengurangi risiko fluktuasi harga. Kedua konsep ini penting untuk investor cryptocurrency.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["Uang", "Blockchain", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Fundamental Analysis (Prospect Project)",
    number: 3,
    liveclassCode: "LC-03-Platinum",
    description:
      "Fundamental analysis di cryptocurrency adalah analisis fundamental proyek cryptocurrency untuk memperkirakan nilai jangka panjangnya. Ini melibatkan penilaian terhadap teknologi, tim pengembang, dan tujuan proyek. Proyek yang solid dan berpotensi sukses memiliki nilai jangka panjang yang lebih tinggi. Memahami fundamental analysis penting untuk membuat keputusan investasi yang baik di pasar cryptocurrency.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["Fundamental", "Analysis", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Technical Analysis (Secret Indicator)",
    number: 4,
    liveclassCode: "LC-04-Platinum",
    description:
      "Technical analysis di cryptocurrency melibatkan analisis grafik harga untuk mengidentifikasi tren dan pola pergerakan harga. Indikator rahasia dibuat oleh trader cryptocurrency berdasarkan pengalaman dan pengetahuan mereka. Indikator ini membantu trader dalam mengidentifikasi sinyal beli atau jual yang lebih akurat. Memahami technical analysis penting untuk membuat keputusan investasi yang baik di pasar cryptocurrency.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["Technical", "Analysis", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Strategi dalam Perdagangan Crypto (Value & Growth Investing)",
    number: 5,
    liveclassCode: "LC-05-Platinum",
    description:
      "Strategi perdagangan crypto meliputi value investing dan growth investing. Value investing mencari koin dengan harga di bawah nilai wajarnya, sementara growth investing mencari koin dengan potensi pertumbuhan yang tinggi. Memahami kedua strategi ini dapat membantu investor dalam membuat keputusan investasi yang lebih baik di pasar cryptocurrency.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["Strategi", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Crypto Futures",
    number: 6,
    liveclassCode: "LC-06-Platinum",
    description:
      "Crypto futures adalah kontrak perdagangan yang memungkinkan pembeli dan penjual untuk setuju pada harga dan tanggal penyelesaian di masa depan untuk aset kripto tertentu. Futures crypto populer di kalangan trader karena memungkinkan mereka untuk memperoleh keuntungan dari pergerakan harga tanpa benar-benar memiliki aset kripto itu sendiri.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["Crypto", "Futures", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Sonny Yu CTA., CCE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Buying ICO Project dan ICO Scams",
    number: 7,
    liveclassCode: "LC-07-Platinum",
    description:
      "Membeli proyek ICO adalah cara untuk memperoleh token proyek baru dengan harga murah sebelum kenaikan harga pada masa depan. Namun, investor harus berhati-hati dengan ICO scams, di mana proyek-proyek palsu menipu investor dengan menjanjikan keuntungan besar dan melarikan diri dengan uang tersebut. Sebelum berinvestasi dalam ICO, penting untuk melakukan penelitian yang teliti tentang proyek dan tim pengembangnya untuk meminimalkan risiko kehilangan uang.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["ICO", "Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Hunting DeFi dan Cryptocurrency Airdrops",
    number: 8,
    liveclassCode: "LC-08-Platinum",
    description:
      "Hunting DeFi dan Cryptocurrency Airdrops adalah strategi untuk memperoleh token kripto gratis atau dengan harga diskon. Hunting DeFi melibatkan mencari proyek-proyek DeFi baru yang menawarkan token sebagai insentif untuk penggunaan platform mereka, sedangkan Airdrops adalah program yang menawarkan token gratis kepada pemegang token kripto yang sudah ada. Kedua strategi ini memerlukan upaya penelitian dan monitoring yang intensif, tetapi dapat menghasilkan keuntungan besar bagi para investor yang beruntung.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["DeFi", "Cryptocurrency", "Airdrops"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Pump & Dump Cryptocurrency",
    number: 9,
    liveclassCode: "LC-09-Platinum",
    description:
      "Pump & Dump Cryptocurrency adalah praktik dimana kelompok trader atau individu mencoba meningkatkan harga suatu koin dengan cara membeli dalam jumlah besar dan kemudian menjual seketika saat harga melonjak. Hal ini biasanya dilakukan untuk mendapatkan keuntungan dengan merugikan investor lainnya yang terjebak dalam kenaikan harga palsu tersebut. Pump & Dump Cryptocurrency sangat berbahaya dan investor harus memperhatikan tanda-tanda pump & dump sebelum berinvestasi dalam koin tertentu.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["Pump & Dump", "Cryptocurrency", "Pump & Dump Cryptocurrency"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
  {
    title: "Practice Staking ",
    number: 10,
    liveclassCode: "LC-10-Platinum",
    description:
      "Practice Staking di cryptocurrency adalah aktivitas yang melibatkan penyimpanan cryptocurrency dalam wallet untuk mendapatkan hadiah dalam bentuk cryptocurrency baru atau token lain. Practice Staking memungkinkan pengguna untuk mempelajari dan berlatih proses staking. Hal ini membantu para investor untuk memahami cara kerja staking, memilih proyek yang sesuai, dan membuat keputusan yang lebih baik ketika berinvestasi dalam cryptocurrency yang menggunakan staking.",
    category: "Cryptocurrency",
    memberType: "Platinum",
    type: "Free",
    tags: ["Staking", "Cryptocurrency", "Practice Staking"],
    location: {
      name: "Zoom Meeting",
      link: "https://us04web.zoom.us/j/5801551692?pwd=gmJCSxEAXbxSpcCyV5pUR5jZsmtVlV.1",
    },
    duration: 120,
    mentor: "Jefri Tan CCE., CBE",
    thumbnail: {
      imageAlt: "example",
      inageName: "Example.png",
      imageLink:
        "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images/Conor-Devitt.png",
    },
  },
];

const seedLiveclass = async () => {
  try {
    await Liveclass.deleteMany({});
    await Liveclass.insertMany(data);
    return true;
  } catch (error) {
    return error.message;
  }
};

export default seedLiveclass;
