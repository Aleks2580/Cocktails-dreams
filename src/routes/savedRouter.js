const express = require('express');
const router = express.Router();
const { UserCocktail, Cocktail, User  } = require('../../db/models');

router.post('/', async(req, res) => {
  const {name, image, ingredients, recipe, glass, measure, video} = req.body;

  try {
    const email = req.session.newUserEmail;
    const cocktailSaved = await Cocktail.create({name, image, ingredients, recipe, glass, measure, video})
    const currentUser = await User.findOne({where:{email}});
    const userId = currentUser.id;
    const cocktailId = cocktailSaved.id;
    const userCocktailDb = await UserCocktail.findOrCreate ({where:{userId,cocktailId}, defaults: {userId, cocktailId},})
  } catch (error) {
    console.log('savedRouter Error!!', error);
  }
})


module.exports = router;