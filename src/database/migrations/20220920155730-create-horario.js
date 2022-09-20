'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('horarios', {
      
      procedimentos: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'procedimentos'
          },
          key:'id',
        },
        allowNull: false
      },
      consultas: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'consultas'
          },
          key:'id',
        },
        allowNull: false
      },
      veterinarios: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'veterinarios'
          },
          key:'id',
        },
        allowNull: false
      },
      dias: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dataInicial: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dataFinal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      datasFixas: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
    })
  },

  async down (queryInterface, Sequelize) {
   
    return queryInterface.dropTable('horarios')

  }
};
