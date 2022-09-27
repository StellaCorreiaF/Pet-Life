import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/Database";
import Pets from "./Pets";
import Veterinarios from "./Veterinarios";
import Agenda from "./Agenda";

const sequelize = new Sequelize(databaseConfig);

class Consultas extends Model {}
Consultas.init({
    id: {
        type: Sequelize.UUIDV4(),
        primaryKey: true
      },
      vetId: DataTypes.INTEGER, 
      petId:DataTypes.INTEGER,
      data: Sequelize.DATE,
      descricao: Sequelize.STRING,
}, {
    sequelize, 
    modelName: 'consultas', 
    timestamps: false
})
Consultas.associate = function(model){
    Consultas.belongsTo(Pets, {as : 'consultas', foreignKey: 'petId'});
    Consultas.belongsTo(Veterinarios, {as: 'consulta', foreignKey: 'vetId'}); 
    Consultas.hasOne(Agenda, {as:'consultas', foreignKey: 'consultasId'})
}

export default Consultas;