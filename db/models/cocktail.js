'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, { through: models.UserCocktail, foreignKey: 'cocktailId' });
    }
  }
  Cocktail.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    recipe: DataTypes.STRING,
    glass: DataTypes.STRING,
    measure: DataTypes.STRING,
    video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};