const router = require('express').Router();
const { UserCocktail, Cocktail, User, Recipe  } = require('../../db/models');


router.delete('/', async (req, res) => {
  const { id } = req.body;
  

  try {
   
    await Recipe.destroy(({where: {id}}));
    res.json({destroy: 'OK'});
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;