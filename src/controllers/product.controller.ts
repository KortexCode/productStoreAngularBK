import { Response, Request } from "express";
import { productModel } from "../models/product.model";

//Obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const productList = await productModel.findAll();
    res.json(productList);
  } catch (error) {
    console.error(error);
  }
};
//Obtener un producto
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await productModel.findByPk(id);
    if (product) {
      return res.json({
        id: id,
        products: product,
      });
    } else {
      return res.status(404).json({
        msg: `Product not found with ${id}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
//Crear un producto
export const postCreateProduct = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const product = await productModel.findOne({where: {
      product_name: body.product_name,
    }})
    if(product){
      res.json({
        status: 'false',
        message: 'Product already exist'
      })
    }else {
      await productModel.create(body);
      res.json({
        status:'true',
        message: "product created",
        product: req.body,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({
      msg: "An error has ocurred, comunicate with support",
      error,
    });
  }
};
//Actualizar un producto
export const putProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await productModel.findByPk(id);
    if (!product) {
      return res.status(404).json({
        msg: `Product with id ${id} not found`,
      });
    } else {
      const {
        name: product_name,
        description: product_description,
        price,
        stock,
      } = req.body;

      await product.update({ product_name, product_description, price, stock });
      res.json({
        msg: "Product was updated succesfully",
        id,
        product: body,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mgs: "An error has ocurred, comunicate with support",
      error,
    });
  }
};


