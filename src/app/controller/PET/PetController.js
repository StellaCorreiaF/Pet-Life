const CreatePetService = require('../../service/PET/CreatePetService');
const DeletePetService = require('../../service/PET/DeletePetService');
const ListPetService = require('../../service/PET/ListPetService');
const UpdatePetService = require ('../../service/PET/UpdatePetService') 


const controllerPET = {  
    index: (request, response) => { 
      const listPet = ListPetService.listPetServ(); 
      response.json(listPet) 

    }, 
    
    listData: (request, response) =>{ 
      const {name} = request.body;  

      if (!name) { 
        return response.status(400).json({"erro":'Nome do Pet não informado'})
    } 

    const pet =ListPetService.listPetServ(name); 
    return response.json(pet)

    },

    create: (request, response) => {
      const { 
          name,
          peso,
          tipoSanguineo,
          raca,
          idade,
          endereco
  
      } = request.body;
  
      const pet = CreatePetService.createPet(
          name,
          peso,
          tipoSanguineo,
          raca,
          idade,
          endereco
      );
      if (!pet.sucess) {
        return response.status(400).json(pet.message)
      }
  
      return response.status(200).json(pet.message)
    },
  
    update: (request, response) => {
      const { id } = request.params
  
      const {
          name,
          peso,
          tipoSanguineo,
          raca,
          idade,
          endereco
  
      } = request.body;
  
  
      const updatedPet= UpdatePetService.updatePet(
          id,
          name,
          peso,
          tipoSanguineo,
          raca,
          idade,
          endereco
      )
      if (!updatedPet.sucess) {
        return response.status(400).json(updatedPet.message)
      }
  
      return response.status(200).json(updatedPet.message)     
    }, 

    delete: (request, response) => {
      const {id} = request.params 
      const result = DeletePetService.delete(id) 
      response.send(result)
    }
  
  
  };
  
  module.exports = controllerPET;