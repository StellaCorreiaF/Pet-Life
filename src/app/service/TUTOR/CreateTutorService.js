import { v4 } from 'uuid';
import Tutores from '../../models/Tutores.js';
import * as bcrypt from 'bcryptjs'

export default class createTutorService {
  constructor() { }

  async create(id,
    nome,
    email,
    login,
    senha,
    telefone,
    cep,
    bairro,
    cidade,
    uf) {

    try {
      const passwordHash = await bcrypt.hash(senha, 8);

      const newTutor = await Tutores.create({
        id: v4(),
        nome,
        email,
        login,
        senha: passwordHash,
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