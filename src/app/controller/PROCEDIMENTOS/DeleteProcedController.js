import DeleteProcedService from "../../service/PROCEDIMENTOS/DeleteProcedService.js" 

export default class DeleteProcedController { 
    constructor(){ 
        this.service = new DeleteProcedService();
    } 
    async delete(req, res){ 
        const {id} = req.params; 

        const resultado = await this.service.delete(id); 

        res.send(resultado)
    }
}