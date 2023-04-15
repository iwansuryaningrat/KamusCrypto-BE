import { create as liveclassTransaction } from "../controllers/liveclassTransaction.controller.js";
import { create as membershipTransaction } from "../controllers/membershipTransaction.controller.js";

import { login } from "../middlewares/auth.js";

import Express from "express";
const router = Express.Router();

const transactionRouter = (app) => {
  router.post("/:userId/liveclass", login, liveclassTransaction);
  router.post("/:userId/membership", login, membershipTransaction);

  app.use("/v1/transaction", router);
};

export default transactionRouter;
