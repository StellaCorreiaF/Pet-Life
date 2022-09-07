import express from "express";
import db from "./database";
import routes from "./routes";
//const multer = require('multer')
//const multerConfig = require('./config/multer')

class App {
  constructor() {
    this.server = express();
    //this.uploadFile = multer({storage: multerConfig})

    this.middlewares();
    this.routes();
  }

  //trabalhando em formato json
  middlewares() {
    this.server.use(express.json());
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

module.exports = new App().server;
