import ListProcedService from "../../service/PROCEDIMENTOS/ListProcedService" 

export default class ListProcedController{ 
    constructor(){ 
        this.service = new ListProcedService();
    } 

    async index(req, res){ 
        
        const {id} = req.params; 

        const procedimentos = await this.service.listAll(id); 

        res.json(procedimentos)
    }
} 