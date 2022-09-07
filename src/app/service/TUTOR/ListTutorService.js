import { v4 } from 'uuid';
import TutorModel from '../../model/TutorModel';

export default class createTutorService {
  constructor() {}

 async listAll() {
  try {
     const tutors = await TutorModel.findAll()
     return tutors;
  } catch (error) {
    console.log(error);
    return {erro: error.message };
  }
  }
  async listOne(email, senha) {
    try  {
      const tutors = await TutorModel.findOne({
         where: {
           email,
       }
      });

       if (!tutors) {
          return { mensagem: "Tutor não encontrado"};
       }
       
       
      } catch (error) {
        console.log(error);
        return { erro: error.message };
        }
      }
    }