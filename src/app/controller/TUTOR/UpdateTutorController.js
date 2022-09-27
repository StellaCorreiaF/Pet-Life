import UpdateTutorService from "../../service/tutor/UpdateTutorService.js"

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
    if (!updatedTutor.sucess) {
      return response.status(400).json(updatedTutor.message);
    }
    return response.status(200).json(updatedTutor.message);
  }
}