import createAgendaService from "../../service/AGENDA/AgendaService";

export default class AgendaController {
    constructor() {
      this.service = new createAgendaService();
    }
    async create(request, response) {
      const {
        procedimentosId, 
        consultasId, 
        veterinarioId, 
        tutorId, 
        data
      } = request.body;
  
      const agendamentos = await this.service.create(
        procedimentosId, 
        consultasId, 
        veterinarioId, 
        tutorId, 
        data
      );
  
      return response.status(201).json(agendamentos.message)
    }
    async listAll(request, response) {
      const agendamentos = await this.service.listAll();
  
      response.json(agendamentos);
    }
    async delete(request, response){ 
      const {id} = request.params; 

      const resultado = await this.service.delete(id); 
      response.send(resultado)

  }
}