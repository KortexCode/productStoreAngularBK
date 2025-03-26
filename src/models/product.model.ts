import { DATE, DATEONLY } from "sequelize";
import { sequelize, DataTypes } from "../db/connection";

const productModel = sequelize.define(
  "products",
  {
    // Model attributes are defined here
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dateCreated: {
      type: DATE,
    }
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  },
);

export { productModel };
