var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.home);
router.use('/questions',require('./questionRoutes'));
router.use('/options',require('./optionRoutes'));

module.exports = router;
