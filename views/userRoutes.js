const userController = require('../controllers/userController');



const router = require('express').Router();

router.get('/profile/:id', userController.getProfile);







module.exports = router;