import { Sequelize } from 'sequelize';
import { config } from '../../config/config';
console.log(config)
const sequelize = new Sequelize(config.dbName, config.dbHost, config.dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

export {sequelize};
