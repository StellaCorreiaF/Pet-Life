
import Pets from '../../models/Pets';
import Procedimentos from '../../models/Procedimentos';
import Veterinarios from '../../models/Veterinarios';

const { v4 } = require('uuid')

export default class CreateProcedimentoService {
  constructor() {
  }

  async create(
    tipo, data, descricao, petId, vetId ) {
    try {
      const pet = await Pets.findByPk(petId)
      const vet = await Veterinarios.findByPk(vetId)
      console.log("PET : ", pet)
      console.log("VET: ", vet)

      if (!pet) {
        return {
          sucess: false,
          message: "Pet não encontrado"
        }
      }

      if (!vet) {
        return {
          sucess: false,
          message: "Veterinário não encontrado"
        }
      }

      const newProcedure = await Procedimentos.create({
        id: v4(),
        tipo,
        data,
        descricao,
        petId: pet.id,
        vetId: vet.id,

      })
      return {
        sucess: true,
        message: newProcedure, pet, vet
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}