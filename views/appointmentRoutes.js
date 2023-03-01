const appointmentController = require('../controllers/appointmentController');


const router = require('express').Router();

router.post('/appointment', appointmentController.createAppointment);


module.exports = router;