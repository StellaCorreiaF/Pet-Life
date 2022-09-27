import CreateConsultaService from '../../service/CONSULTAS/CreateConsultaServices.js'

export default class CreateConsultaController {
    constructor() {
      this.service = new CreateConsultaService();
    }
  
    async create(request, response) {
      const {
          data,
          descricao,
          petId,
          vetId
      } = request.body;
  
      const consultas = await this.service.create(
          data,
          descricao,
          petId,
          vetId
      );
  
      return response.status(201).json(consultas.message)
    }
}