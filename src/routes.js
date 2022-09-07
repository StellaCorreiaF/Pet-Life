import Router from "express"; 

//PET CONTROLLERS
import CreateVetController from "./app/controller/VET/CreateVetController";
import ListAllVetsController from "./app/controller/VET/ListAllVetsController";
import CreatePETController from "./app/controller/PET/CreatePETController";
import UpdatePETController from "./app/controller/PET/UpdatePETController"; 
import ListPETController from "./app/controller/PET/ListPETController"; 
import DeletePETController from "./app/controller/PET/DeletePETController";

//MIDDLEWARES
import vetValidator from "./middlewares/VetValidator";

import petValidator from "./middlewares/PetValidator";

const routes = new Router();

//PETS
const createPETController = new CreatePETController;
const updatePETController = new UpdatePETController; 
const listPETController = new ListPETController;  
const deletePETController = new DeletePETController; 



// ROTAS PETS

routes.get('/pets', (req,res)=> 
    listPETController.index(req,res)
);

routes.post("/pets", petValidator,  (req,res) =>
    createPETController.create(req,res)
);

routes.put("/pets/:id", petValidator, (req,res) => 
    updatePETController.update(req,res)
);

routes.delete('/pets/:id', (req,res)=>  
    deletePETController.delete(req,res)

);

// ROTAS VET


routes.post("/vets", vetValidator, async (req, res) => {
  const controller = new CreateVetController();
  return await controller.create(req, res);
}
);

routes.get("/vets", async(req, res)=> {
  const controller = new ListAllVetsController();
  return await controller.listAll(req, res)
})

export default  routes; 
