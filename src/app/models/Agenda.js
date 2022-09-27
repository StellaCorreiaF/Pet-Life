import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/Database.js";
import Veterinarios from "./Veterinarios.js";
import Consultas from "./Consultas.js";
import Procedimentos from "./Procedimentos.js";
import Tutores from "./Tutores.js";

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
        consultasId:Sequelize.INTEGER,
        veterinarioId:Sequelize.INTEGER,
        data: {
            type:DataTypes.DATE,
            required: true
        },
        dataCadastro: {
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

Agenda.associate = function(models){
    Agenda.belongsToMany(Consultas, {as:'agendamentos', foreignKey: 'consultasId'})
    Agenda.belongsToMany(Procedimentos, {as:'agendamentos', foreignKey: 'procedimentoId'})
    Agenda.hasMany(Tutores, {as:'agendamentos', foreignKey: 'tutorId'})
    Agenda.hasMany(Veterinarios, {as:'agendamentos', foreignKey: 'vetId'})
}


//Procedimentos.hasOne(Agenda, {as:'procedimentos', foreignKey: 'procedimentoId'})
//Tutores.hasOne(Agenda, {as:'tutor', foreignKey: 'tutorId'})


export default Agenda;