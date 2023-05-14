import { create as liveclassTransaction } from "../controllers/liveclassTransaction.controller.js";
import { create as membershipTransaction } from "../controllers/membershipTransaction.controller.js";
import {
  getAllMembershipTransactions,
  getAllLiveclassTransactions,
  getMembershipTransactionById,
  getLiveclassTransactionById,
} from "../controllers/transactions.controller.js";

import { login } from "../middlewares/auth.js";

import Express from "express";
const router = Express.Router();

const transactionRouter = (app) => {
  router.get("/liveclass", login, getAllLiveclassTransactions);
  router.get("/membership", login, getAllMembershipTransactions);
  router.get("/:transactionId/liveclasss", login, getLiveclassTransactionById);
  router.get("/:transactionId/membership", login, getMembershipTransactionById);
  router.post("/:userId/liveclass", login, liveclassTransaction);
  router.post("/:userId/membership", login, membershipTransaction);

  app.use("/v1/transaction", router);
};

export default transactionRouter;
