import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/Database";
import Veterinarios from "./Veterinarios";
import Consultas from "./Consultas";
import Procedimentos from "./Procedimentos";
import Horarios from "./Horario";

const sequelize = new Sequelize(databaseConfig);

class Agenda extends Model { }

Agenda.init(
    {
        procedimentosId: [
            {
                type: DataTypes.UUIDV4(),
                references: {
                    model: Procedimentos,
                    key: "id",
                },
            },
        ],
        consultasId: [
            {
                type: DataTypes.UUIDV4(),
                references: {
                    model: Consultas,
                    key: "id",
                },
            },
        ],
        veterinarioId: [
            {
                type: DataTypes.UUIDV4(),
                references: {
                    model: Veterinarios,
                    key: "id",
                },
            },
        ],
        data: {
            type:DataTypes.DATE,
            required: true
        },
        datasFixas: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
      },
    {
        sequelize,
        modelName: "agendamentos",
        timestamps: false
    }

);
export default Agenda;