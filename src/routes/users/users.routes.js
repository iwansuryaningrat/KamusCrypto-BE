import {
  findOne,
  update,
  changePassword,
  changeProfilePicture,
  requestUserActivation,
  deletePicture,
} from "../../controllers/users.controller.js";
import { login } from "../../middlewares/auth.js";
import Express from "express";
const router = Express.Router();

const usersRouter = (app) => {
  router.get("/:id", login, findOne);
  router.put("/:id", login, update);
  router.put("/:id/changepassword", login, changePassword);
  router.put("/:id/changepicture", login, changeProfilePicture);
  router.post("/:id/requestuseractivation", login, requestUserActivation);
  router.delete("/:id/deletepicture", login, deletePicture);

  app.use("/v1/users", router);
};

export default usersRouter;
