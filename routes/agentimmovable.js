const express = require('express');
const agentimmovableController = require('../controllers/agentimmovable.controller');

const auth = require('../middlewares/auth');
const router = express.Router();



router.get('/',auth(), agentimmovableController.list_agentimmovable); 
router.get('/:id', agentimmovableController.detail_agentimmovable);
router.post('/register', agentimmovableController.agent_register); 
router.post('/login', agentimmovableController.agent_login);
router.put('/:id', agentimmovableController.edit_agentimmovable);
router.delete('/:id', agentimmovableController.delete_agentimmovable);


module.exports = router;