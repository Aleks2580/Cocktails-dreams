const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Upload = require('../views/Upload');



router.get('/', (req, res) => {
  const { newUser, newUserId, newUserEmail } = req.session;
  renderTemplate(Upload, {newUser, newUserId, newUserEmail} || null, res);
});




module.exports = router;