'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ad.belongsTo(models.GoodImmovable);
      Ad.belongsTo(models.AgentImmovable);
      Ad.belongsTo(models.SaleStatus);
      //manytomany
      Ad.belongsToMany(models.Keyword, {through: models.AdKeyword});
      Ad.hasMany(models.AdKeyword); 
    }
  };
  Ad.init({
    datefin: DataTypes.DATE,
    datedebut: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Ad',
  });
  return Ad;
};