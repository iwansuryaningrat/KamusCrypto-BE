import db from "../../models/index.js";
const Teams = db.teams;

const data = [
  {
    name: "Sonny Yu",
    description: "-",
    position: "CEO",
    photo: {
      imageAlt: "koh-sonny",
      imageName: "1674935012609-Koh-Sonny.jpg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1674935012609-Koh-Sonny.jpg",
    },
    contact: {
      instagram: "-",
      twitter: "-",
      linkedin: "https://www.linkedin.com/in/sonny-%E2%80%8E-924662214/",
      email: "-",
    },
    status: "Active",
  },
  {
    name: "Jefri Tan",
    description: "-",
    position: "CPO",
    photo: {
      imageAlt: "jefri-Ttan",
      imageName: "1674935041947-Jefri-Tan.PNG",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1674935041947-Jefri-Tan.PNG",
    },
    contact: {
      instagram: "-",
      twitter: "-",
      linkedin: "https://www.linkedin.com/in/jefritan/",
      email: "-",
    },
    status: "Active",
  },
  {
    name: "Vanessa Michelle",
    description: "-",
    position: "CMO",
    photo: {
      imageAlt: "vanessa",
      imageName: "1674935215104-Vanessa1.jpg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1674935215104-Vanessa1.jpg",
    },
    contact: {
      instagram: "-",
      twitter: "-",
      linkedin: "-",
      email: "-",
    },
    status: "Active",
  },
  {
    name: "Putri Sinta S",
    description: "-",
    position: "CFO",
    photo: {
      imageAlt: "putri",
      imageName: "1674935243972-Putri.jpg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1674935243972-Putri.jpg",
    },
    contact: {
      instagram: "-",
      twitter: "-",
      linkedin: "https://www.linkedin.com/in/putrisintasyarif/",
      email: "-",
    },
    status: "Active",
  },
  {
    name: "Iwan Suryaningrat",
    description: "Lorem ipsum",
    position: "Backend Engineer",
    photo: {
      imageAlt: "iwan-suryaningrat",
      imageName: "1674934867851-My-Photo1.jpg",
      imageLink:
        "https://dev.kamuscrypto.id/assets/images/1674934867851-My-Photo1.jpg",
    },
    contact: {
      email: "iwan.suryaningrat28@gmail.com",
      instagram: "https://www.instagram.com/sningrat_/",
      twitter: "https://twitter.com/sningrat_",
      linkedin: "https://www.linkedin.com/in/iwan-suryaningrat/",
    },
    status: "Active",
  },
  {
    name: "Khoeru Roziqin",
    description: "Lorem ipsum",
    position: "Frontend Engineer",
    photo: {
      imageAlt: "khoeru-roziqin",
      imageName: "1674934946603-dummy-profile.png",
      imageLink:
        "https://api.kamuscrypto.id/assets/images/1674934946603-dummy-profile.png",
    },
    contact: {
      instagram: "https://www.instagram.com/khroz_id/",
      twitter: "-",
      linkedin: "https://www.linkedin.com/in/roziqinkhoeru/",
      email: "roziqinkhoeru8@gmail.com",
    },
    status: "Active",
  },
];

const seedTeams = async () => {
  try {
    await Teams.deleteMany({});
    await Teams.insertMany(data);
    return true;
  } catch (error) {
    return false;
  }
};

export default seedTeams;
