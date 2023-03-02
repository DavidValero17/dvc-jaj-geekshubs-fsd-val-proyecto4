const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');



const router = require('express').Router();

router.get('/profile', verifyToken, userController.getProfile);
router.put('/profile/update', verifyToken, userController.updateProfile);







module.exports = router;