import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database";
import Pets from "./Pets";
import Veterinarios from "./Veterinarios";

class Procedimentos extends Model{}
Procedimentos.init({
    id: Sequelize.UUIDV4(),
    tipo: Sequelize.STRING,
    data: Sequelize.DATE,
    descricao: Sequelize.STRING
}, {
    sequelize,
    modelName: 'procedimentos',
    timestamps: false
})

Procedimentos.belongsTo(Pets, {as : 'procedimentos', foreignKey: 'petId'});
Pets.hasMany(Procedimentos, {as: 'pets', foreignKey: 'petId'}
);

Procedimentos.belongsTo(Veterinarios, {as: 'procedimentos', foreignKey: 'vetId'}); 
Veterinarios.hasMany(Procedimentos, {as: 'vets', foreignKey: 'vetId'});
export default Procedimentos; 