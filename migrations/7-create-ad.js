'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datefin: {
        type: Sequelize.DATE
      },
      datedebut: {
        type: Sequelize.DATE
      },
      GoodImmovableId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        allowNull: false,
        references: {
          model: 'GoodImmovables',
          key: 'id'
        }
      },
      AgentImmovableId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        allowNull: false,
        references: {
          model: 'AgentImmovables',
          key: 'id'
        }
      },
      SaleStatusId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        allowNull: false,
        references: {
          model: 'SaleStatuses',
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
    await queryInterface.dropTable('Ads');
  }
};