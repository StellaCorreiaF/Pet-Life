import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/Database";
import Veterinarios from "./Veterinarios";
import Consultas from "./Consultas";
import Procedimentos from "./Procedimentos";

const sequelize = new Sequelize(databaseConfig);

class Horarios extends Model { }

Horarios.init(
    {
        procedimentos: [
            {
                type: DataTypes.UUIDV4(),
                references: {
                    model: Procedimentos,
                    key: "id",
                },
            },
        ],
        consultas: [
            {
                type: DataTypes.UUIDV4(),
                references: {
                    model: Consultas,
                    key: "id",
                },
            },
        ],
        veterinários: [
            {
                type: DataTypes.UUIDV4(),
                references: {
                    model: Veterinarios,
                    key: "id",
                },
            },
        ],
        dias: {
            type:Sequelize.NUMBER,
            required: true
        },
        dataInicial: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            required: true
        },
        dataFinal: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            required: true
        },
        datasFixas: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: "horarios",
        timestamps: false
    }

);
export default Horarios;