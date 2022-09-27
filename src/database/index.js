import { Sequelize } from "sequelize";
import databaseConfig from "../config/Database.js";

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
  }
}

export default new Database().connection;
//para criar as migrations: npx sequelize migration:create --name=createTrainers
// executar migration:  npx sequelize db:migrate