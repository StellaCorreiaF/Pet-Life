import { v4 } from "uuid";
import { create } from "yup/lib/Reference";
import VeterinarioModel from "../../model/VeterinarioModel";

export default class createVeterinarioService {
  constructor() { }
  async create(name, email, login, password, especialidade, telefone, crmv) {
    if (name.length < 5) {
      return {
        sucess: false,
        message: "Nome precisa ter pelo menos 5 caracteres"
      }
    }
    try {
      const newVeterinario = await VeterinarioModel.create({
        id: v4(),
        name,
        email,
        login,
        password,
        especialidade,
        telefone,
        crmv

      })
      return {
        sucess: true,
        message: newVeterinario
      }
    } catch(error) {
      console.log('aqui')
      console.log(error)
      return {
        sucess: true,
        message: error.message
      }
    }
  }
}
