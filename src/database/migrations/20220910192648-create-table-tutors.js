'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log('chegou na migration tutor')
  
    return queryInterface.createTable('tutores', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
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
      login:{
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
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('tutores')
  }
};
