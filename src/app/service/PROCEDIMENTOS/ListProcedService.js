import Procedimentos from "../../models/Procedimentos" 
import Pets from  "../../models/Pets" 

export default class ListProcedService { 
    constructor(){} 
    async listAll() {
        try {
           const procedimentos = await Procedimentos.findAll();
           return procedimentos;
        } catch (error) {
          console.log(error);
          return {erro: error.message };
        }
        }
        async listOne(id) {
            try  {
              const procedimentos = await Procedimentos.findOne({
                 where: {
                   id,
               }
              });
        
               if (!procedimentos) {
                  return { message: "Procedimento não encontrado"};
               }
               
               
              } catch (error) {
                console.log(error);
                return { erro: error.message };
                }
              }
}
