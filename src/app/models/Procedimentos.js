import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/Database";
import Pets from "./Pets";
import Veterinarios from "./Veterinarios";

const sequelize = new Sequelize(databaseConfig);

class Procedimentos extends Model{}
Procedimentos.init({
    id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true,
        },
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