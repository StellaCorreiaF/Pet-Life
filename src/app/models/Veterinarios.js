import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/Database.js";
import * as bcrypt from "bcryptjs"
import Horarios from "./Horario";
import Consultas from "./Consultas";
import Agenda from "./Agenda";

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
Veterinarios.associate=function(model){
  Veterinarios.hasMany(Horarios, {as:'vets', foreignKey: 'vetId'})
  Veterinarios.hasMany(Consultas, {as: 'vets', foreignKey: 'vetId'});
  Veterinarios.hasOne(Agenda, {as:'vets', foreignKey: 'vetId'})
}

export default Veterinarios; 