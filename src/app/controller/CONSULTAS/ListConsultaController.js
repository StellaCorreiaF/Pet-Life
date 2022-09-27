import ListConsultaService from "../../service/CONSULTAS/ListConsultaService.js";

export default class ListAllConsultaController {
  constructor() {
    this.service = new ListConsultaService();
  }

  async listAll(request, response) {
    const consultas = await this.service.listAll();

    response.json(consultas);
  }
}