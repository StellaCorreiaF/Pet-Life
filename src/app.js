import express from "express";
import db from "./database/index.js";
import routes from "./routes.js";
class App {
  constructor() {
    this.server = express();

    this.initializeDatabase();
    this.middlewares();
    this.routes();

    console.log('chegou aqui em app app ')
  }

  middlewares() {
    this.server.use(express.json());
    
console.log('chegou em app middlewares()')
  }

  routes() {
    this.server.use(routes);
  }

  async initializeDatabase() {
    try {
      await db.authenticate();
      console.log("Conexão com o banco de dados realizada com sucesso");
    } catch (error) {
      console.log(
        "Não foi possível conectar ao banco de dados: ",
        error.message
      );
    }
  }

}

export default new App().server;
