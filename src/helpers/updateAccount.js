import db from "../models/index.js";
const Users = db.users;

const updateAccount = async (userId, memberType) => {
  const startDate = new Date().getTime();
  let expiredDate = 0;
  if (memberType === "Silver") {
    // 3 months
    expiredDate = startDate + 7776000000;
  } else if (memberType === "Gold") {
    // 6 months
    expiredDate = startDate + 15552000000;
  } else if (memberType === "Platinum") {
    // 12 months
    expiredDate = startDate + 31104000000;
  }

  try {
    const user = await Users.findByIdAndUpdate(
      userId,
      {
        type: {
          accountType: {
            member: "Pro Member",
            subscription: {
              subscriptionType: memberType,
              startAt: startDate,
              expiredAt: expiredDate,
            },
            isNew: false,
          },
        },
      },
      { new: true }
    )
      .then((result) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  } catch (err) {
    return false;
  }
};

export default updateAccount;
