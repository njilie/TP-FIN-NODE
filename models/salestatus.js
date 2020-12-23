'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SaleStatus.hasMany(models.Ad);
    }
  };
  SaleStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SaleStatus',
  });
  return SaleStatus;
};