import UpdateTutorService from "../../service/tutor/UpdateTutorService"

export default class UpdateTutorController {
  constructor() {
    this.service = new UpdateTutorService();
  } 

 async update (request, response) {
    const { id } = request.params;
    const { nome, email, username, senha, telefone, cep, bairro, cidade, uf } = request.body;


    const updatedTutor = await this.service.update(
         id,
         nome, 
         email, 
         username, 
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