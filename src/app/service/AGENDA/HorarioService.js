import { v4 } from "uuid";
import Horarios from "../../models/Horario";
import Procedimentos from "../../models/Procedimentos"
import Consultas from "../../models/Consultas";
import Veterinarios from "../../models/Veterinarios";

export default class createHorarioService {
    constructor() { }
    async create(procedimentosId, consultasId, veterinariosId, dias, inicio, fim) {
      try {
        const procedimento = await Procedimentos.findByPk(procedimentosId)
        if (!procedimento){
            return {
            sucess: false,
            message: "Procedimentos não encontrado"
            }
        }
        const consulta = await Consultas.findByPk(consultasId)
        if (!consulta){
            return {
            sucess: false,
            message: "Consulta não encontrada"
            }
        }
        const vets = await Veterinarios.findByPk(veterinariosId)
        if (!vets){
            return {
            sucess: false,
            message: "Profissional não encontrado"
            }
        }
        
        const newHorario = await Horarios.create({
          id: v4(),
          procedimentosId: procedimento.id, 
          consultasId: consulta.id, 
          veterinariosId: vets.id, 
          dias: dias, 
          DataInicial: inicio, 
          dataFinal:fim
        })
        return {
          sucess: true,
          message: newHorario
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
    async listAll(){ 
        try {
          const horarios = await Horarios.findAll()
          return horarios;
      } catch (error) {
          console.log(error);
          return {erro: error.message};
      }
    }
    async delete(id){
      try {
          const horario = await Horarios.findByPk(id);
          if (!horario) {
              return {
                  sucess: false,
                  message: "Horario não encontrado"};
              }
          const horarioExcluido = await horario.destroy();
          return horarioExcluido;
      } catch(error){
          console.log(error);
          return { erro: error.mensage};
      }
  }
   

}