import Router from "express"; 

//PET CONTROLLERS
import CreateVetController from "./app/controller/VET/CreateVetController";
import ListAllVetsController from "./app/controller/VET/ListAllVetsController";
import CreatePETController from "./app/controller/PET/CreatePETController";
import UpdatePETController from "./app/controller/PET/UpdatePETController"; 
import ListPETController from "./app/controller/PET/ListPETController"; 
import DeletePETController from "./app/controller/PET/DeletePETController"
import ListAllTutorController from "./app/controller/TUTOR/ListTutorController";
import CreateTutorController from "./app/controller/TUTOR/CreateTutorController";
import UpdateTutorController from "./app/controller/TUTOR/UpdateTutorController";
import DeleteTutorController from "./app/controller/TUTOR/DeleteTutorController";
import UpdateVeterinarioController from "./app/controller/VET/UpdateVetController";
import DeleteVeterinarioController from "./app/controller/VET/DeleteVetController";
import CreateConsultaController from "./app/controller/CONSULTAS/CreateConsultaController";
import ListAllConsultaController from "./app/controller/CONSULTAS/ListConsultaController";
import UpdateConsultaController from "./app/controller/CONSULTAS/UpdateConsultaController";
import DeleteConsultaController from "./app/controller/CONSULTAS/DeleteConsultaController";

//MIDDLEWARES
import tutorValidator from "./middlewares/tutorValidator";
import vetValidator from "./middlewares/VetValidator";
import petValidator from "./middlewares/PetValidator";
import consultaValidator from "./middlewares/ConsultaValidator";


import LoginController from "./app/controller/AUTH/LoginController";
import loggedIn from "./middlewares/authValidator";
import {VetIsAuthorized, tutorIsAuthorized, isTutorOfPet} from './middlewares/autorizationValidator';


const routes = new Router();

//PETS
const createPETController = new CreatePETController;
const updatePETController = new UpdatePETController; 
const listPETController = new ListPETController;  
const deletePETController = new DeletePETController; 


//Tutor
const createTutorController = new CreateTutorController();
const listAllTutorController = new ListAllTutorController();
const updateTutorController = new UpdateTutorController();
const deleteTutorController = new DeleteTutorController();


// consultas

const createConsultaController = new CreateConsultaController();
const listConsultaController = new ListAllConsultaController();
const updateConsultaController = new UpdateConsultaController();
const deleteConsultaController = new DeleteConsultaController();


//auth 
const loginController = new LoginController()

// ROTAS PETS

routes.get('/pets', loggedIn, VetIsAuthorized, (req,res)=> 
    listPETController.index(req,res)
);

routes.post("/pets", loggedIn, tutorIsAuthorized, petValidator,  (req,res) =>
    createPETController.create(req,res)
);

routes.put("/pets/:id", loggedIn, isTutorOfPet, petValidator, (req,res) => 
    updatePETController.update(req,res)
);

routes.delete('/pets/:id', loggedIn, isTutorOfPet, (req,res)=>  
    deletePETController.delete(req,res)
);

// ROTAS VET


routes.post("/vets", vetValidator, async (req, res) => {
  const controller = new CreateVetController();
  return await controller.create(req, res);
}
);

routes.get("/vets", loggedIn, async(req, res)=> {
  const controller = new ListAllVetsController();
  return await controller.listAll(req, res)
})
routes.put("/vets/:id", loggedIn, VetIsAuthorized, async (req, res) => {
  const controller = new UpdateVeterinarioController();
  return await controller.update(req, res);
});

routes.delete("/vets/:id", async (req, res) => {
  const controller = new DeleteVeterinarioController();
  return await controller.delete(req, res);
});

//Rotas Tutor
routes.get("/tutor", (req,res) =>  listAllTutorController.listAll(req,res));
routes.post("/tutor", tutorValidator, (req,res) =>  createTutorController.create(req,res));
routes.put("/tutor/:id", loggedIn, (req,res) =>  updateTutorController.update(req,res));
routes.delete("/tutor/:id", (req,res) =>  deleteTutorController.delete(req,res));



// rotas consultas
routes.post("/consultas",consultaValidator, (req, res) => {
  createConsultaController.create(req, res)
});

routes.get("/consultas", (req, res) => {
  listConsultaController.listAll(req, res)
});

routes.put("/consultas/:id", (req, res) => {
  updateConsultaController.update(req,res)
});

routes.delete("/consultas/:id", (req, res) => {
  deleteConsultaController.delete(req,res)
});


//login
routes.post('/login', async (req, res) => {
  await loginController.Login(req, res);
})

export default  routes; 
