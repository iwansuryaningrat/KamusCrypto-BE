import db from "../models/index.js";
const Referrals = db.referrals;
/* Importing the dataCounter function from the helpers folder. */
import dataCounter from "../helpers/dataCounter.js";
/* Importing the paginationLinks function from the helpers folder. */
import paginationLinks from "../helpers/paginationLinks.js";

/* Importing the mongoose library and creating a new ObjectId. */
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

// Fetch all referrals from the database (Done)
const findAll = async (req, res) => {
  let { status, page } = req.query;

  if (page === undefined) page = 1;

  var condition = {};

  if (status) {
    condition = { referralStatus: "Active" };
  } else if (status === false) {
    condition = { referralStatus: "Inactive" };
  } else {
    condition = {};
  }

  const pageLimit = 10;
  const skip = pageLimit * (page - 1);
  const dataCount = await dataCounter(Referrals, pageLimit, condition);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, pageLimit, link, dataCount);

  await Referrals.find(condition)
    .populate({
      path: "referralUser",
      select: "name username email",
    })
    .skip(skip)
    .limit(pageLimit)
    .sort({ createdAt: -1 })
    .then((referrals) => {
      if (referrals.length < 0) {
        return res.status(204).send({
          message: "Referrals not found",
        });
      }

      const data = referrals.map((referral) => {
        const {
          _id,
          referralCode,
          referralUser,
          referralCount,
          referralAccount,
          referralTotalAmount,
          referralAvailableAmount,
          referralWithDraw,
          referralWithDrawHistory,
          referralStatus,
          referralWithDrawBank,
        } = referral;
        return {
          id: _id,
          referralCode,
          referralUser,
          referralCount,
          referralAccount,
          referralTotalAmount,
          referralAvailableAmount,
          referralWithDraw,
          referralWithDrawHistory,
          referralWithDrawBank,
          referralStatus,
        };
      });

      res.send({
        message: "Referrals fetched successfully",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving referrals.",
      });
    });
};

// Find a single referral with an id (Done)
/**
 * It finds a referral by id and populates the referralUser field with the user's name, username, and
 * email.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The referral object is being returned.
 */
const findOne = (req, res) => {
  const id = req.params.id;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Invalid ID",
    });
  }

  Referrals.findById(id)
    .populate({
      path: "referralUser",
      select: "name username email",
    })
    .then((referral) => {
      if (!referral) {
        return res.status(404).send({
          message: `Referral not found`,
        });
      }

      const {
        _id,
        referralCode,
        referralUser,
        referralCount,
        referralAccount,
        referralTotalAmount,
        referralAvailableAmount,
        referralWithDraw,
        referralWithDrawHistory,
        referralStatus,
        referralWithDrawBank,
      } = referral;

      res.send({
        message: "Referral fetched successfully",
        data: {
          id: _id,
          referralCode,
          referralUser,
          referralCount,
          referralAccount,
          referralTotalAmount,
          referralAvailableAmount,
          referralWithDraw,
          referralWithDrawHistory,
          referralStatus,
          referralWithDrawBank,
        },
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving referral`,
      });
    });
};

// Update a referral by the id in the request (Done)
/**
 * It updates the referralWithDrawBank object in the Referrals collection with the data from the
 * request body.
 * </code>
 * @param req - request
 * @param res - the response object
 * @returns a promise.
 */
const addBankAccount = (req, res) => {
  const referralCode = req.params.referralCode;

  if (!referralCode) {
    return res.status(400).send({
      message: "Invalid ID",
    });
  }

  const { bank_name, account_name, account_number } = req.body;

  if (!bank_name || !account_name || !account_number) {
    return res.status(400).send({
      message: "Invalid data",
    });
  }

  Referrals.findOneAndUpdate(
    { referralCode },
    {
      referralWithDrawBank: {
        withDrawBankName: bank_name,
        withDrawBankAccountName: account_name,
        withDrawBankAccountNumber: account_number,
        withDrawBankAccountVerified: false,
      },
    },
    { new: true }
  )
    .then((referral) => {
      if (!referral) {
        return res.status(404).send({
          message: `Referral not found`,
        });
      }

      res.send({
        message: "Referral updated successfully",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating referral`,
      });
    });
};

// Change Referral Code (Done)
/**
 * It takes a referral code, finds the referral in the database, and updates the referral code to the
 * new referral code
 * @param req - The request object.
 * @param res - the response object
 * @returns The referralCode is being returned.
 */
const changeReferralCode = (req, res) => {
  const referralCode = req.params.referralCode;

  if (!referralCode) {
    return res.status(400).send({
      message: "Invalid ID",
    });
  }

  const { newReferralCode } = req.body;

  if (!newReferralCode) {
    return res.status(400).send({
      message: "Invalid data",
    });
  }

  Referrals.findOneAndUpdate(
    {
      referralCode,
    },
    {
      referralCode: newReferralCode,
    },
    { new: true }
  )
    .then((referral) => {
      if (!referral) {
        return res.status(404).send({
          message: `Referral not found`,
        });
      }

      res.send({
        message: "Referral updated successfully",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating referral`,
      });
    });
};

// Request for a referral to withdraw (Done)
/**
 * It takes a referral code and an amount from the request body, checks if the referral code exists, if
 * it does, it checks if the amount is less than the available amount, if it is, it updates the
 * referral document with the new available amount, the new withdraw count and pushes the withdraw
 * amount and date to the withdraw history array.
 * </code>
 * @param req - The request object.
 * @param res - The response object.
 * @returns a promise.
 */
const requestWD = (req, res) => {
  const referralCode = req.params.referralCode;

  if (!referralCode) {
    return res.status(400).send({
      message: "Referral code is required",
    });
  }

  const { amount } = req.body;

  if (!amount) {
    return res.status(400).send({
      message: "Invalid data",
    });
  }

  Referrals.findOne({ referralCode })
    .then((referral) => {
      if (!referral) {
        return res.status(404).send({
          message: `Referral not found`,
        });
      }

      const { referralAvailableAmount } = referral;

      if (referralAvailableAmount < amount) {
        return res.status(400).send({
          message: "Insufficient balance",
        });
      }

      const newAvailableAmount = referralAvailableAmount - amount;
      const newReferralWithDrawCount = referral.referralWithDrawCount + 1;
      const withDrawAmount = amount;
      const withDrawDate = new Date().getTime();

      Referrals.findOneAndUpdate(
        { referralCode },
        {
          referralAvailableAmount: newAvailableAmount,
          referralWithDrawCount: newReferralWithDrawCount,
          $push: {
            referralWithDrawHistory: {
              withDrawAmount,
              withDrawDate,
            },
          },
        },
        { new: true }
      )
        .then((referral) => {
          res.send({
            message: "Referral withdraw request sent successfully",
          });
        })
        .catch((err) => {
          res.status(500).send({
            message: `Error updating referral`,
          });
        });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving referral`,
      });
    });
};

// Show all referrals with verification bank account request (Done)
/**
 * It fetches all referrals with a specific condition and paginates the result.
 * </code>
 *
 *
 * A:
 *
 * I think you should use <code></code> instead of <code>find</code>
 * <code>const showAllVerification = async (req, res) =&gt; {
 *   let { page } = req.query;
 *   const query = { "referralWithDrawBank.withDrawBankAccountVerified": false };
 *
 *   if (page === undefined) page = 1;
 *
 *   const pageLimit = 10;
 *   const skip = pageLimit * (page - 1);
 *   const dataCount = await dataCounter(Referrals, pageLimit, query);
 *
 *   const nextPage = parseInt(page) + 1;
 *   const prevPage = parseInt(page) - 1;
 *
 *   const protocol = req.protocol === "https" ? req.protocol
 * @param req - The request object.
 * @param res - the response object
 */
const showAllVerification = async (req, res) => {
  let { page } = req.query;
  const query = { "referralWithDrawBank.withDrawBankAccountVerified": false };

  if (page === undefined) page = 1;

  const pageLimit = 10;
  const skip = pageLimit * (page - 1);
  const dataCount = await dataCounter(Referrals, pageLimit, query);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, pageLimit, link, dataCount);

  await Referrals.find(query)
    .populate({
      path: "referralUser",
      select: "name username email",
    })
    .skip(skip)
    .limit(pageLimit)
    .sort({ createdAt: -1 })
    .then((referrals) => {
      if (!referrals) {
        return res.status(204).send({
          message: `Referrals not found`,
        });
      }

      const data = referrals.map((referral) => {
        const {
          _id,
          referralCode,
          referralUser,
          referralCount,
          referralStatus,
          referralWithDrawBank,
        } = referral;

        return {
          id: _id,
          referralUser,
          referralCode,
          referralCount,
          referralWithDrawBank,
          referralStatus,
        };
      });

      res.send({
        message: "Referrals fetched successfully",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving referrals`,
      });
    });
};

// Show all referrals with withdraw request (withDrawStatus = "Pending") (Done)
/**
 * It fetches all the pending withdrawals from the database and paginates them.
 * </code>
 *
 *
 * A:
 *
 * I think you should use <code></code> to get the first element of the array that matches
 * the condition.
 * <code>const showAllWithdraw = async (req, res) =&gt; {
 *   let { page } = req.query;
 *   const query = {
 *     "referralWithDrawHistory.withDrawStatus": "Pending",
 *     "referralWithDrawHistory": {
 *       : {
 *         withDrawStatus: "Pending"
 *       }
 *     }
 *   };
 *
 *   if (page === undefined) page = 1;
 *
 *   const pageLimit = 10;
 *   const skip = pageLimit * (page - 1);
 *   const dataCount = await dataCounter(Referrals, pageLimit, query);
 * @param req - The request object.
 * @param res - the response object
 */
const showAllWithdraw = async (req, res) => {
  let { page } = req.query;
  const query = { "referralWithDrawHistory.withDrawStatus": "Pending" };

  if (page === undefined) page = 1;

  const pageLimit = 10;
  const skip = pageLimit * (page - 1);
  const dataCount = await dataCounter(Referrals, pageLimit, query);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, pageLimit, link, dataCount);

  await Referrals.find(query)
    .populate({
      path: "referralUser",
      select: "name username email",
    })
    .skip(skip)
    .limit(pageLimit)
    .sort({ createdAt: -1 })
    .then((referrals) => {
      if (!referrals) {
        return res.status(204).send({
          message: `Referrals not found`,
        });
      }

      const data = referrals.map((referral) => {
        const {
          _id,
          referralCode,
          referralUser,
          referralTotalAmount,
          referralAvailableAmount,
          referralWithDrawCount,
          referralWithDrawHistory,
          referralWithDrawBank,
        } = referral;

        return {
          id: _id,
          referralUser,
          referralCode,
          referralTotalAmount,
          referralAvailableAmount,
          referralWithDrawCount,
          referralWithDrawHistory,
          referralWithDrawBank,
        };
      });

      res.send({
        message: "Referrals fetched successfully",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving referrals`,
      });
    });
};

// Verify bank account of a referral by the id in the request (Done)
/**
 * It updates the referralWithDrawBank.withDrawBankAccountVerified field to true.
 * </code>
 * @param req - request object
 * @param res - the response object
 * @returns The referral object is being returned.
 */
const verifyBank = (req, res) => {
  const id = req.params.id;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Invalid ID",
    });
  }

  Referrals.findByIdAndUpdate(
    id,
    { "referralWithDrawBank.withDrawBankAccountVerified": true },
    { new: false }
  )
    .then((referral) => {
      if (!referral) {
        return res.status(404).send({
          message: `Referral not found`,
        });
      }

      res.send({
        message: "Referral bank account verified successfully",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating referral`,
      });
    });
};

// Update withdraw status of a referral by the id in the request (Done)
/**
 * It updates the status of a referral withdraw request.
 * </code>
 * @param req - {
 * @param res - the response object
 * @returns The referral object with the updated referralWithDrawHistory array.
 */
const updateWDStatus = (req, res) => {
  const { id, wdID } = req.params;

  if (!id || !wdID || !ObjectId.isValid(wdID) || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Invalid ID",
    });
  }

  const { withDrawStatus } = req.body;

  if (!withDrawStatus) {
    return res.status(400).send({
      message: "Invalid data",
    });
  }

  Referrals.updateOne(
    {
      _id: id,
      "referralWithDrawHistory._id": wdID,
    },
    {
      $set: {
        "referralWithDrawHistory.$.withDrawStatus": withDrawStatus,
        "referralWithDrawHistory.$.withDrawDate": new Date().getTime(),
      },
    },
    { new: true }
  )
    .then((referral) => {
      if (!referral) {
        return res.status(404).send({
          message: `Referral not found`,
        });
      }

      res.send({
        message: "Referral withdraw status updated successfully",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating referral`,
      });
    });
};

export {
  findAll,
  findOne,
  addBankAccount,
  requestWD,
  showAllVerification,
  showAllWithdraw,
  verifyBank,
  updateWDStatus,
  changeReferralCode,
};
