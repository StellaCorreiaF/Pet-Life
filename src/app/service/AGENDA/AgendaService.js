import { v4 } from "uuid";
import Horarios from "../../models/Horario";
import Procedimentos from "../../models/Procedimentos"
import Consultas from "../../models/Consultas";
import Veterinarios from "../../models/Veterinarios";
import Tutores from "../../models/Tutores";
import Agenda from "../../models/Agenda";

const { startOfHour, parseISO, isBefore, format, subHours} = require('date-fns');

export default class createAgendaService {
    constructor() { }
    async create(procedimentosId, consultasId, veterinariosId, tutorId, data) {
      try {
        const procedimento = await Procedimentos.findByPk(procedimentosId).select('tipo');
        if (!procedimento){
            return {
            sucess: false,
            message: "Procedimentos não encontrado"
            }
        }
        const consulta = await Consultas.findByPk(consultasId).select('tipo');
        if (!consulta){
            return {
            sucess: false,
            message: "Consulta não encontrado"
            }
        }
        const vets = await Veterinarios.findByPk(veterinariosId).select('nome especialidade')
        if (!vets){
            return {
            sucess: false,
            message: "Profissional não encontrado"
            }
        }
        const tutor = await Tutores.findByPk(tutorId).select('nome')
            if (!tutor){
             return {
                sucess: false,
                message: "Tutor não encontrado"
            }}

        const newAgendamento = await Agenda.create({
          id: v4(),
          procedimentosId: procedimento.id, 
          consultasId: consulta.id, 
          veterinariosId: vets.id, 
          tutorId:tutor.id,
          data: data,
        })
        return {
          sucess: true,
          message: newAgendamento
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
          const agenda = await Agenda.findAll()
          return agenda;
      } catch (error) {
          console.log(error);
          return {erro: error.message};
      }
  }
    async delete(id){
        try {
          const agenda = await Agenda.findByPk(id);
          if (!agenda) {
              return {
                sucess: false,
                message: "Agendamento não encontrado"};
              }
          const agendamentoExcluido = await agenda.destroy();
          return agendamentoExcluido;
      } catch(error){
          console.log(error);
          return { erro: error.mensage};
      }
  }
}