import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/Database";
import Pets from "./Pets";
import Veterinarios from "./Veterinarios";

const sequelize = new Sequelize(databaseConfig);

class Consultas extends Model {}
Consultas.init({
    id: {
        type: Sequelize.UUIDV4(),
        primaryKey: true
      },
      
      data: Sequelize.DATE,
      descricao: Sequelize.STRING,
}, {
    sequelize, 
    modelName: 'consultas', 
    timestamps: false
})
Consultas.belongsTo(Pets, {as : 'consultas', foreignKey: 'petId'});
Pets.hasMany(Consultas, {as: 'pets', foreignKey: 'petId'});

Consultas.belongsTo(Veterinarios, {as: 'consulta', foreignKey: 'vetId'}); 
Veterinarios.hasMany(Consultas, {as: 'vets', foreignKey: 'vetId'});

export default Consultas; 