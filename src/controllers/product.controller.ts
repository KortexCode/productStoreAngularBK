import { Response, Request } from "express";

const getProducts = (req: Request, res: Response) => {
  res.json({
    products: 'Aquí van los productos XD'
  })
};

const getProduct = (req: Request, res: Response) => {
  const paramId = req.params;
  res.json({
    id: paramId,
    products: 'Aquí iría el producto'
  })
};

const postProduct = (req: Request, res: Response) => {
  const body = req.body;

  res.json({
    msg: 'crear un producto',
    products: body,
  })
};
const putProduct = (req: Request, res: Response) => {
  const paramId = req.params;
  const body = req.body;
  res.json({
    msg: 'Producto a actualizar completamente',
    id: paramId,
    product: body,
  })
};
const patchProduct = (req: Request, res: Response) => {
  const paramId = req.params;
  const body = req.body;
  res.json({
    msg: 'Producto a actualizar parcialmente',
    id: paramId,
    products: body,
  })
};
const deleteProduct = (req: Request, res: Response) => {
  const paramId = req.params;
  res.json({
    id: paramId,
    products: 'El producto eliminado'
  })
};


export {getProducts, getProduct, deleteProduct, postProduct, putProduct, patchProduct}
