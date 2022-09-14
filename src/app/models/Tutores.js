import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../config/database";

const sequelize = new Sequelize(databaseConfig);

class Tutores extends Model {}

Tutores.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true,
        },
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        senha: Sequelize.STRING,
        telefone: Sequelize.STRING(11),
        cep: Sequelize.STRING(8),
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
    },
    {
        sequelize,
        modelName: "tutors",
        timestamps: false,
        underscored: true,
    }
);

export default Tutores;