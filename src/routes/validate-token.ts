import { config } from "../../config/config";
import { Request, Response, NextFunction } from "../util/express";
import { jwt } from "../util/jwt";

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  console.log("EL HEADER AUTH", token)
  try {
    if (token && token?.startsWith("Bearer")) {
      //Extraemos la palabra 'Bearer' del token para sólo usar la codificación
      const bearerToken = token.slice(7);
      //Verificamos el token y lo obtenemos
      const tokeVerified = jwt.verify(bearerToken, config.secretKey);
      console.log("token verificado", tokeVerified, );
      next();
    } else {
      res.status(401).json({
        msg: "Access denied",
      });
    }
  } catch (error) {
    //Si el token era errado o no existe capturamos el intento de conexión fraudulenta
    res.status(401).json({
      msg: "Insecure connection attempt",
      error,
    });
  }
};

export default validateToken;
