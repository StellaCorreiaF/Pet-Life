import UpdateTutorService from "../../service/tutor/UpdateTutorService"

export default class UpdateTutorController {
  constructor() {
    this.service = new UpdateTutorService();
  } 

 async update (request, response) {
    const { id } = request.params;
    const { nome, email, username, senha, telefone, cep, bairro, cidade, uf } = request.body;
    let user = request.user;

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
    if(user.id !== request.params.id){ 
      return response.status(403).json({message: "Usuário não está autorizado a alterar "})
 }
    

    return response.status(200).json(updatedTutor.message);
  }
}