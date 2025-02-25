import { Router } from "../util/express";
import { postUsers } from "../controllers/user.controller";
import { postUserLogin } from "../controllers/user.controller";

const router = Router();

router.post("/", postUsers);
router.post("/login", postUserLogin);

export default router;
