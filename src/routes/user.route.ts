import { Router } from "../util/express";
import * as userController from "../controllers/user.controller";
import validateToken from "./validate-token";
/* import  getLoginUser from "../controllers/user.controller"; */

const router = Router();

router.post("/create/user", userController.postUserCreate);
router.post("/login", userController.loginUser);

export default router;
