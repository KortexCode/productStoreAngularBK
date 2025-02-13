"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchProduct = exports.putProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        products: 'Aquí van los productos XD'
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const paramId = req.params;
    res.json({
        id: paramId,
        products: 'Aquí iría el producto si lo tuviera = D'
    });
};
exports.getProduct = getProduct;
const postProduct = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'Producto a eliminar',
        products: body,
    });
};
exports.postProduct = postProduct;
const putProduct = (req, res) => {
    const paramId = req.params;
    const body = req.body;
    res.json({
        msg: 'Producto a actualizar parcialmente',
        id: paramId,
        product: body,
    });
};
exports.putProduct = putProduct;
const patchProduct = (req, res) => {
    const paramId = req.params;
    const body = req.body;
    res.json({
        msg: 'Producto a actualizar parcialmente',
        id: paramId,
        products: body,
    });
};
exports.patchProduct = patchProduct;
const deleteProduct = (req, res) => {
    const paramId = req.params;
    res.json({
        id: paramId,
        products: 'El producto eliminado'
    });
};
exports.deleteProduct = deleteProduct;
