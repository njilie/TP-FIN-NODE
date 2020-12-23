const express = require('express');
const goodimmovableController = require('../controllers/goodimmovable.controller');


const router = express.Router();



router.get('/', goodimmovableController.list_goodimmovable); 
router.get('/:id', goodimmovableController.detail_goodimmovable);
router.post('/', goodimmovableController.add_goodimmovable);
router.put('/:id', goodimmovableController.edit_goodimmovable);
router.delete('/:id', goodimmovableController.delete_goodimmovable);


module.exports = router;