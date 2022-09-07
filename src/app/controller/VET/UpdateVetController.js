import UpdateVeterinarioService from "../../service/VET/UpdateVeterinarioService";

export default class UpdateVeterinarioController {
  constructor() {
    this.service = new UpdateVeterinarioService();
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, telefone, email, login, password, crmv, especialidade } =
      request.body;

    const updateVeterinario = await this.service.update(
      id,
      name,
      telefone,
      email,
      login,
      password,
      crmv,
      especialidade
    );

    return response.status(200).json(updateVeterinario);
  }
}
