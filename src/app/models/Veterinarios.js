import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/Database";
import * as bcrypt from "bcryptjs"

const sequelize = new Sequelize(databaseConfig); 

class Veterinarios extends Model{
  async verifyPassword(password) {
    return await bcrypt.compare(password, this.senha)
  }
}
Veterinarios.init(
  {
  id: {
    type: Sequelize.UUIDV4(),
    primaryKey: true
  },
  nome: Sequelize.STRING,
  crmv: Sequelize.STRING,
  telefone: Sequelize.STRING(11),
  login: Sequelize.STRING,
  email:Sequelize.STRING,
  senha: Sequelize.STRING,
  especialidade: Sequelize.STRING

},
{
  sequelize,
  modelName: "veterinarios",
  timestamps: false
})

export default Veterinarios; 