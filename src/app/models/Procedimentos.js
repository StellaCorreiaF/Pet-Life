import Sequelize, {DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/database.js";
import Pets from "./Pets.js";
import Veterinarios from "./Veterinarios.js";

const sequelize = new Sequelize(databaseConfig);

class Procedimentos extends Model { }
Procedimentos.init({
    id: {
        type: Sequelize.UUIDV4(),
        primaryKey: true,
    },
    tipo: Sequelize.STRING,
    data: Sequelize.DATE,
    descricao: Sequelize.STRING,
    vetId: DataTypes.INTEGER,
    petId: DataTypes.INTEGER,

}, {
    sequelize,
    modelName: 'procedimentos',
    timestamps: false
})

Procedimentos.associate = function (model) {
    Procedimentos.belongsTo(Pets, { as: 'procedimentos', foreignKey: 'petId' });
    Procedimentos.belongsTo(Veterinarios, { as: 'procedimentos', foreignKey: 'vetId' });
}

export default Procedimentos; 