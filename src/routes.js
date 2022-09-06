import Router from "express"; 

//PET CONTROLLERS
import CreatePETController from "./app/controller/PET/CreatePETController";
import UpdatePETController from "./app/controller/PET/UpdatePETController";


const routes = new Router();

//PETS
const createPETController = new CreatePETController;
const updatePETController = new UpdatePETController;


// ROTAS PETS
//routes.get('/pets', controllerPET.index)
//routes.get("/pets", controllerPET.listData);

routes.post("/pets", (req,res) =>
    createPETController.create(req,res)
);

routes.put("/pets/:id", (req,res) => 
    updatePETController.update(req,res)
);

//routes.delete('/pets/:id', controllerPET.delete)


export default  routes; 
