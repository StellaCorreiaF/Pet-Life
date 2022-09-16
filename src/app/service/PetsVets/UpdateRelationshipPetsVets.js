import PetsVets from "../../models/PetsVets";
import Pets from "../../models/Pets";
import Veterinarios from "../../models/Veterinarios";

export default class UpdateRelationshipPetsVetsService {
  constructor() {}

  async update(
    id,
    petId,
    vetId,
  ) {
    try { 
        const pet = await Pets.findByPk(petId)
        const vet = await Veterinarios.findByPk(vetId)

        if(!pet){
            return { message: "Pet não localizado"}
        }
        if(!vet){
            return { message: "Veterinário não localizado"}
        }
   
      const [numeroDeRegistrosAtualizados] = await PetsVets.update(
        {
          id,
          petId,
          vetId
        },
        {
          where: { id },
        }
      );
      if (numeroDeRegistrosAtualizados === 0) {
        return { message: "Dados iguais" };
      } else {
        return {
            numeroDeRegistrosAtualizados, pet, vet
        };
      }
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}