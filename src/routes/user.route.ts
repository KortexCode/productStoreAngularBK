import { Router } from "../util/express";
import  * as userController  from "../controllers/user.controller";
/* import  getLoginUser from "../controllers/user.controller"; */

const router = Router();

router.post("/", userController.postUser);
router.post("/login", userController.getLoginUser);

export default router;
