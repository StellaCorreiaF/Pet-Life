'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('pets', {
      fields: ["tutorId"],
      type: "foreign key",
      name: 'pet_tutor_association',
      references: {
        table: 'tutor',
        field: 'id',

      }
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('pets', {
      fields: ["tutorId"],
      type: "foreign key",
      name: 'pet_tutor_association',
      references: {
        table: 'tutor',
        field: 'id',

      }
    });

  }
};
