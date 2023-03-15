const router = require('express').Router();

const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/appointment', appointmentRoutes);

module.exports = router;