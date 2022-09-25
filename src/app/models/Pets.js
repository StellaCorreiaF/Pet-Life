import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/Database";
import tutorModel from './Tutores';

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
    },
    {
        sequelize,
        modelName: "pets",
        timestamps: false,
      }
)
    
Pets.belongsTo(tutorModel, {as : 'pets', foreignKey: 'tutorId'});
tutorModel.hasMany(Pets, {as: 'tutor', foreignKey: 'tutorId'}
);



export default Pets;