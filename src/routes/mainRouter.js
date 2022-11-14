const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

router.get('/', (req, res) => {
  const { newUser, newUserId, newUserEmail } = req.session;
  renderTemplate(Main, { newUser, newUserId, newUserEmail } || null, res);
});

module.exports = router;