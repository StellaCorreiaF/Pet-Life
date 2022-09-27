import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../config/Database.js";
import Tutores from "./Tutores";

const sequelize = new Sequelize(databaseConfig);


class Pets extends Model {}

Pets.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true,
          },
        nome: Sequelize.STRING,
        peso: Sequelize.INTEGER,
        tipoSanguineo: Sequelize.STRING,
        raca: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        porte: Sequelize.STRING,
        especie: Sequelize.STRING
       
    },
    {
        sequelize,
        modelName: "pets",
        timestamps: false,
      }
)
    
Pets.belongsTo(Tutores, {as : 'pets', foreignKey: 'tutorId'});
Tutores.hasMany(Pets, {as: 'tutor', foreignKey: 'tutorId'}
);
export default Pets;