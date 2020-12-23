'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoodImmovable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GoodImmovable.hasMany(models.Ad);
      GoodImmovable.belongsTo(models.Keyword);
      GoodImmovable.belongsTo(models.Feature);
    }
  };
  GoodImmovable.init({
    description: DataTypes.STRING,
    surface: DataTypes.STRING,
    prix: DataTypes.FLOAT,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GoodImmovable',
  });
  return GoodImmovable;
};