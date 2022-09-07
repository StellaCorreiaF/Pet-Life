import Router from "express";
const controllerPET = require("./app/controller/PET/PetController");
const vetController = require("./app/controller/VET/VetController");
const TutorController = require("./app/controller/TUTOR/TutorController");
const routes = new Router();

// ROTAS PETS
// routes.get('/pets', controllerPET.index)
routes.get("/pets", controllerPET.listData);
routes.post("/pets", controllerPET.create);
routes.put("/pets/:id", controllerPET.update);
routes.delete("/pets/:id", controllerPET.delete);

//ROTAS TUTORES
routes.get("/tutor", TutorController.listTutServ);
routes.post("/tutor", TutorController.create);
routes.put("/tutor/:id", TutorController.update);
routes.delete("/tutor/:id", TutorController.delete);

// ROTAS VET
routes.get("/vets", vetController.listAll);
routes.post("/vets", vetController.create);
routes.put("/vets/:id", vetController.update);
routes.delete("/vets/:id", vetController.delete);

module.exports = routes;
