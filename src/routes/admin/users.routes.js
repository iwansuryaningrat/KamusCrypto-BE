import {
  findAll,
  findOne,
  update,
  changePassword,
  changeProfilePicture,
  deleteUSer,
  changeProMemberToBasicMember,
  deletePicture,
} from "../../controllers/users.controller.js";
import { login, admin } from "../../middlewares/auth.js";
import Express from "express";
const router = Express.Router();

const usersAdminRouter = (app) => {
  router.get("/", admin, findAll);
  router.get("/:id", login, admin, findOne);
  router.put("/:id", login, admin, update);
  router.put("/:id/changepassword", login, admin, changePassword);
  router.put("/:id/changepicture", login, admin, changeProfilePicture);
  router.delete("/:id", login, admin, deleteUSer);
  router.put("/subsdeactivate", login, admin, changeProMemberToBasicMember);
  router.delete("/:id/deletepicture", login, admin, deletePicture);

  app.use("/v1/admin/users", router);
};

export default usersAdminRouter;
