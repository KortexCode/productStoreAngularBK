import { Response, Request } from "../util/express";
import { bcrypt } from "../util/bcrypt";
import { userModel } from "../models/user.model";
import { jwt } from "../util/jwt";
import { config } from "../../config/config";

//Crear un usuario
export const postUser = async (req: Request, res: Response) => {
  const { user_name, password, dateCreated } = req.body;
  //Se encripta el código
  const user_password = await bcrypt.hash(password, 10);

  try {
    //Consultamos si el usuario existe
    const userExisted = await userModel.findOne({
      where: {
        user_name,
      },
    });

    if (userExisted) {
      //Si el usuario ya existe enviamos mensaje
      const { user_name } = userExisted.dataValues;
      res.status(400).json({
        msg: `The user ${user_name} already exist`,
      });
    } else {
      //Creamos el usuario en la base de datos
      const userCreated = await userModel.create({
        user_name,
        user_password,
        dateCreated,
      });
      //Enviamos mensaje de exito
      res.status(200).json({
        msg: `User was created successfully`,
        userCreated,
      });
    }
  } catch (error) {
    //Enviamos mensaje de error
    res.status(403).json({
      msg: "An error ocurred with creation of the user",
      error,
    });
  }
};

//Validar inicio de sesión de un usuario
export const loginUser = async (req: Request, res: Response) => {
  const { user_name, user_password } = req.body;

  try {
    const user: any = await userModel.findOne({
      where: {
        user_name,
      },
    });

    //Validar si el usuario existe en la base de datos
    if (!user) {
      res.status(400).json({
        mgs: `User ${user_name} was not found`,
      });
      return;
    }
    //guardamos los datos del usuario
    const data = user.dataValues;
    //Validamos password
    const passwordValid = await bcrypt.compare(user_password, data.user_password);
    if (!passwordValid) {
      res.status(400).json({
        mgs: `User password incorrect`,
      });
      return;
    }
    //Generamos el token
    const token = jwt.sign(
      {
        sub: "Login",
        name: user_name,
      },
      config.secretKey,
      {
        expiresIn: "10000",
      },
    );
    console.log("TOKEN FIRMADO", token)
    //Respondemos el token
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({
      msg: "An error ocurred, server request failed",
      error,
    });
  }
};
