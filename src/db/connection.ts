import { Sequelize, DataTypes } from "sequelize";
import { config } from "../../config/config";
const sequelize = new Sequelize(
  config.dbName,
  config.dbHost,
  config.dbPassword,
  {
    host: "localhost",
    dialect: "mysql",
  },
);

export { sequelize, DataTypes };
