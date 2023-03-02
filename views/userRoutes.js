const userController = require('../controllers/userController');
const isClient = require('../middleware/isClient');
const verifyToken = require('../middleware/verifyToken');



const router = require('express').Router();

router.get('/profile', verifyToken, userController.getProfile);
router.put('/profile/update', verifyToken, userController.updateProfile);
router.get('/appointments/checkall', verifyToken, isClient, userController.getAppointmentsByUser);







module.exports = router;