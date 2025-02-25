import { Router } from "../util/express";
import {
  getProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../controllers/product.controller";

const router = Router();
//RUTAS PARA EL ENDPOINT DE PRODUCTOS
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProduct);
router.put("/:id", putProduct);

export default router;
