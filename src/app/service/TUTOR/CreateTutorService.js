import { v4 } from 'uuid';
import TutorModel from '../../model/TutorModel';

export default class createTutorService {
  constructor() {}

  async create (id, nome, email, username, senha, telefone, cep, bairro, cidade, uf) {

   try {
   
   const newTutor = await TutorModel.create({
     id: v4(),
     nome, 
     email, 
     username, 
     senha, 
     telefone, 
     cep, 
     bairro, 
     cidade, 
     uf,
   });

 return {
   sucess: true,
   message: newTutor,
 };
} catch (error) {
 console.log(error);
 return {
   sucess: true,
   message: error.message,
 };
}
}
}