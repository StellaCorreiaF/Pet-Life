import { v4 } from 'uuid';
import Tutores from '../../models/Tutores.js';


export default class createTutorService {
  constructor() { }

  async listAll() {
    try {
      const tutors = await Tutores.findAll();
      return tutors;
    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
  async listOne(email, senha) {
    try {
      const tutors = await Tutores.findOne({
        where: {
          email,
        }
      });

      if (!tutors) {
        return { message: "Tutor não encontrado" };
      }


    } catch (error) {
      console.log(error);
      return { erro: error.message };
    }
  }
}