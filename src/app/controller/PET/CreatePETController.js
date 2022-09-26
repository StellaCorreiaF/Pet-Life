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
          idade,
          porte,
          especie        
      } = request.body;
      
      const pet = await this.service.create({
        nome:  nome,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        raca: raca,
        idade: idade,
        porte: porte,
        especie: especie,
        tutorId: tutor.id
    });
      if (!pet.sucess) {
        return response.status(400).json(pet.message);
      }
      return response.status(201).json(pet.message)
    }
}