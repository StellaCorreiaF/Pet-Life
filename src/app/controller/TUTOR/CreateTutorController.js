import CreateTutorService from "../../service/TUTOR/CreateTutorService.js";

export default class CreateTutorController {
  constructor() {
    this.service = new CreateTutorService();
  }

  async create(request, response) {
    const { id, nome, email, login, senha, telefone, cep, bairro, cidade, uf } = request.body;

    const createdTutor = await this.service.create(
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

    if (!createdTutor.sucess) {
      return response.status(400).json(createdTutor.message);
    }

    return response.status(201).json(createdTutor.message);
  }
}