import Router from "express";
import CreateVetController from "./app/controller/VET/CreateVetController";
import ListAllVetsController from "./app/controller/VET/ListAllVetsController";
import UpdateVeterinarioController from "./app/controller/VET/UpdateVetController";
import DeleteVeterinarioController from "./app/controller/VET/DeleteVetController";
// import createVeterinarioService from "./app/service/VET/CreateVeterinarioService";
import UpdateVeterinarioService from "./app/service/VET/UpdateVeterinarioService";
import vetValidator from "./middlewares/VetValidator";
const controllerPET = require("./app/controller/PET/PetController");
//const vetController = require("./app/controller/VET/VetController");
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
//routes.get("/vets", vetController.listAll);
//routes.post("/vets", VetValidador, CreateVetController.create);
//routes.put("/vets/:id", vetController.update);
//routes.delete("/vets/:id", vetController.delete);

routes.post("/vets", vetValidator, async (req, res) => {
  const controller = new CreateVetController();
  return await controller.create(req, res);
});

routes.get("/vets", async (req, res) => {
  const controller = new ListAllVetsController();
  return await controller.listAll(req, res);
});

const updateVeterinarioService = new UpdateVeterinarioService();

routes.put("/vets/:id", async (req, res) => {
  const controller = new UpdateVeterinarioController();
  return await controller.update(req, res);
});

routes.delete("/vets/:id", async (req, res) => {
  const controller = new DeleteVeterinarioController();
  return await controller.delete(req, res);
});

// routes.put("/vets/:id", vetValidator, async (req, res) => {
//   const controller = new UpdateVeterinarioService();
//   return await controller.put(req, res);
// });

export default routes;
