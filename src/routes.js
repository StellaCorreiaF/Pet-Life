
const Router = require("express"); 
const controllerPET = require('./app/controller/PET/PetController'); 
const vetController = require("./app/controller/VetController");
const routes = new Router();



// ROTAS PETS
// routes.get('/pets', controllerPET.index)
routes.get("/pets", controllerPET.listData)
routes.post("/pets", controllerPET.create);
routes.put("/pets/:id", controllerPET.update); 
routes.delete('/pets/:id', controllerPET.delete)

//ROTAS TUTORES

// ROTAS VET
routes.get("/vets", vetController.listAll);
routes.post("/vets", vetController.create);
routes.put("/vets/:id", vetController.update);
routes.delete("/vets/:id", vetController.delete); 

module.exports = routes;
