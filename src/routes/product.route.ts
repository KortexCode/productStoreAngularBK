import express from "express";
import {
  getProduct,
  getProducts,
  deleteProduct,
  postProduct,
  putProduct,
  patchProduct,
} from "../controllers/product.controller";

const router = express.Router();
//RUTAS PARA EL ENDPOINT DE PRODUCTOS
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProduct);
router.put("/:id", putProduct);
router.patch("/:id", patchProduct);
router.delete("/:id", deleteProduct);

export default router;
