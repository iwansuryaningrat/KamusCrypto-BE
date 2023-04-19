import {
  notificationController,
  notificationrecurring,
  notificationpay,
} from "../controllers/notification.controller.js";
import Express from "express";
const router = Express.Router();

const notificationsRouter = (app) => {
  router.post("/payment", notificationController);
  router.post("/recurring", notificationrecurring);
  router.post("/pay-account", notificationpay);

  app.use("/v1/notifications", router);
};

export default notificationsRouter;
