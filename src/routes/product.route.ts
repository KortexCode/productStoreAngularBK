import { Router } from "../util/express";
import * as productController from "../controllers/product.controller";
import validateToken from "./validate-token";

const router = Router();
//RUTAS PARA EL ENDPOINT DE PRODUCTOS
router.get("/", validateToken,productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/create/product", productController.postCreateProduct);
router.put("/:id", productController.putProduct);

export default router;
