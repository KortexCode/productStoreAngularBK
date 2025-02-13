"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = routerApi;
const express = require('express');
const product_route_1 = __importDefault(require("./product.route"));
const router = express.Router();
//Se crea función routerApi, esta función generará rutas para la api
function routerApi(app) {
    //Ruta raiz
    router.get('/', (req, res) => {
        res.send('Conectado');
    });
    //Ruta de productos
    router.use('/products', product_route_1.default);
    //url común de la Api
    app.use('/api/v1', router);
}
