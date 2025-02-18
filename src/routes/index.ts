const express = require("express");
import { Request, Response, Application } from "express";
import productRouter from "./product.route";
const router = express.Router();

//Se crea función routerApi, esta función generará rutas para la api
function routerApi(app: Application) {
  //Ruta raiz
  router.get("/", (req: Request, res: Response) => {
    res.send("Conectado");
  });
  //Ruta de productos
  router.use("/products", productRouter);
  //url común de la Api
  app.use("/api/v1", router);
}

export { routerApi };
