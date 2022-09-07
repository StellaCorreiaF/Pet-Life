
import { Sequelize } from 'sequelize';
import VeterinarioModel, { TrainerModel } from '../app/model/VeterinarioModel'

import databaseConfig from '../config/database'

const models = [VeterinarioModel]  // aqui jogaremos todas as models depois de refatoradas

class Database {
    constructor() {
        this.init()
    }
    init() { // metodo que iniciará a conexão com o banco
        this.connection = new Sequelize(databaseConfig)
        models.map(models => models.init(this.connection)) // vai direcionar as requisições no banco para cada model 
    }
}

//para criar as migrations: npx sequelize migration:create --name=NAMEMIGRATION
// executar migration:  npx sequelize db:migrate