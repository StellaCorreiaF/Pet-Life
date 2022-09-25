import CreateProcedService from "../../service/PROCEDIMENTOS/CreateProcedService" 

export default class CreateProcedController { 
    constructor(){ 
        this.service = new CreateProcedService();
    } 
    async create (req, res){ 
        const tutor = req.user; 
        const { 
            tipo, 
            data,  
            descricao
        } = req.body; 

        const procedimento = await this.service.create( 
            tipo,  
            data,  
            descricao,  
            tutor.id
        ); 

        return res.status(201).json(pet.message)
    }
    
}