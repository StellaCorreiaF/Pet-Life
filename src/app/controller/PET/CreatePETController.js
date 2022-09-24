import CreatePetService from "../../service/PET/CreatePetService"

export default class CreatePETController {
    constructor() {
      this.service = new CreatePetService();
    }
    async create(request, response) {
      const tutor = request.user; 
      const {
          nome,
          peso,
          tipoSanguineo,
          raca,
          idade
      } = request.body;
  
      const pet = await this.service.create(
          nome,
          peso,
          tipoSanguineo,
          raca,
          idade,
          tutor.id
      );
  
      return response.status(201).json(pet.message)
    }
}