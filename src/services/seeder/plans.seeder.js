import db from "../../models/index.js";
const Plans = db.plans;

const plans = [
  {
    planName: "Silver",
    duration: "1 Year",
    price: 2250000,
    discountPrice: -251000,
    totalPrice: 1999000,
    currency: "IDR",
    favourite: false,
    features: [
      {
        name: "Signal Trading 3 Bulan",
        status: true,
      },
      {
        name: "Belajar Basic Teknikal Analisis",
        status: true,
      },
      {
        name: "Membership 1 Tahun",
        status: true,
      },
      {
        name: "Free Basic Class",
        status: true,
      },
      {
        name: "Konsultasi setiap hari",
        status: true,
      },
      {
        name: "Live Trading",
        status: true,
      },
    ],
    materi: {
      pertemuan: 5,
      duration: "1 hour 30 minutes",
      materi: [
        "Sejarah Uang",
        "Pengenalan Blockchain",
        "Pengenalan Cryptocurrency",
        "Bagaimana cara kerja Cryptocurrency",
        "Apa itu Bitcoin",
        "Apa itu Altcoin",
        "Pengenalan Layer 1 dan 2",
        "Perbedaan Emas, Uang Fiat dan Bitcoin",
        "Cryptocurrency apa yang harus kamu punya?",
        "Platform perdagangan : DEX dan CEX",
        "Apa yang menentukan harga Cryptocurrency",
        "Dimana tempat penyimpanan Cryptocurrency (Hot and Cold Wallet)",
      ],
    },
  },
  {
    planName: "Gold",
    duration: "1 Year",
    price: 7500000,
    discountPrice: -1501000,
    totalPrice: 5999000,
    currency: "IDR",
    favourite: false,
    features: [
      {
        name: "Signal Trading 6 Bulan",
        status: true,
      },
      {
        name: "Belajar Basic Teknikal Analisis + Money Management",
        status: true,
      },
      {
        name: "Membership 1 Tahun",
        status: true,
      },
      {
        name: "Free Basic Class",
        status: true,
      },
      {
        name: "Free Intermediate Class",
        status: true,
      },
      {
        name: "Video Recording",
        status: true,
      },
      {
        name: "Konsultasi setiap hari",
        status: true,
      },
      {
        name: "Live Trading",
        status: true,
      },
    ],
    materi: {
      pertemuan: 10,
      duration: "1 hour 30 minutes",
      materi: [
        "Money Management & Investing Risk",
        "Fundamental & Potensi Cryptocurrency",
        "Membaca Trend market",
        "Mengenal FED rates moves",
        "Cara Mengirim asset digital/cryptocurrency antar network",
        "Apa itu Defi",
        "Pengenalan Lending & Leverage",
        "Small and Large Marketcaps",
        "Apa itu ICO",
        "Apa itu tokenomics",
        "Apa itu penambangan blockchain",
        "Bagaimana cara menambang cryptocurrency",
        "Apa itu hedging",
      ],
    },
  },
  {
    planName: "Platinum",
    duration: "1 Year",
    price: 12000000,
    discountPrice: -2001000,
    totalPrice: 9999000,
    currency: "IDR",
    favourite: true,
    features: [
      {
        name: "Signal Trading 12 Bulan",
        status: true,
      },
      {
        name: "Belajar Basic Teknikal Analisis",
        status: true,
      },

      {
        name: "Belajar Money Management",
        status: true,
      },
      {
        name: "Indikator Teknikal Analisis",
        status: true,
      },
      {
        name: "Membership 1 Tahun",
        status: true,
      },
      {
        name: "Free Basic Class",
        status: true,
      },
      {
        name: "Free Intermediate Class",
        status: true,
      },
      {
        name: "Free Advanced Class",
        status: true,
      },
      {
        name: "Video Recording",
        status: true,
      },
      {
        name: "Konsultasi setiap hari",
        status: true,
      },
      {
        name: "Live Trading",
        status: true,
      },
    ],
    materi: {
      pertemuan: 10,
      duration: "2 hours",
      materi: [
        "Market Psychology",
        "Market cycle of cryptocurrency",
        "Bitcoin Dominance",
        "Strategy of DCA",
        "Fundamental Analysist",
        "Technical Analysist",
        "Strategi dalam perdagangan cryptocurrency",
        "Crypto Futures",
        "Buying ICO Project",
        "Hunting Defi",
        "Airdrops",
        "Pump and Dumps",
        "ICO scams",
        "Practice Staking",
      ],
    },
  },
];

const seedPlans = async () => {
  try {
    await Plans.deleteMany({});
    await Plans.insertMany(plans);
    return true;
  } catch (error) {
    return false;
  }
};

export default seedPlans;
