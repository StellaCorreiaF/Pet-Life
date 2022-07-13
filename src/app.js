
const express = require('express');
const routes = require('./routes');
//const multer = require('multer')
//const multerConfig = require('./config/multer')

class App {
  constructor() {
    this.server = express();
    //this.uploadFile = multer({storage: multerConfig})

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server;