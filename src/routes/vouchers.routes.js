import { useVoucher } from "../controllers/vouchers.controller.js";
import { login } from "../middlewares/auth.js";
import Express from "express";
const router = Express.Router();

const vouchersRouter = (app) => {
  router.post("/:voucherCode", login, useVoucher);

  app.use("/v1/vouchers", router);
};

export default vouchersRouter;
