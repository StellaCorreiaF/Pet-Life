import { v4 } from "uuid";
import Veterinarios from "../../models/Veterinarios.js";
import * as bcrypt from "bcryptjs"

export default class createVeterinarioService {
  constructor() { }
  async create(nome, crmv, telefone, login, email, senha,especialidade) {
    if (nome.length < 5) {
      return {
        sucess: false,
        message: "Nome precisa ter pelo menos 5 caracteres"
      }
    }
    try {
      
      const passwordHash = await bcrypt.hash(senha, 8);
      const newVeterinario = await Veterinarios.create({
        id: v4(),
        nome,
        crmv, 
        telefone, 
        login, 
        email, 
        senha: passwordHash,
        especialidade

      })
      return {
        sucess: true,
        message: newVeterinario
      }
    } catch(error) {
      return {
        sucess: true,
        message: error.message
      }
    }
  }
}
