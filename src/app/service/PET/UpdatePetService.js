import Pets from "../../models/Pets";

export default class UpdatePetService {
    constructor() {}
  
    async update(
        id,
        nome,
        peso,
        tipoSanguineo,
        raca,
        idade
    ) {
        try {
        const pet = await Pets.findByPk(id);
        
        if (!pet) {
            return {
                message: "Pet não encontrado"
            }
        }
        

        const [numeroDeRegistrosAtualizados] = await Pets.update(
           { 
            id,
            nome,
            peso,
            tipoSanguineo,
            raca,
            idade
        }, 
        {
            where: { id },
        }
        );
        if (numeroDeRegistrosAtualizados === 0) {
            return { message: "Dados iguais" };
          } else {
            return {
                id,
                nome,
                peso,
                tipoSanguineo,
                raca,
                idade
            };
          }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
      }
    }