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
    if(user.id !== request.params.id) {
   
      return response.status(403).json({message: "usuário não possui permissão"})}
      console.log('403')

    if (!updatedVeterinario.sucess) 
    return response.status(400).json(updatedVeterinario.message); 
     console.log('400')
   
    return response.status(200).json(updatedVeterinario.body);

  }
}
