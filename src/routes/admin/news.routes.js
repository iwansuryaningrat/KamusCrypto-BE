import {
  create,
  uploadImage,
  findAll,
  findOne,
  update,
  updateStatus,
  deleteOne,
} from "../../controllers/news.controller.js";
import { login, admin } from "../../middlewares/auth.js";
import Express from "express";
const router = Express.Router();

const newsAdminRouter = (app) => {
  router.get("/", login, admin, findAll);
  router.get("/:id", login, admin, findOne);
  router.post("/", login, admin, create);
  router.post("/:id/upload-image", login, admin, uploadImage);
  router.put("/:id", login, admin, update);
  router.put("/status/:id", login, admin, updateStatus);
  router.delete("/:id", login, admin, deleteOne);

  app.use("/v1/admin/news", router);
};

export default newsAdminRouter;
