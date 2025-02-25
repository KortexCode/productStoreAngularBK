const express = require("express");
import cors from "cors";
import { Application } from "express";
import { sequelize } from "../db/connection";
import { routerApi } from "../routes";
import { config } from "../../config/config";
import { productModel } from "./product.model";
import { userModel } from "./user.model";

export default class Server {
  private app: Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = config.port; //Configuramos variable de entorno para le puerto
    this.listen();
    this.middleware();
    this.routes();
    this.dbConnection();
  }
  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }
  routes() {
    routerApi(this.app);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Escuchando por el puerto", this.port);
    });
  }
  async dbConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      await productModel.sync();
      await userModel.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}
