const CreatePetService = require('../../service/PET/CreatePetService')
const UpdatePetService = require ('../../service/PET/UpdatePetService')

const controllerPET = {

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
  
  
  };
  
  module.exports = controllerPET;