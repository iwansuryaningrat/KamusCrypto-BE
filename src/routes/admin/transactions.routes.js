import {
  getMembershipTransactionById,
  getLiveclassTransactionById,
  getAllMembershipTransactionsforAdmin,
  getAllLiveclassTransactionsforAdmin,
} from "../../controllers/transactions.controller.js";

import { login, admin } from "../../middlewares/auth.js";

import Express from "express";
const router = Express.Router();

const transactionAdminRouter = (app) => {
  router.get("/liveclass", login, admin, getAllLiveclassTransactionsforAdmin);
  router.get("/membership", login, admin, getAllMembershipTransactionsforAdmin);
  router.get(
    ":transactionId/liveclass",
    login,
    admin,
    getLiveclassTransactionById
  );
  router.get(
    ":transactionId/membership",
    login,
    admin,
    getMembershipTransactionById
  );

  app.use("/v1/admin/transaction", router);
};

export default transactionAdminRouter;
