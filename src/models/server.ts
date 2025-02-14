const express = require('express');
import { Request, Response, Application } from 'express';
import { sequelize } from '../db/connection';
import { routerApi } from '../routes';
import { config } from '../../config/config';

export default  class Server {
  private app: Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = config.port ;//Configuramos variable de entorno para le puerto
    this.middleware();
    this.routes();
    this.listen();
    this.dbConnection();
  }
  middleware() {
    this.app.use(express.json());
  }
  routes() {
    routerApi(this.app);
  }
  listen() {
    this.app.listen(this.port, ()=> {
      console.log('Escuchando por el puerto', this.port);
    })
  }
  async dbConnection() {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
}

