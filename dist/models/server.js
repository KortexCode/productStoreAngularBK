"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000'; //Configuramos variable de entorno para le puerto
        this.middleware();
        this.routes();
        this.listen();
    }
    middleware() {
        this.app.use(express.json());
    }
    routes() {
        (0, routes_1.routerApi)(this.app);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando por el puerto', this.port);
        });
    }
}
exports.default = Server;
