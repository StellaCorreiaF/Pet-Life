import DeleteConsultaService from "../../service/CONSULTAS/DeleteConsultaService.js"; 

export default class DeleteConsultaController { 
    constructor(){ 
        this.service = new DeleteConsultaService();
    } 
    async delete(request, response){ 
        const {id} = request.params; 

        const resultado = await this.service.delete(id); 
        response.send(resultado)

    }
}