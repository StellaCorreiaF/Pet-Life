'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log('chegou na migration proced')
   
    return queryInterface.createTable('procedimentos', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      petId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'pets',
          },
          key: 'id',
        },
        allowNull: false,
      },
      vetId: {
        type: Sequelize.UUID, 
        references: {
          model: {
            tableName: 'veterinarios'
          }, 
          key: 'id'
        }, 
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
   
    return queryInterface.dropTable('procedimentos')
  }
};
