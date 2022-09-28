'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log('chegou na migration horarios')
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      horarioInicial: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      horarioFinal: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dataCadastro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
    })
  },

  async down (queryInterface, Sequelize) {
   
    return queryInterface.dropTable('horarios')

  }
};
