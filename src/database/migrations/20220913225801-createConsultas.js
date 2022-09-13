'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    return queryInterface.createTable('consultas', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
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
   
    return queryInterface.dropTable('consultas')
  }
};
