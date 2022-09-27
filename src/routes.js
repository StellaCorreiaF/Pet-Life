import Router from "express"; 

//VET CONTROLLERS
import CreateVetController from "./app/controller/VET/CreateVetController";
import ListAllVetsController from "./app/controller/VET/ListAllVetsController";
import UpdateVeterinarioController from "./app/controller/VET/UpdateVetController";
import DeleteVeterinarioController from "./app/controller/VET/DeleteVetController";

//PET CONTROLLERS
import CreatePETController from "./app/controller/PET/CreatePETController";
import UpdatePETController from "./app/controller/PET/UpdatePETController"; 
import ListPETController from "./app/controller/PET/ListPETController"; 
import DeletePETController from "./app/controller/PET/DeletePETController";

//TUTORS CONTROLLERS
import ListAllTutorController from "./app/controller/TUTOR/ListTutorController";
import CreateTutorController from "./app/controller/TUTOR/CreateTutorController";
import UpdateTutorController from "./app/controller/TUTOR/UpdateTutorController";
import DeleteTutorController from "./app/controller/TUTOR/DeleteTutorController";

// PROCEDURES CONTROLLERS
import CreateProcedController from "./app/controller/PROCEDIMENTOS/CreateProcedController" 
import ListProcedController from "./app/controller/PROCEDIMENTOS/ListProcedController" 
import DeleteProcedController from "./app/controller/PROCEDIMENTOS/DeleteProcedController" 
import UpdateProcedController from "./app/controller/PROCEDIMENTOS/UpdateProcedController"

//CONSULTS CONTROLLERS
import CreateConsultaController from "./app/controller/CONSULTAS/CreateConsultaController";
import ListAllConsultaController from "./app/controller/CONSULTAS/ListConsultaController";
import UpdateConsultaController from "./app/controller/CONSULTAS/UpdateConsultaController";
import DeleteConsultaController from "./app/controller/CONSULTAS/DeleteConsultaController";

//APPOINTMENTS CONTROLLERS
import AgendaController from "./app/controller/Agendamentos/AgendaController";
import HorarioController from "./app/controller/Agendamentos/HorarioController";

//MIDDLEWARES
import tutorValidator from "./middlewares/tutorValidator";
import vetValidator from "./middlewares/VetValidator";
import petValidator from "./middlewares/PetValidator";
import consultaValidator from "./middlewares/ConsultaValidator";


import LoginController from "./app/controller/AUTH/LoginController";
import loggedIn from "./middlewares/authValidator";
import {VetIsAuthorized, tutorIsAuthorized, isTutorOfPet, isTutorLoggedIsSameTarget,isVetLoggedIsSameTarget} from './middlewares/autorizationValidator';

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

//Procedimentos 

const createProcedController = new CreateProcedController(); 
const listProcedController = new ListProcedController(); 
const deleteProcedController = new DeleteProcedController(); 
const updateProcedController = new UpdateProcedController();  

//Consultas

const createConsultaController = new CreateConsultaController();
const listConsultaController = new ListAllConsultaController();
const updateConsultaController = new UpdateConsultaController();
const deleteConsultaController = new DeleteConsultaController();

//Horarios

const createHorarioController = new HorarioController();
const listHorariosController = new HorarioController();
const deleteHorarioController = new HorarioController();

//Agendamentos

const createAgendamentoController = new AgendaController();
const listAgendamentosController = new AgendaController();
const deleteAgendamentoController = new AgendaController();

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
routes.put("/vets/:id", loggedIn, VetIsAuthorized, isVetLoggedIsSameTarget, async (req, res) => {
  const controller = new UpdateVeterinarioController();
  return await controller.update(req, res);
});

routes.delete("/vets/:id", async (req, res) => {
  const controller = new DeleteVeterinarioController();
  return await controller.delete(req, res);
});

// ROTAS TUTOR

routes.get("/tutor", (req,res) =>  listAllTutorController.listAll(req,res));
routes.post("/tutor", tutorValidator, (req,res) =>  createTutorController.create(req,res));
routes.put("/tutor/:id", loggedIn, tutorIsAuthorized, isTutorLoggedIsSameTarget, (req,res) =>  updateTutorController.update(req,res));
routes.delete("/tutor/:id", (req,res) =>  deleteTutorController.delete(req,res));



// ROTAS PROCEDIMENTOS

routes.post("/procedimentos", loggedIn, (req, res)=>{ 
  createProcedController.create(req, res)
});    

routes.get("/procedimentos", loggedIn, VetIsAuthorized, (req,res)=>{ 
  listProcedController.listAll(req, res)
}); 
routes.get("/procedimentos/:id", loggedIn,  (req,res)=>{ 
  listProcedController.listAll(req, res)
}); 

routes.put('/procedimentos/:id', loggedIn, VetIsAuthorized,(req, res) =>{ 
  updateProcedController.update(req,res)
});  

routes.delete('/procedimentos/:id', (req,res) =>{ 
  deleteProcedController.delete(req, res)
}); 

// ROTAS CONSULTAS

routes.post("/consultas", loggedIn, consultaValidator, tutorIsAuthorized, (req, res) => {
  createConsultaController.create(req, res)
});

routes.get("/consultas", loggedIn, VetIsAuthorized, (req, res) => {
  listConsultaController.listAll(req, res)
});

routes.put("/consultas/:id",loggedIn, VetIsAuthorized, (req, res) => {
  updateConsultaController.update(req,res)
});

routes.delete("/consultas/:id", loggedIn, VetIsAuthorized,(req, res) => {
  deleteConsultaController.delete(req,res)
});

//login
routes.post('/login', async (req, res) => {
  await loginController.Login(req, res);
})

// ROTAS HORARIO

routes.post("/horarios",(req, res) => {
    createHorarioController.create(req, res)
});

routes.get("/horarios", (req, res) => {
    listHorariosController.listAll(req, res)
});

routes.delete("/horarios/:id", (req, res) => {
    deleteHorarioController.delete(req,res)
});

// ROTAS AGENDAMENTOS

routes.post("/agendamentos",(req, res) => {
  createAgendamentoController.create(req, res)
});

routes.get("/agendamentos", (req, res) => {
  listAgendamentosController.listAll(req, res)
});

routes.delete("/agendamentos/:id", (req, res) => {
  deleteAgendamentoController.delete(req,res)
});

export default  routes; 
