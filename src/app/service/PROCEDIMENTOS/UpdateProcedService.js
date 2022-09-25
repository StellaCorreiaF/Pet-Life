import Procedimentos from "../../models/Procedimentos"; 

export default class UpdateProcedService { 
    constructor(){} 

    async update( 
        id, 
        tipo, 
        data,  
        descricao
    ){ 
        try { 
            const procedimento = await Procedimentos.findByPk(id); 
            if(!procedimento){ 
                return {message: "Procedimento não encontrado"}
            } 

            const [numeroDeRegistrosAtualizados] = await Procedimentos.update( 
                { 
                    id,  
                    tipo, 
                    data, 
                    descricao 

                },   
                { 
                    where: {id}, 
                }
            );  
            if (numeroDeRegistrosAtualizados===0){ 
                return {message: "Dados iguais"};
            } else{ 
                return { 
                    id,  
                    tipo,  
                    data,  
                    descricao
                };
            }
        } catch(error){ 
            console.log(error); 
            return { erro: error.message};
        }
    }
}