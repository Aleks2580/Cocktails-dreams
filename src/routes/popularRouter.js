const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Popular = require('../views/Popular');



router.get('/',  (req, res) => {
  const { newUser, newUserId, newUserEmail } = req.session;
  renderTemplate(Popular, { newUser, newUserId, newUserEmail } || null, res);
});

module.exports = router;