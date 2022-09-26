import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/Database";
import Veterinarios from "./Veterinarios";
import Consultas from "./Consultas";
import Procedimentos from "./Procedimentos";

const sequelize = new Sequelize(databaseConfig);

class Horarios extends Model { }

Horarios.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true
          },
        procedimentosId:DataTypes.INTEGER,
        consultasId:DataTypes.INTEGER,
        vetId:DataTypes.INTEGER,

        dias: {
            type:DataTypes.NUMBER,
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

Horarios.associate = function(models){
    Horarios.hasMany(Consultas, {as:'horarios', foreignKey: 'consultasId'})
    Horarios.hasMany(Procedimentos, {as:'horarios', foreignKey: 'procedimentosId'})
    Horarios.belongsTo(Veterinarios, {as:'horarios', foreignKey: 'vetId'})
}

Consultas.hasMany(Horarios, {as:'consultas', foreignKey: 'consultasId'})
Procedimentos.hasMany(Horarios, {as:'procedimentos', foreignKey: 'procedimentosId'})
//Veterinarios.hasMany(Horarios, {as:'vets', foreignKey: 'vetId'})

export default Horarios;