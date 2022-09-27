'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.createTable('agendamentos', {
      
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      procedimentoId: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'procedimentos'
          },
          key:'id',
        },
        allowNull: true
      },
      consultasId: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'consultas'
          },
          key:'id',
        },
        allowNull: true
      },
      veterinarioId: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'veterinarios'
          },
          key:'id',
        },
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dataCadastro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      canceled_at: Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    
    return queryInterface.dropTable('agendamentos')

  }
};
