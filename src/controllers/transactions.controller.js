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

const getMembershipTransactionById = async (req, res) => {
  const { transactionId } = req.params;

  if (!transactionId) {
    return res.status(400).send({ message: "Transaction ID is required" });
  }

  MembershipTransactions.findById(transactionId)
    .populate({
      path: "transactionUser",
      select: "name username email",
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({ message: "Transaction not found" });
      }

      const {
        _id,
        paymentCode,
        transactionName,
        transactionAmount,
        transactionDate,
        transactionStatus,
        transactionUrl,
        transactionDescription,
        transactionUser,
        voucherCode,
        transactionNotification,
      } = result;

      const data = {
        id: _id,
        paymentCode,
        transactionName,
        transactionAmount,
        transactionDate,
        transactionStatus,
        transactionUrl,
        transactionDescription,
        transactionUser,
        voucherCode,
        transactionNotification,
      };

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

const getLiveclassTransactionById = async (req, res) => {
  const { transactionId } = req.params;

  if (!transactionId) {
    return res.status(400).send({ message: "Transaction ID is required" });
  }

  LiveclassTransactions.findById(transactionId)
    .populate({
      path: "transactionUser",
      select: "name username email",
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({ message: "Transaction not found" });
      }

      const {
        _id,
        paymentCode,
        transactionName,
        transactionAmount,
        transactionDate,
        transactionStatus,
        transactionUrl,
        transactionDescription,
        transactionUser,
        voucherCode,
        transactionNotification,
      } = result;

      const data = {
        id: _id,
        paymentCode,
        transactionName,
        transactionAmount,
        transactionDate,
        transactionStatus,
        transactionUrl,
        transactionDescription,
        transactionUser,
        voucherCode,
        transactionNotification,
      };

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

const getAllLiveclassTransactionsforAdmin = async (req, res) => {
  LiveclassTransactions.findAll()
    .populate({
      path: "transactionUser",
      select: "name username email",
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "No Live Class Transaction was found!",
        });
      }

      const data = result.map((item) => {
        const {
          _id,
          paymentCode,
          transactionName,
          transactionAmount,
          transactionDate,
          transactionStatus,
          transactionUrl,
          transactionDescription,
          transactionUser,
          voucherCode,
          transactionNotification,
        } = result;

        return {
          id: _id,
          paymentCode,
          transactionName,
          transactionAmount,
          transactionDate,
          transactionStatus,
          transactionUrl,
          transactionDescription,
          transactionUser,
          voucherCode,
          transactionNotification,
        };
      });

      res.status(200).send({
        message: "Live class transactions successfully retrieved",
        data,
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: err.message || "Error retrieving data" });
    });
};

const getAllMembershipTransactionsforAdmin = async (req, res) => {
  MembershipTransactions.findAll()
    .populate({
      path: "transactionUser",
      select: "name username email",
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "No Live Class Transaction was found!",
        });
      }

      const data = result.map((item) => {
        const {
          _id,
          paymentCode,
          transactionName,
          transactionAmount,
          transactionDate,
          transactionStatus,
          transactionUrl,
          transactionDescription,
          transactionUser,
          voucherCode,
          transactionNotification,
        } = result;

        return {
          id: _id,
          paymentCode,
          transactionName,
          transactionAmount,
          transactionDate,
          transactionStatus,
          transactionUrl,
          transactionDescription,
          transactionUser,
          voucherCode,
          transactionNotification,
        };
      });

      res.status(200).send({
        message: "Live class transactions successfully retrieved",
        data,
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .send({ message: err.message || "Error retrieving data" });
    });
};

export {
  getAllMembershipTransactions,
  getAllLiveclassTransactions,
  getMembershipTransactionById,
  getLiveclassTransactionById,
  getAllMembershipTransactionsforAdmin,
  getAllLiveclassTransactionsforAdmin,
};
