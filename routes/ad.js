const express = require('express');
const adController = require('../controllers/ad.controller');


const router = express.Router();



router.get('/', adController.list_ad); 
router.get('/:id', adController.detail_ad);
router.post('/', adController.add_ad);
router.put('/:id', adController.edit_ad);
router.delete('/:id', adController.delete_ad);


module.exports = router;