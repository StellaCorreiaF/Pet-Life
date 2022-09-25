const { startOfHour, parseISO, isBefore, format, subHours} = require('date-fns');

export default async function DiasDisponiveisValidator(request, response, next) {
    
    const hourStart = startOfHour(parseISO(data));

    let agenda = [];
    let lastDay = moment(data);

    if (isBefore(hourStart, new Date())) {
        return res.status(400).json({ error: 'Datas passadas não são permitidas' });
    }

    const disponibilidadeVet = await Agenda.findOne({
        where: {
          veterinariosId,
          canceled_at: null,
          data: hourStart,
      },
    });
        
    if (disponibilidadeVet) {
      return res
         .status(400)
         .json({ error: 'Veterinário já possui uma consulta nesse dia' });
    }     
    
    for (let i = 0; i <= 365 && agenda.length <= 7; i++) {
        const espacosValidos = horarios.filter((h) => {
          // VERIFICAR DIA DA SEMANA
          const diaSemanaDisponivel = h.dias.includes(moment(lastDay).day());
  
          // VERIFICAR ESPECIALIDADE DISPONÍVEL
          const servicosDisponiveis = h.especialidades.includes(servicoId);
  
          return diaSemanaDisponivel && servicosDisponiveis;
        });
  
        if (espacosValidos.length > 0) {
          // TODOS OS HORÁRIOS DISPONÍVEIS DAQUELE DIA
          let todosHorariosDia = {};
          for (let espaco of espacosValidos) {
            for (let colaborador of espaco.colaboradores) {
              if (!todosHorariosDia[colaborador._id]) {
                todosHorariosDia[colaborador._id] = [];
              }
              todosHorariosDia[colaborador._id] = [
                ...todosHorariosDia[colaborador._id],
                ...util.sliceMinutes(
                  util.mergeDateTime(lastDay, espaco.inicio),
                  util.mergeDateTime(lastDay, espaco.fim),
                  util.SLOT_DURATION
                ),
              ];
            }
          }
        }
      }
      
    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            error: err.errors,
        });
    });
    next();
}