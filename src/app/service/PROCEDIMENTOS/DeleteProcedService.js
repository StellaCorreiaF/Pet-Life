import Procedimentos from "../../models/Procedimentos.js" 

export default class DeleteProcedService { 
    constructor(){} 

    async delete(id){ 
        try{ 
            const procedimento = await Procedimentos.findByPk(id); 
            if(!procedimento){ 
                return {message: "Procedimento não encontrado"}
            } 
            const procedimentoRemovido = await procedimento.destroy(); 
            return procedimentoRemovido
        } 
        catch(error){ 
            console.log(error); 
            return {erro: error.message}
        }
    }
}