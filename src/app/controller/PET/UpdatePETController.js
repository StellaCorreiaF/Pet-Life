import UpdatePetService from "../../service/PET/UpdatePetService";

export default class UpdatePETController {
  constructor() {
    this.service = new UpdatePetService();
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      nome,
      peso,
      tipoSanguineo,
      raca,
      idade,
      especie,
      porte
    } = request.body;

    const updatedPet = await this.service.update(
      id,
      nome,
      peso,
      tipoSanguineo,
      raca,
      idade,
      porte,
      especie,
    )
    if (!updatedPet.sucess) {
      return response.status(400).json(updatedPet.message);
    }
    return response.status(200).json(updatedPet)
  }
}
