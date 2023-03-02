const appointmentController = require('../controllers/appointmentController');
const isClient = require('../middleware/isClient');
const verifyToken = require('../middleware/verifyToken');


const router = require('express').Router();

router.post('/appointment', verifyToken, isClient, appointmentController.createAppointment);
router.delete('/appointment/:id', verifyToken, isClient, appointmentController.deleteAppointment);
router.put('/appointment/:id', verifyToken, isClient, appointmentController.updateAppointment);



module.exports = router;