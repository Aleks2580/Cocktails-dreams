const express = require('express');
const { renderAccSaved } = require('../controllers/accountSavedController')


const router = express.Router();

router.get('/', renderAccSaved);

module.exports = router;