import db from "../models/index.js";
const MembershipTransactions = db.membershipTransactions;
const LiveclassTransactions = db.liveclassTransactions;

const getAllMembershipTransactions = async (req, res) => {
  const id = req.user.id;

  MembershipTransactions.find({ transactionUser: id })
    .populate({
      path: "transactionUser",
      select: "name username email",
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Transaction not found" });
      }

      res.send({
        message: "Transaction retrieved successfully",
        data,
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: err.message || "Error retrieving data" });
    });
};

const getAllLiveclassTransactions = async (req, res) => {
  const id = req.user.id;

  LiveclassTransactions.find({ transactionUser: id })
    .populate({
      path: "transactionUser",
      select: "name username email",
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "Transaction not found" });
      }

      res.send({
        message: "Transaction retrieved successfully",
        data,
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: err.message || "Error retrieving data" });
    });
};

const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const membershipTransaction = await MembershipTransactions.findById(
      transactionId
    );

    if (membershipTransaction) {
      return res.status(200).json({
        message: "Transaction retrieved successfully",
        data: membershipTransaction,
      });
    }

    const liveclassTransaction = await LiveclassTransactions.findById(
      transactionId
    );

    if (liveclassTransaction) {
      return res.status(200).json({
        message: "Transaction retrieved successfully",
        data: liveclassTransaction,
      });
    }

    return res.status(404).json({ message: "Transaction not found" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  getTransactionById,
  getAllMembershipTransactions,
  getAllLiveclassTransactions,
};
