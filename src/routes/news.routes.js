import { findAllforUsers, findOne } from "../controllers/news.controller.js";
import Express from "express";
const router = Express.Router();

const newsRouter = (app) => {
  router.get("/", findAllforUsers);
  router.get("/:id", findOne);

  app.use("/news", router);
};

export default newsRouter;
