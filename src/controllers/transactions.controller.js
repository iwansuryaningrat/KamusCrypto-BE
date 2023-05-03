import db from "../models/index.js";
const MembershipTransactions = db.membershipTransactions;
const LiveclassTransactions = db.liveclassTransactions;
const Users = db.users;

const getAllTransactionsforUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const membershipTransactions = await MembershipTransactions.find({
      userId: userId,
    });
    const liveclassTransactions = await LiveclassTransactions.find({
      userId: userId,
    });
    const transactions = membershipTransactions.concat(liveclassTransactions);
    return res.status(200).json({ transactions });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const membershipTransaction = await MembershipTransactions.findById(
      transactionId
    );
    if (membershipTransaction) {
      return res.status(200).json({ transaction: membershipTransaction });
    }
    const liveclassTransaction = await LiveclassTransactions.findById(
      transactionId
    );
    if (liveclassTransaction) {
      return res.status(200).json({ transaction: liveclassTransaction });
    }
    return res.status(404).json({ message: "Transaction not found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getAllTransactionsforUser, getTransactionById };
