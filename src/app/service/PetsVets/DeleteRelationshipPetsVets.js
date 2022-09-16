import PetsVets from "../../models/PetsVets";

export default class DeleteRelationshipPetsVetsService {
  constructor() {}

  async delete(id) {
    try {
      const petsVets = await PetsVets.findByPk(id);

      if (!petsVets) {
        return { mensagem: " Relacionamento entre pet e vet não encontrado" };
      }

      const petsVetsRemovido = await petsVets.destroy();
      return petsVetsRemovido;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}