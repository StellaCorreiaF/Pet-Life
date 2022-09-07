import express from "express";
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
}
export default new App().server; 
