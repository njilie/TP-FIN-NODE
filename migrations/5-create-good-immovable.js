'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GoodImmovables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      surface: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.FLOAT
      },
      address: {
        type: Sequelize.STRING
      },
      KeywordId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        allowNull: false,
        references: {
          model: 'Keywords',
          key: 'id'
        }
      },
      FeatureId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        allowNull: false,
        references: {
          model: 'Features',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GoodImmovables');
  }
};