import { v4 } from "uuid";
import Agenda from "../../models/Agenda";


export default class createAgendaService {
    constructor() { }
    async create(nome, crmv, telefone, login, email, senha,especialidade) {
      if (nome.length < 5) {
        return {
          sucess: false,
          message: "Nome precisa ter pelo menos 5 caracteres"
        }
      }
      try {
        const newVeterinario = await Veterinarios.create({
          id: v4(),
          nome, crmv, telefone, login, email, senha,especialidade
  
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