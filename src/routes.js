const Router = require("express"); 
const controller = require('./app/controller/PetController') 

const routes = new Router(); 
// ROTAS PETS
routes.get('/pets', controller.index)

//ROTAS TUTORES

//ROTAS VETERINARIOS
routes.post('veterinarioS', vetController.create)

module.exports = routes;  


