import Consultas from "../../models/Consultas";
import Pets from "../../models/Pets";
import Veterinarios from "../../models/Veterinarios";

export default class UpdateConsultaService {
  constructor() {}

  async update(
    id,
    data,
    descricao,
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
   
      const [numeroDeRegistrosAtualizados] = await Consultas.update(
        {
          id,
          data,
          descricao,
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