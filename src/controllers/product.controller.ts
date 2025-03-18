import { Response, Request } from "express";
import { productModel } from "../models/product.model";

//Obtener todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const productList = await productModel.findAll();
    res.send(productList);
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
export const postProduct = async (req: Request, res: Response) => {
  const {
    name: product_name,
    description: product_description,
    price,
    stock,
  } = req.body;
  try {
    await productModel.create({
      product_name,
      product_description,
      price,
      stock,
    });
    res.json({
      msg: "product created",
      products: req.body,
    });
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
export const patchProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    msg: "Producto a actualizar parcialmente",
    id,
    products: body,
  });
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await productModel.findByPk(id);
    if (!product) {
      res.status(404).json({
        msg: `product with di ${id} no found`,
      });
    } else {
      await product.destroy();
      res.json({
        mgs: "Product was deleted with success",
      });
    }
  } catch (error) {
    console.error(error);
  }
};
