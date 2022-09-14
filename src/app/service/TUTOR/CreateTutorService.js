import { v4 } from 'uuid';
import Tutores from '../../models/Tutores';


export default class createTutorService {
  constructor() {}

  async create (id, nome, email, username, senha, telefone, cep, bairro, cidade, uf) {

   try {
   
   const newTutor = await Tutores.create({
     id: v4(),
     nome, 
     email, 
     username, 
     senha, 
     telefone, 
     cep, 
     bairro, 
     cidade, 
     uf
   });

    return {
      sucess: true,
      message: newTutor,
    };
    } catch (error) {
      console.log(error);
      return {
        sucess: false,
        message: error.message
      };
    }
  }
}