import UpdateTutorService from "../../service/TUTOR/UpdateTutorService.js"

export default class UpdateTutorController {
  constructor() {
    this.service = new UpdateTutorService();
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, email, login, senha, telefone, cep, bairro, cidade, uf } = request.body;
    let user = request.user;

    const updatedTutor = await this.service.update(
      id,
      nome,
      email,
      login,
      senha,
      telefone,
      cep,
      bairro,
      cidade,
      uf
    );
    
    return response.status(200).json(updatedTutor);
  }
}