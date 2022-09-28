import UpdateVeterinarioService from "../../service/VET/UpdateVeterinarioService.js";

export default class UpdateVeterinarioController {
  constructor() {
    this.service = new UpdateVeterinarioService();
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, telefone, email, login, senha, crmv, especialidade } =
      request.body;

    let user = request.user; 

    const updatedVeterinario = await this.service.update(
      id,
      nome,
      telefone,
      email,
      login,
      senha,
      crmv,
      especialidade
    );
   
    
    return response.status(200).json(updatedVeterinario);

  }
}
