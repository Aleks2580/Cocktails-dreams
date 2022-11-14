const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Search = require('../views/Search');
const { checkAuth } = require('../middlewares/checkAuth');


router.get('/', checkAuth, (req, res) => {
  const { newUser, newUserId, newUserEmail } = req.session;
  renderTemplate(Search, { newUser, newUserId, newUserEmail } || null, res);
});

module.exports = router;