'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    recipe: DataTypes.STRING,
    glass: DataTypes.STRING,
    measure: DataTypes.STRING,
    video: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};