import UpdateProcedService from "../../service/PROCEDIMENTOS/UpdateProcedService" 

export default class UpdateProcedController{ 
    constructor(){ 
        this.service = new UpdateProcedService(); 
    } 

    async update(req,res){ 
        const {id} = req.params; 
        const { 
            tipo, 
            data, 
            descricao
        } = req.body 

        const ProcedimentoAtualizado = await this.service.update( 
            id,  
            tipo,
            data,  
            descricao 
        );  
        return res.status(201).json(ProcedimentoAtualizado)
    }
    
}