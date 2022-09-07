import petModel from "../../model/Pet";

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
        const pet = await petModel.findByPk(id);
        
        if (!pet) {
            return {
                message: "Pet não encontrado"
            }
        }
        

        const [numeroDeRegistrosAtualizados] = await petModel.update(
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
            return { mensagem: "Dados iguais" };
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