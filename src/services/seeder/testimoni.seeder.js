import db from "../../models/index.js";
const Testimoni = db.testimoni;

const data = [
  {
    id: "63d7586badedcbe5b9ddc395",
    name: "Natasya Vania",
    position: "Student",
    company: "-",
    testimoni:
      "Kalo kamu mau investasi Cryptocurrency tapi gak tau caranya, belajar di Kamus Crypto aja mentornya sangat membantu dan friendly banget. Gak perlu takut salah atau bingung, karena mentornya bakal ngajarin dan bantuin kamu untuk paham.",
    photos: {
      imageAlt: "NATASHA",
      imageName: "1675057259494-NATASHA_MAHASISWA.PNG",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1675057259494-NATASHA_MAHASISWA.PNG",
    },
    status: "Active",
  },
  {
    id: "63d75825adedcbe5b9ddc393",
    name: "William Pranoto",
    position: "Kontraktor",
    company: "-",
    testimoni:
      "Kalo kamu mau investasi Cryptocurrency tapi gak tau mau mulai darimana, platform pembelajaran Kamus Crypto Ini bakal bantuin kamu dong. Gampang dipahami, bikin lebih yakin sama investasi di Cryptocurrency. Wajib banget dicoba deh.",
    photos: {
      imageAlt: "William",
      imageName: "1675057189312-William.jpg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1675057189312-William.jpg",
    },
    status: "Active",
  },
  {
    id: "63d757c9adedcbe5b9ddc391",
    name: "Anthony Ferdinan",
    position: "Financial Planner",
    company: "-",
    testimoni:
      "Kamus Crypto menyajikan materi yang sangat komprehensif, adanya video tutorial yang disertakan juga membantu saya untuk memvisualisasikan konsep-konsep yang diajarkan.  Materi yang disajikan jelas dan mudah dipahami, dan adanya tanya jawab dengan para expert juga membantu saya.",
    photos: {
      imageAlt: "Anthony",
      imageName: "1675057097972-Anthony.jpeg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1675057097972-Anthony.jpeg",
    },
    status: "Active",
  },
  {
    id: "63d7578aadedcbe5b9ddc38f",
    name: "Vania Yuliana",
    position: "Student",
    company: "-",
    testimoni:
      "Wah, platform pembelajaran Kamus Crypto ini emang top banget deh. Dari awal gak tau apa-apa tentang Cryptocurrency, setelah belajar disini jadi lebih teredukasi banget dong. Jadi Investasi di Cryptocurrency jadi lebih percaya diri dan gak takut salah langkah.",
    photos: {
      imageAlt: "Vania-Yuliana",
      imageName: "1675057034030-Vania-Yuliana.jpg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1675057034030-Vania-Yuliana.jpg",
    },
    status: "Active",
  },
  {
    id: "63d75719adedcbe5b9ddc38d",
    name: "Verra",
    position: "Entrepreneur",
    company: "-",
    testimoni:
      "Sangat terbantu banget belajar di Kamus Crypto, saya merasa lebih paham tentang cara kerja Cryptocurrency dan bagaimana cara investasi yang aman itu bagaimana. Beneran kamus Crypto membantu banget bagi kalian yang baru belajar atau mulai investasi di Cryptocurrency.",
    photos: {
      imageAlt: "Verra",
      imageName: "1675056920995-Verra.jpeg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1675056920995-Verra.jpeg",
    },
    status: "Active",
  },
];

const seedTestimoni = async () => {
  try {
    await Testimoni.deleteMany({});
    await Testimoni.insertMany(data);
    return true;
  } catch (error) {
    return false;
  }
};

export default seedTestimoni;
