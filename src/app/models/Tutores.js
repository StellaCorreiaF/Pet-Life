import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/Database";
import * as bcrypt from 'bcryptjs'
const sequelize = new Sequelize(databaseConfig);

class Tutores extends Model {  
    async verifyPassword(password) {
        console.log("CHEGOU")
    return await bcrypt.compare(password, this.senha)
}}

Tutores.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true,
        },
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        login: Sequelize.STRING,
        senha: Sequelize.STRING,
        telefone: Sequelize.STRING(11),
        cep: Sequelize.STRING(8),
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
    },
    {
        sequelize,
        modelName: "tutores",
        timestamps: false,
        underscored: true,
    }
);

export default Tutores;