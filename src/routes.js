const Router = require("express"); 
const controller = require('./app/controller/PetController');
const vetController = require('./app/controller/VetController'); 

const routes = new Router(); 

routes.get('/pets', controller.index) 


// ROTAS VET
routes.post('/vets', vetController.create)
module.exports = routes;  


