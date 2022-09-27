import UpdateConsultaService from "../../service/CONSULTAS/UpdateConsultaService.js";

export default class UpdateConsultaController {
    constructor() {
      this.service = new UpdateConsultaService();
    }
  
    async update(request, response) {
      const { id } = request.params;
      const {
          data,
          descricao,
          petId,
          vetId,
      } = request.body;
  
  
      const updatedConsultas= await this.service.update(
          id,
          data,
          descricao,
          petId,
          vetId
          
      )
      
      return response.status(200).json(updatedConsultas)     
    }

    }