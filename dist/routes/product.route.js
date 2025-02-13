"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
//RUTAS PARA EL ENDPOINT DE PRODUCTOS
router.get('/', product_controller_1.getProducts);
router.get('/:id', product_controller_1.getProduct);
router.post('/', product_controller_1.postProduct);
router.put('/:id', product_controller_1.putProduct);
router.patch('/:id', product_controller_1.patchProduct);
router.delete('/:id', product_controller_1.deleteProduct);
exports.default = router;
