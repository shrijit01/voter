var express = require('express');
var router = express.Router();


const questionController = require('../controllers/questionController');
const optionController = require('../controllers/optionController');

//get all the questions 
router.get('/question',questionController.allQuestion)

//get the single question
router.get('/:id', questionController.viewQuestion);

//create a question 
router.post('/create',questionController.createQuestion);

// create a single option 
router.post('/:id/options/create',optionController.createOption)

// Optional that's why not implimented 
// router.delete('/:id',questionController.deleteQuestion);



//deleteQuestion and   deleteOption not implimented
module.exports = router;