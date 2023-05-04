import jwt from "jsonwebtoken";
/* Importing the models from the index.js file in the models folder. */
import db from "../models/index.js";
const LiveclassTransactions = db.liveclassTransactions;
const Users = db.users;
const Liveclass = db.liveclass;
const Vouchers = db.vouchers;
const Referrals = db.referrals;

/* Importing the functions from the files. */
import createTransaction from "./midtrans/createPayment.function.js";
import addParticipant from "../helpers/liveclass.js";

// Create and Save a new MembershipTransaction
/**
 * It creates a transaction and a liveclass transaction.
 * </code>
 * @param req - {
 * @param res - the response object
 * @returns The transaction object
 */
const create = async (req, res) => {
  const { userId } = req.params;
  // Validate request (must have a liveclass id in params)
  if (!userId) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const { liveclassId, voucherCode, voucherDiscount, totalPrice } = req.body;

  // Validate request (must have a liveclass id in body)
  if (!liveclassId) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  // Find the user
  const user = await Users.findById(userId);
  // Validate request (user must exist)
  if (!user) {
    return res.status(400).send({ message: "User not found!" });
  }

  // Find the liveclass
  const liveclass = await Liveclass.findById(liveclassId);
  // Validate request (liveclass must exist)
  if (!liveclass) {
    return res.status(400).send({ message: "Liveclass not found!" });
  }

  // Check if user already bought the liveclass
  const isAlreadyBought = await LiveclassTransactions.findOne({
    _id: liveclassId,
    transactionUser: userId,
  });

  // Validate request (user must not have bought the liveclass)
  if (isAlreadyBought) {
    return res
      .status(400)
      .send({ message: "You have already bought this liveclass!" });
  }

  const transaction_details = {
    order_id: `LC-${liveclass.liveclassCode}-${
      user._id
    }-${new Date().getUTCMilliseconds()}`,
    gross_amount: totalPrice,
  };

  const items = [
    {
      id: liveclass._id,
      price: liveclass.price,
      quantity: 1,
      name: liveclass.title,
    },
    {
      id: "DISCOUNT",
      price: liveclass.discount,
      quantity: 1,
      name: "Discount",
    },
  ];

  if (voucherCode) {
    const voucherDiscountPrice = {
      id: "VOUCHER",
      price: -voucherDiscount,
      quantity: 1,
      name: "Voucher Discount",
    };
    items.push(voucherDiscountPrice);
  }

  // Split name into first name and last name
  const name = user.name.split(" ");
  const first_name = name[0];
  const last_name = name[1];

  const customer_details = {
    first_name,
    last_name,
    email: user.email,
    phone: user.phone,
  };

  // Create transaction
  const transaction = await createTransaction(
    transaction_details,
    items,
    customer_details
  );

  // Validate request (transaction must be created)
  if (!transaction) {
    return res.status(400).send({ message: "Transaction failed!" });
  }

  // Create a LiveclassTransaction
  const liveclassTransaction = new LiveclassTransactions({
    paymentCode: transaction_details.order_id,
    liveclassId: liveclass._id,
    transactionAmount: transaction_details.gross_amount,
    transactionDate: new Date().toString(),
    transactionStatus: "Pending",
    transactionDescription: "Liveclass Payment for " + user.name,
    transactionUser: user._id,
    voucherCode: voucherCode,
  });

  // Create expiry date for the token (6 hours from now)
  const expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() + 6);

  const token = jwt.sign(
    {
      order_id: transaction_details.order_id,
      transaction_user: user._id,
      midtrans_transaction_token: transaction.token,
      transaction_link: transaction.redirect_url,
      expiresIn: expiryDate,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "6h",
    }
  );

  // Save LiveclassTransaction in the database
  liveclassTransaction
    .save(liveclassTransaction)
    .then((data) => {
      // Add user to liveclass's participant
      const participant = addParticipant(user._id, liveclass._id);

      if (participant) {
        res.status(201).send({
          message: "Transaction created successfully!",
          data: transaction,
          token,
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Transaction.",
      });
    });
};

const findAll = (req, res) => {};

export { create, findAll };
