const Router = require("express"); 
const controller = require('./app/controller/PetController') 

const controllerPET = require('./app/controller/PET/PetController')

const routes = new Router(); 


// ROTAS PETS
//routes.get('/pets', controller.index)

routes.post("/pets", controllerPET.create);
routes.put("/pets/:id", controllerPET.update);

//ROTAS TUTORES

//ROTAS VETERINARIOS
//routes.post('veterinarioS', vetController.create)

module.exports = routes;  


