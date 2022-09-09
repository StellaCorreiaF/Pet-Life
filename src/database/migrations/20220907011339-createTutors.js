'use strict';

const { password } = require("../../config/database");

module.exports = {
  up: (queryInterface, Sequelize)=> {
    return queryInterface.createTable('tutors', { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      username:{
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf:{
        type: Sequelize.STRING,
        allowNull: false,
      }

    }); 
  },

  down: (queryInterface, Sequelize)=> {
    
    return queryInterface.dropTable('tutors');
    
  }
};
