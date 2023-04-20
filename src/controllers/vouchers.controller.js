import db from "../models/index.js";
const Vouchers = db.vouchers;
const Users = db.users;
const Referrals = db.referrals;
import dataCounter from "../helpers/dataCounter.js";
import paginationLinks from "../helpers/paginationLinks.js";

// Find All Vouchers with Pagination (Done)
const findAll = async (req, res) => {
  let { page } = req.query;

  if (page === undefined) page = 1;

  const limit = 10;
  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Videos, limit, condition);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  Vouchers.find()
    .skip(skip)
    .limit(limit)
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Vouchers not found.",
        });
      }

      const data = result.map((item) => {
        const {
          _id,
          voucherCode,
          voucherName,
          voucherDescription,
          voucherDiscount,
          voucherQuota,
          voucherType,
          forNewUser,
          status,
        } = item;

        return {
          id: _id,
          voucherCode,
          voucherName,
          voucherDescription,
          voucherDiscount,
          voucherQuota,
          voucherType,
          forNewUser,
          status,
        };
      });

      return res.send({
        message: "Vouchers successfully fetched",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while retrieving vouchers.",
      });
    });
};

// Find a Voucher (Done)
const findOne = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "Voucher ID is required.",
    });
  }

  Vouchers.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Voucher not found",
        });
      }

      const {
        _id,
        voucherCode,
        voucherName,
        voucherDescription,
        voucherDiscount,
        voucherQuota,
        voucherType,
        forNewUser,
        status,
      } = result;

      const data = {
        id: _id,
        voucherCode,
        voucherName,
        voucherDescription,
        voucherDiscount,
        voucherQuota,
        voucherType,
        forNewUser,
        status,
      };

      res.send({
        message: "Voucher was fetched",
        data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while fetch voucher.",
      });
    });
};

// Create Voucher (Done)
const create = (req, res) => {
  const {
    voucherCode,
    voucherName,
    voucherDescription,
    voucherDiscount,
    voucherQuota,
    voucherType,
    forNewUSer,
  } = req.body;

  if (!voucherCode || !voucherName || !voucherDiscount || !voucherQuota) {
    return res.status(400).send({
      message: "Voucher code, name, discount and quota are required.",
    });
  }

  const voucher = new Vouchers({
    voucherCode,
    voucherName,
    voucherDescription,
    voucherDiscount,
    voucherQuota,
    voucherType,
    forNewUSer,
  });

  voucher
    .save()
    .then((result) => {
      res.status(201).send({
        message: "Voucher was created",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while creating voucher.",
      });
    });
};

// Delete Voucher (Done)
const deleteVoucher = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "Voucher ID is required.",
    });
  }

  Vouchers.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Voucher not found",
        });
      }

      res.send({
        message: "Voucher was deleted",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while delete voucher.",
      });
    });
};

// Update Voucher
const update = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "Voucher ID is required.",
    });
  }

  const {
    voucherCode,
    voucherName,
    voucherDescription,
    voucherDiscount,
    voucherQuota,
    voucherType,
    isActive,
    forNewUser,
  } = req.body;

  Vouchers.findByIdAndUpdate(
    id,
    {
      voucherCode,
      voucherName,
      voucherDescription,
      voucherDiscount,
      voucherQuota,
      voucherType,
      isActive,
      forNewUser,
    },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Voucher not found",
        });
      }

      res.send({
        message: "Voucher was updated",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while update voucher.",
      });
    });
};

// Use Voucher
const useVoucher = (req, res) => {
  const { voucherCode } = req.params;
  const { username } = req.body;

  if (!username || !voucherCode) {
    return res.status(400).send({
      message: "Username and voucher code are required.",
    });
  }

  Referrals.findOne({ referralCode: voucherCode, referralStatus: "Active" })
    .then((result) => {
      console.log(result);
      if (!result) {
        Vouchers.findOne({ voucherCode })
          .then((result) => {
            if (!result) {
              return res.status(404).send({
                message: "Voucher not found",
              });
            }

            res.send({
              message: "Voucher successfully used",
              data: result,
            });
          })
          .catch((err) => {
            return res.status(500).send({
              message: err.message || "Some error while fetch voucher.",
            });
          });
      } else {
        const email = result.email;

        Users.findOneAndUpdate(
          { email },
          {
            referalCount: result.referal.referalCount + 1,
            referalAccount: result.referal.referalAccount.push({ username }),
          },
          { new: true }
        )
          .then((result) => {
            res.send({
              message: "Voucher successfully used",
              data: result,
            });
          })
          .catch((err) => {
            return res.status(500).send({
              message: err.message || "Some error while use voucher.",
            });
          });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while use voucher.",
      });
    });
};

export { findAll, create, deleteVoucher, update, findOne, useVoucher };
