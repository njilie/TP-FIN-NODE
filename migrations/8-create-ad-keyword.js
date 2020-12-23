'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AdKeywords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AdId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        allowNull: false,
        references: {
          model: 'Ads',
          key: 'id'
        },
        unique: 'AdKeyword'
      },
      KeywordId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        allowNull: false,
        references: {
          model: 'Keywords',
          key: 'id'
        },
        unique: 'AdKeyword'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => {
      return queryInterface.sequelize.query(
        'ALTER TABLE `AdKeywords` ADD UNIQUE `unique_index`(`AdId`,`KeywordId`)'
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AdKeywords');
  }
};