import DeleteVeterinarioService from "../../service/VET/DeleteVeterinarioService";

export default class DeleteVeterinarioController {
  constructor() {
    this.service = new DeleteVeterinarioService();
  }
  async delete(request, response) {
    const { id } = request.params;

    const resultado = await this.service.delete(id);

    response.send(resultado);
  }
}
