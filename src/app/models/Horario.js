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
        veterinariosId: DataTypes.INTEGER,
        dias: {
            type:DataTypes.STRING,
            required: true,
            allowNull:false,
            get(){
                return this.getDataValue('dias').split(';')
            },set(val){
                this.setDataValue('dias', val.join(';'));
            }
        },
        horarioInicial: {
            type: DataTypes.DATE,
            required: true
        },
        horarioFinal: {
            type: DataTypes.DATE,
            required: true
        },
        dataCadastro: {
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


export default Horarios;