const express = require('express');
const featureController = require('../controllers/feature.controller');


const router = express.Router();



router.get('/', featureController.list_feature); 
router.get('/:id', featureController.detail_feature);
router.post('/', featureController.add_feature);
router.put('/:id', featureController.edit_feature);
router.delete('/:id', featureController.delete_feature);


module.exports = router;