const router = require('express').Router();
const { UserCocktail, Cocktail, User  } = require('../../db/models');


router.delete('/', async (req, res) => {
  const { id } = req.body;

  try {
    await UserCocktail.destroy({where: {cocktailId: id}});
    await Cocktail.destroy(({where: {id}}));
    res.json({destroy: 'OK'});
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;