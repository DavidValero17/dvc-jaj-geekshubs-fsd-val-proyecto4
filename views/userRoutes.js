const userController = require('../controllers/userController');
const isClient = require('../middleware/isClient');
const verifyToken = require('../middleware/verifyToken');
const isDoctor = require('../middleware/isDoctor');
const isAdmin = require('../middleware/isAdmin');



const router = require('express').Router();

router.get('/profile', verifyToken, userController.getProfile);
router.put('/profile/update', verifyToken, userController.updateProfile);
router.get('/profile/checkallclients', verifyToken, isAdmin, userController.getAllClients);
router.get('/appointments/checkall', verifyToken, isClient, userController.getAppointmentsByUser);
router.get('/appointments/checkall/admin', verifyToken, isAdmin, userController.getAllAppointments);







module.exports = router;