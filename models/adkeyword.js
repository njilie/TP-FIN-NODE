'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdKeyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdKeyword.belongsTo(models.Ad);
      AdKeyword.belongsTo(models.Keyword);
    }
  };
  AdKeyword.init({
  }, {
    sequelize,
    modelName: 'AdKeyword',
  });
  return AdKeyword;
};