import Procedimentos from "../../models/Procedimentos" 
import Pets from  "../../models/Pets" 

export default class ListProcedService { 
    constructor(){} 
    async listAll(procedId){ 
        try { 
            if (procedId){ 
                return await this.listOne(procedId) 

            } 
            const procedFound = await Procedimentos.findAll(); 
            return procedFound
        } 
        catch(error){ 
            console.log(error); 
            return {erro: error.message}
        }
    } 
    async listOnde(procedId){ 
        try{ 
            const procedimento = await Procedimentos.findOne({ 
                where: {id: procedId},
            }); 

            if(!procedimento){ 
                return {mensagem: "Procedimento não encontrado"}
            } 
            return procedimento; 
        } catch(error){ 
            console.log(error); 
            return {erro: error.message}; 
        }
    }
}
