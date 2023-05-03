const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const { UserCocktail, Cocktail, User, Recipe } = require("../../db/models");

router.post("/", async (req, res) => {
  const { name, ingredients, measure, recipe, glass, video, image } = req.body;

  try {
    const userId = req.session.newUserId;
    const newRecipe = await Recipe.create({
      name,
      image,
      ingredients,
      recipe,
      glass,
      measure,
      video,
      userId,
    });
  } catch (error) {
    console.log("Error while uploading!!!--->", error);
  }
  res.redirect("/upload");
});

module.exports = router;
