import UpdateVeterinarioService from "../../service/VET/UpdateVeterinarioService";

export default class UpdateVeterinarioController {
  constructor() {
    this.service = new UpdateVeterinarioService();
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, telefone, email, login, senha, crmv, especialidade } =
      request.body;

    const updateVeterinario = await this.service.update(
      id,
      nome,
      telefone,
      email,
      login,
      senha,
      crmv,
      especialidade
    );

    return response.status(200).json(updateVeterinario.message);
  }
}
