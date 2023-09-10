var express = require('express');
var router = express.Router();

const voteController = require('../controllers/voteController');

// add vote in the options 
router.post('/:id/add_vote',voteController.addVote);

// (Optional) that why not implimented ****************
// router.delete('/:id',optionController.deleteOption);



module.exports = router;