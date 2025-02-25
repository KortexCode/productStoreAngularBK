import { Router, Request, Response, Application } from "../util/express";
import productRouter from "./product.route";
import userRouter from "./user.route";
const router = Router();

//Se crea función routerApi, esta función generará rutas para la api
function routerApi(app: Application) {
  //Ruta raiz
  router.get("/", (req: Request, res: Response) => {
    res.send("Conectado");
  });
  //Ruta de productos
  router.use("/products", productRouter);
  //Ruta de login
  router.use("/users", userRouter);
  //url común de la Api
  app.use("/api/v1", router);
}

export { routerApi };
