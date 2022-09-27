import ListProcedService from "../../service/PROCEDIMENTOS/ListProcedService.js"

export default class ListProcedController {
    constructor() {
        this.service = new ListProcedService();
    }
    async listAll(request, response) {
        const procedimentos = await this.service.listAll();

        response.json(procedimentos);
    }
    async getById(request, response) {
        const { id } = request.params; 
        const procedimento = await this.service.listOne(id);
        response.json(procedimento); 

    }
} 