import db from "../models/index.js";
const Referrals = db.referrals;

const addReferralAccount = async (username, referralCode) => {
  const data = await Referrals.findOne({
    referralCode,
    referralStatus: "Active",
  })
    .then((result) => {
      if (!result) {
        return false;
      } else {
        return result;
      }
    })
    .catch((err) => {
      return false;
    });

  if (data) {
    const newReferralCount = data.referralCount + 1;
    const newReferralAccount = data.referralAccount.push({ username });

    const newData = await Referrals.findOneAndUpdate(
      { referralCode },
      {
        referralCount: newReferralCount,
        referralAccount: newReferralAccount,
      },
      { new: true }
    )
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return false;
      });

    return newData;
  }
};

export default addReferralAccount;
