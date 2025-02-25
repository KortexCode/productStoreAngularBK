import { Response, Request } from "../util/express";
import { bcrypt } from "../util/bcrypt";
import { userModel } from "../models/user.model";

const postUsers = async (req: Request, res: Response) => {
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
    res.status(400).json({
      msg: "An error ocurred with creation of the user",
      error,
    });
  }
};
const postUserLogin = async (req: Request, res: Response) => {
  const { msg } = req.body;
  res.json({
    msg,
  });
};

export { postUsers, postUserLogin };
