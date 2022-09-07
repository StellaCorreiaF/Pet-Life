import Router from "express";

import tutorValidator from "./middleware/tutorValidator";
import controllerPET from "./app/controller/PET/PetController";
import vetController from "./app/controller/VET/VetController";

import ListAllTutorController from "./app/controller/TUTOR/listTutorController";
import CreateTutorController from "./app/controller/TUTOR/createTutorController";
import UpdateTutorController from "./app/controller/TUTOR/updateTutorController";
import DeleteTutorController from "./app/controller/TUTOR/deleteTutorController";

const routes = new Router();

// ROTAS PETS
// routes.get('/pets', controllerPET.index)
routes.get("/pets", controllerPET.listData);
routes.post("/pets", controllerPET.create);
routes.put("/pets/:id", controllerPET.update);
routes.delete("/pets/:id", controllerPET.delete);

//ROTAS TUTORES
const createTutorController = new CreateTutorController();
const listAllTutorController = new ListAllTutorController();
const updateTutorController = new UpdateTutorController();
const deleteTutorController = new DeleteTutorController();

routes.get("/tutor", (req,res) =>  listAllTutorController.listAll(req,res));
routes.post("/tutor", tutorValidator, (req,res) =>  createTutorController.create(req,res));
routes.put("/tutor/:id", (req,res) =>  updateTutorController.update(req,res));
routes.delete("/tutor/:id", (req,res) =>  deleteTutorController.delete(req,res));

// ROTAS VET
routes.get("/vets", vetController.listAll);
routes.post("/vets", vetController.create);
routes.put("/vets/:id", vetController.update);
routes.delete("/vets/:id", vetController.delete);

module.exports = routes;
