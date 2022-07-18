const Router = require("express"); 
const controller = require('./app/controller/PetController') 

const routes = new Router(); 

routes.get('/pets', controller.index) 

module.exports = routes;  


