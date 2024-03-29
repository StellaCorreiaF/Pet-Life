import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/database.js";
import Pets from "./Pets.js";
import Veterinarios from "./Veterinarios.js";
import Agenda from "./Agenda.js";

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
    Consultas.hasOne(Agenda, {as:'consultas', foreignKey: 'consultasId'});
}

export default Consultas;

