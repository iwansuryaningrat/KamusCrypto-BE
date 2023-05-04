import jwt from "jsonwebtoken";
/* Importing the models from the index.js file in the models folder. */
import db from "../models/index.js";
const Users = db.users;
const Plans = db.plans;
const MembershipTransactions = db.membershipTransactions;
const Vouchers = db.vouchers;

/* Importing the function `createTransaction` from the file `createPayment.function.js` in the folder
`midtrans`. */
import createTransaction from "./midtrans/createPayment.function.js";

// Create and Save a new MembershipTransaction
/**
 * It creates a transaction and saves it to the database
 * @param req - the request object
 * @param res - The response object.
 * @returns The response is an object with a message and data property.
 */
const create = async (req, res) => {
  const { userId } = req.params;
  // Validate request (must have a membership id in params)
  if (!userId) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  const { membershipId, voucherCode, voucherDiscount, totalPrice } = req.body;

  // Validate request (must have a membership id in body)
  if (!membershipId) {
    return res.status(400).send({ message: "Content can not be empty!" });
  }

  // Find the user
  const user = await Users.findById(userId);
  // Validate request (user must exist)
  if (!user) {
    return res.status(400).send({ message: "User not found!" });
  }

  // Validate request (user must not have an active membership)
  if (user.type.accountType.member !== "Basic Member") {
    return res
      .status(400)
      .send({ message: "User already has an active membership!" });
  }

  // Find the membership
  const membership = await Plans.findById(membershipId);

  // Validate request (membership must exist)
  if (!membership) {
    return res.status(400).send({ message: "Membership not found!" });
  }

  const transaction_details = {
    order_id: `MS-${
      membership.planName
    }-${userId}-${new Date().getUTCMilliseconds()}`,
    gross_amount: totalPrice,
  };

  const items = [
    {
      id: membership._id,
      price: membership.price,
      quantity: 1,
      name: membership.planName,
    },
    {
      id: "DISCOUNT",
      price: membership.discountPrice,
      quantity: 1,
      name: "Discount",
    },
  ];

  // Validate request (voucher code must exist)
  const voucher = await Vouchers.findOne({ voucherCode });

  if (voucher) {
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

  // Validate total price of all items (must be equal to gross amount)
  const totalItemsPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  if (totalItemsPrice !== transaction_details.gross_amount) {
    return res.status(400).send({
      message: "Total price of all items must be equal to gross amount!",
    });
  }

  const transaction = await createTransaction(
    transaction_details,
    items,
    customer_details
  );

  //   Create a MembershipTransaction
  const membershipTransaction = new MembershipTransactions({
    peymentCode: transaction_details.order_id,
    transactionName: "Membership Transaction for" + user.name,
    memberhipDuration: membership.duration,
    transactionAmount: transaction.gross_amount,
    transactionDate: new Date().toString(),
    transactionStatus: "Pending",
    transactionDescription: "Membership Transaction",
    transactionUser: userId,
    voucherCode,
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

  // Save MembershipTransaction in the database
  membershipTransaction
    .save(membershipTransaction)
    .then((data) => {
      res.status(201).send({
        message: "MembershipTransaction was created successfully!",
        data: transaction,
        token,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the MembershipTransaction.",
      });
    });
};

// Retrieve all MembershipTransactions from the database.
const findAll = (req, res) => {};

export { create, findAll };
