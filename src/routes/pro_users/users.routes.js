import {
  findOne,
  update,
  changePassword,
  changeProfilePicture,
  createReferralCode,
  deletePicture,
} from "../../controllers/users.controller.js";
import { login, proMember } from "../../middlewares/auth.js";
import Express from "express";
const router = Express.Router();

const usersProRouter = (app) => {
  router.get("/:id", login, proMember, findOne);
  router.put("/:id", login, proMember, update);
  router.put(
    "/:id/changepassword",
    login,
    proMember,

    changePassword
  );
  router.put(
    "/:id/changepicture",
    login,
    proMember,

    changeProfilePicture
  );
  router.put(
    "/:id/createreferralcode",
    login,
    proMember,

    createReferralCode
  );
  router.delete(
    "/:id/deletepicture",
    login,
    proMember,

    deletePicture
  );

  app.use("/v1/pro/users", router);
};

export default usersProRouter;
