import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.js";

class Database {
  constructor() {
    this.init();

    console.log('chegou em index database ')
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    console.log('chegou em index init')
  }
}

export default new Database().connection;
//para criar as migrations: npx sequelize migration:create --name=createTrainers
// executar migration:  npx sequelize db:migrate