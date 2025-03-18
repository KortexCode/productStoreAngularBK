import { sequelize, DataTypes } from "../db/connection";

const userModel = sequelize.define(
  "users",
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export { userModel };
