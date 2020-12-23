'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('SaleStatuses', [{
    name: 'Location',
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: 'A vente',
    createdAt: new Date(),
    updatedAt: new Date()

  },
  {
    name: 'A venir',
    createdAt: new Date(),
    updatedAt: new Date()

  }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SaleStatuses', null, {});
  }
};
