import CreatePetService from "../../service/PET/CreatePetService"

export default class CreatePETController {
    constructor() {
      this.service = new CreatePetService();
    }
  
    async create(request, response) {
      const {
          nome,
          peso,
          tipoSanguineo,
          raca,
          idade,
          tutorId
      } = request.body;
  
      const pet = await this.service.create(
          nome,
          peso,
          tipoSanguineo,
          raca,
          idade,
          tutorId
      );
  
      return response.status(201).json(pet.message)
    }
}