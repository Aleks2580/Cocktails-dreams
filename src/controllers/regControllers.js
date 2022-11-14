const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Signup = require('../views/Signup');

const { User } = require('../../db/models');

const renderSignup = (req, res) => {
  renderTemplate(Signup, null, res);
};

const regUser = async (req, res) => {
  const { login, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    if (!login || !email || !password) {
      res.send('Fields cannot be empty')
    } else {
      const newUser = await User.create( { login, email, password: hash});
      req.session.newUser = newUser.login;
      req.session.newUserEmail = newUser.email;
      req.session.newUserId = newUser.id;
      req.session.save(() => {
        res.redirect('/');
      }) 
    }
  } catch (error) {
    res.send(`Error occured ${error}`)
  }
}


module.exports =  {renderSignup, regUser};