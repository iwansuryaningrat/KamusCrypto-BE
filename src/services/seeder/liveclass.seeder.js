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
    title: "Money Management & Investing Risk",
    number: 1,
    liveclassCode: "LC-01-Gold",
    description:
      "Money management adalah cara mengatur keuangan dengan tujuan memaksimalkan keuntungan dan meminimalkan risiko. Berinvestasi di cryptocurrency memiliki risiko sendiri, sehingga manajemen risiko yang baik sangat penting. Ini dapat dilakukan dengan cara diversifikasi portofolio, menetapkan tujuan investasi, dan memantau investasi secara teratur.",
    memberType: "Gold",
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
    title: "Market Psychology dan Market Cycle of Cryptocurrency",
    number: 1,
    liveclassCode: "LC-01-Platinum",
    description:
      "Market psychology dan market cycle adalah konsep penting dalam cryptocurrency yang berkaitan dengan perilaku pasar dan pola pergerakan harga. Market psychology melibatkan emosi dan sentimen pasar, sedangkan market cycle mencakup pola pergerakan harga berdasarkan sejarah pergerakan harga. Memahami keduanya membantu investor membuat keputusan investasi yang lebih baik.",
    memberType: "Platinum",
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
