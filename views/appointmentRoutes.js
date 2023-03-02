const appointmentController = require('../controllers/appointmentController');
const isClient = require('../middleware/isClient');
const verifyToken = require('../middleware/verifyToken');


const router = require('express').Router();

router.post('/appointment', verifyToken, isClient, appointmentController.createAppointment);


module.exports = router;