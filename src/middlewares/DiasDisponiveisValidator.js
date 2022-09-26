import * as Yup from "yup";
import Agenda from '../app/models/Agenda';
import Veterinarios from "../app/models/Veterinarios";

const { startOfHour, parseISO, isBefore, format, subHours} = require('date-fns');

export default async function DiasDisponiveisValidator(request, response, next) {
    const { veterinarioId, data } = request.body;
    const schema = Yup.object().shape({
      veterinarioId: Yup.string().required(),
      data: Yup.date().required(),
    });
    const vets = await Veterinarios.findByPk(veterinarioId);
    const hourStart = startOfHour(parseISO(data));

    if (isBefore(hourStart, new Date())) {
        return response.status(400).json({ error: 'Datas passadas não são permitidas' });
    }

    const disponibilidadeVet = await Agenda.findOne({
        where: {
          veterinarioId: vets.id,
          canceled_at: null,
          data: data,
      },
    });
    
    if (disponibilidadeVet) {
      return response
         .status(400)
         .json({ error: 'Veterinário já possui uma consulta nesse dia' });
    }     
      
    await schema.validate(request.body).catch((err) => {
        return response.status(400).json({
            error: err.errors,
        });
    });
    next();
}