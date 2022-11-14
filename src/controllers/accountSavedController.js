const renderTemplate = require('../lib/renderTemplate');
const Saved = require('../views/Saved');
const { UserCocktail, Cocktail, User  } = require('../../db/models');

const renderAccSaved = async (req,res) => {
  const newUser = req.session?.newUser;
  const email = req.session.newUserEmail;
  const currentUserId = await User.findOne({where: {email}});
  const userId = currentUserId.id;


  const userCocktail = await UserCocktail.findAll({where: {userId}});
 

  const data = [];

  for (let i = 0; i < userCocktail.length; i++) {
    const a = await Cocktail.findOne({ raw: true, where: { id: userCocktail[i].cocktailId } });
    data.push(a);
  }

  

  renderTemplate(Saved, {newUser, data}, res)

}

module.exports = {renderAccSaved}