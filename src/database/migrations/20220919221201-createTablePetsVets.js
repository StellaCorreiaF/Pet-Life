"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("pets_vets", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      petId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "pets",
          },
          key: "id",
        },
        allowNull: false,
      },
      vetId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "veterinarios",
          },
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("pets_vets");
  },
};  