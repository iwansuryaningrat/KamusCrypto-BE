import {
  findAllForProUsers,
  findOne,
} from "../../controllers/liveclass.controller.js";
import { login, proMember } from "../../middlewares/auth.js";
import Express from "express";
const router = Express.Router();

const liveClassProRouter = (app) => {
  router.get("/", login, proMember, findAllForProUsers);
  router.get("/:id", login, proMember, findOne);

  app.use("/v1/pro/liveclass", router);
};

export default liveClassProRouter;
