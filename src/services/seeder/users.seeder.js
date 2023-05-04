import db from "../../models/index.js";
const Users = db.users;
import bcrypt from "bcrypt";

// Declare ObjectId type for mongoose
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const password = "Undip.jaya123";
// generate salt to hash password
/* Generating a salt for the password. */
const salt = await bcrypt.genSalt(10);
// now we set user password to hashed password
/* Hashing the password. */
const encryptedPassword = await bcrypt.hash(password, salt);
const date = new Date("12-12-2030").getTime();

/* An array of objects. */
const usersSeeder = [
  {
    name: "Super Admin",
    username: "superadmin",
    email: "admin@kamuscrypto.id",
    phone: "088802851811",
    address: "Jl. Admin",
    birthday: "2000-12-14",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Super Admin",
        subscription: {
          startAt: new Date().getTime(),
          expiredAt: 0,
          subscriptionType: "Free",
        },
        isNew: false,
      },
      isAdmin: true,
      isActivated: true,
    },
  },
  {
    name: "Admin",
    username: "admin",
    email: "iwanadmin@gmail.com",
    phone: "081234567890",
    address: "Jl. Admin",
    birthday: "1990-01-01",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Admin",
        subscription: {
          startAt: new Date().getTime(),
          expiredAt: 0,
          subscriptionType: "Free",
        },
        isNew: false,
      },
      isAdmin: true,
      isActivated: true,
    },
  },
  {
    name: "Basic Member",
    username: "basicmember",
    email: "iwanbasic@gmail.com",
    phone: "081234567890",
    address: "Jl. Admin",
    birthday: "1990-01-01",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Basic Member",
        subscription: {
          startAt: new Date().getTime(),
          expiredAt: 0,
          subscriptionType: "Free",
        },
        isNew: false,
      },
      isAdmin: false,
      isActivated: true,
    },
  },
  {
    name: "Pro Member",
    username: "promember",
    email: "iwanpro@gmail.com",
    phone: "081234567890",
    address: "Jl. Admin",
    birthday: "1990-01-01",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Pro Member",
        subscription: {
          subscriptionType: "Gold",
          startAt: new Date().getTime(),
          expiredAt: new Date().getTime() + 2592000000,
        },
        isNew: false,
      },
      isAdmin: false,
      isActivated: true,
    },
  },
  {
    name: "Sonny Yu",
    username: "sonnyyu_",
    email: "sonny.yu8@gmail.com",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Pro Member",
        subscription: {
          subscriptionType: "Platinum",
          startAt: new Date().getTime(),
          expiredAt: date,
        },
        isNew: false,
      },
      isAdmin: false,
      isActivated: true,
    },
  },
  {
    name: "Jefri Tan",
    username: "jefri.tan",
    email: "jefri.tan15@gmail.com",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Pro Member",
        subscription: {
          subscriptionType: "Platinum",
          startAt: new Date().getTime(),
          expiredAt: date,
        },
        isNew: false,
      },
      isAdmin: false,
      isActivated: true,
    },
  },
  {
    name: "Vanessa",
    username: "vanessamcandra",
    email: "vanessamcandra@gmail.com",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Pro Member",
        subscription: {
          subscriptionType: "Platinum",
          startAt: new Date().getTime(),
          expiredAt: date,
        },
        isNew: false,
      },
      isAdmin: false,
      isActivated: true,
    },
  },
  {
    name: "Putri Sinta Syarif",
    username: "putrisintasyarif_",
    email: "putrisintasyarif@gmail.com",
    password: encryptedPassword,
    type: {
      accountType: {
        member: "Pro Member",
        subscription: {
          subscriptionType: "Platinum",
          startAt: new Date().getTime(),
          expiredAt: date,
        },
        isNew: false,
      },
      isAdmin: false,
      isActivated: true,
    },
  },
];

// Create users seeder function
/**
 * It deletes all the users in the database, then inserts the usersSeeder array into the database.
 * @returns The return value is a promise.
 */
const usersSeederFunction = async () => {
  try {
    await Users.deleteMany();
    await Users.insertMany(usersSeeder);
    return "Users Seeder Created";
  } catch (error) {
    return error;
  }
};

// usersSeederFunction();
export default usersSeederFunction;
