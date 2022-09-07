import Router from "express"; 

//PET CONTROLLERS
import CreatePETController from "./app/controller/PET/CreatePETController";
import UpdatePETController from "./app/controller/PET/UpdatePETController"; 
import ListPETController from "./app/controller/PET/ListPETController"; 
import DeletePETController from "./app/controller/PET/DeletePETController";

//MIDDLEWARES

import petValidator from "./middlewares/PetValidator";

const routes = new Router();

//PETS
const createPETController = new CreatePETController;
const updatePETController = new UpdatePETController; 
const listPETController = new ListPETController;  
const deletePETController = new DeletePETController; 



// ROTAS PETS
//routes.get('/pets', controllerPET.index)
//routes.get("/pets", controllerPET.listData); 

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


export default  routes; 
