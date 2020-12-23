const express = require('express');
const buyerController = require('../controllers/buyer.controller');

const auth = require('../middlewares/auth');
const router = express.Router();



router.get('/',auth(), buyerController.list_buyer); 
router.get('/:id', buyerController.detail_buyer);
router.post('/register', buyerController.buyer_register); 
router.post('/login', buyerController.buyer_login);
router.put('/:id', buyerController.edit_buyer);
router.delete('/:id', buyerController.delete_buyer);


module.exports = router;