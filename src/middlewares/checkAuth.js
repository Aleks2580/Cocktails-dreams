const checkAuth = (req, res, next) => {
  if (req.session.newUser) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = { checkAuth };