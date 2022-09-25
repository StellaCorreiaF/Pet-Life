'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('horarios', {
      
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      procedimentosId: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'procedimentos'
          },
          key:'id',
        },
        allowNull: false
      },
      consultasId: {
        type: Sequelize.UUID,
        references: {
          model:{
            tableName: 'consultas'
          },
          key:'id',
        },
        allowNull: false
      },
      veterinariosId: {
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
