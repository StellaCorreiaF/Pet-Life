import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/Database";
import Veterinarios from "./Veterinarios";
import Consultas from "./Consultas";
import Procedimentos from "./Procedimentos";
import Tutores from "./Tutores";

const {isBefore} = require('date-fns');

const sequelize = new Sequelize(databaseConfig);

class Agenda extends Model {}
Agenda.init(
    {
        id: 
        {
            type: Sequelize.UUIDV4(),
            primaryKey: true
        },
        data: {
            type:DataTypes.DATE,
            required: true
        },
        datasFixas: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date());
          },
        }
    },
    {
        sequelize,
        modelName: "agendamentos",
        timestamps: false
    }

);

Agenda.hasMany(Consultas, {as:'agendamentos', foreignKey: 'consultasId'})
Consultas.hasOne(Agenda, {as:'consultas', foreignKey: 'consultasId'})

Agenda.hasMany(Procedimentos, {as:'agendamentos', foreignKey: 'procedimentoId'})
Procedimentos.hasOne(Agenda, {as:'procedimentos', foreignKey: 'procedimentoId'})

Agenda.hasMany(Tutores, {as:'agendamentos', foreignKey: 'tutorId'})
Tutores.hasOne(Agenda, {as:'tutor', foreignKey: 'tutorId'})

Agenda.hasMany(Veterinarios, {as:'agendamentos', foreignKey: 'vetId'})
Veterinarios.hasOne(Agenda, {as:'vets', foreignKey: 'vetId'})

export default Agenda;