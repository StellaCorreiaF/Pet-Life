import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database";
import vetModel from './VeterinarioModel';

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
    
 petModel.belongsTo(vetModel);     

export default petModel;