'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    return queryInterface.createTable('pets', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      tipoSanguineo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      porte: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      especie: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      tutorId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "tutores",
          },
          key: "id",
        },
        allowNull: false,
      },
    })
  },

  async down (queryInterface, Sequelize) {
   
    return queryInterface.dropTable('pets')
  }
};
