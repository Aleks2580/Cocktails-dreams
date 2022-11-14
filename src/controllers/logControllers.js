const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body; 
 try {
   const user = await User.findOne({where: {email}});
   const passCheck = await bcrypt.compare(password, user.password)
   if(passCheck) {
    req.session.newUser = user.login;
    req.session.newUserEmail = user.email;
    req.session.newUserId = user.id;
    req.session.save(() => {
      res.redirect('/');
   });
 } else {
  res.redirect('/login');
}
} catch (error) {
res.send('Incorrect password!');
}
};


module.exports = { renderLogin, loginUser };