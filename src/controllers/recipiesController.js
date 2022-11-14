const renderTemplate = require('../lib/renderTemplate');
const router = require('express').Router();
const Recipies = require('../views/Recipies');
const { UserCocktail, Cocktail, User, Recipe  } = require('../../db/models');



const renderRecipies = async (req,res) => {
  const newUser = req.session?.newUser;
  const email = req.session.newUserEmail;
  const currentUserId = await User.findOne({where: {email}});
  const userId = currentUserId.id;


  const userRecipies = await Recipe.findAll({where: {userId}});
 
  

  renderTemplate(Recipies, {newUser, userRecipies}, res)

}

module.exports = {renderRecipies}