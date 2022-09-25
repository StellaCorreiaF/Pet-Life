import createHorarioService from "../../service/AGENDA/HorarioService";

export default class HorarioController {
    constructor() {
      this.service = new createHorarioService();
    }
    async create(request, response) {
      const {
        procedimentosId, 
        consultasId, 
        veterinariosId, 
        dias, 
        inicio, 
        fim
      } = request.body;
  
      const horario = await this.service.create(
        procedimentosId, 
        consultasId, 
        veterinariosId, 
        dias, 
        inicio, 
        fim
      );
  
      return response.status(201).json(horario.message)
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