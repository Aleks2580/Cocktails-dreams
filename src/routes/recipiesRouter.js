
const express = require('express');
const router = express.Router();
const { renderRecipies } = require('../controllers/recipiesController')




router.get('/', renderRecipies);





module.exports = router;