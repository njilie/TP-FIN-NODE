const express = require('express');
const salestatusController = require('../controllers/salestatus.controller');


const router = express.Router();



router.get('/', salestatusController.list_salestatus); 
router.get('/:id', salestatusController.detail_salestatus);
router.post('/', salestatusController.add_salestatus);
router.put('/:id', salestatusController.edit_salestatus);
router.delete('/:id', salestatusController.delete_salestatus);


module.exports = router;