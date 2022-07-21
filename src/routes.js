const Router = require("express");
const controller = require("./app/controller/PetController");
const vetController = require("./app/controller/VetController");

const routes = new Router();

routes.get("/pets", controller.index);

// ROTAS VET
routes.get("/vets", vetController.listAll);
routes.post("/vets", vetController.create);
routes.put("/vets/:id", vetController.update);

module.exports = routes;
