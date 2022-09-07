import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database";

const sequelize = new Sequelize(databaseConfig); 

class VeterinarioModel extends Model{}
VeterinarioModel.init(
  {
  id: {
    type: Sequelize.UUIDV4(),
    primaryKey: true
  },
  name: Sequelize.STRING,
  crmv: Sequelize.STRING,
  telefone: Sequelize.STRING,
  login: Sequelize.STRING,
  senha:Sequelize.STRING,
  email:Sequelize.STRING,
  password: Sequelize.STRING,
  especialidade: Sequelize.STRING

},
{
  sequelize,
  modelName: "veterinarios",
  timestamps: false,
})
export default VeterinarioModel; 