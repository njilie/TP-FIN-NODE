const express = require('express');
const keywordController = require('../controllers/keyword.controller');


const router = express.Router();



router.get('/', keywordController.list_keyword); 
router.get('/:id', keywordController.detail_keyword);
router.post('/', keywordController.add_keyword);
router.put('/:id', keywordController.edit_keyword);
router.delete('/:id', keywordController.delete_keyword);


module.exports = router;