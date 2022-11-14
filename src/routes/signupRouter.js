const express = require('express');

const router = express.Router();

const {renderSignup, regUser} = require('../controllers/regControllers');

router
  .get('/', renderSignup)
  .post('/', regUser)



module.exports = router;