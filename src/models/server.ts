const express = require('express');
import { Request, Response , Application } from 'express';
import { routerApi } from '../routes';

export default  class Server {
  private app: Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';//Configuramos variable de entorno para le puerto
    this.middleware();
    this.routes();
    this.listen();
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
}

