import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database";
import tutorModel from './TutorModel';

const sequelize = new Sequelize(databaseConfig);


class petModel extends Model {}

petModel.init(
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
    
petModel.belongsTo(tutorModel);     
tutorModel.hasMany(petModel, {
  foreignKey: 'petId'
});



export default petModel;