const { User, Appointment } = require("../models");

const userController = {};

userController.getProfile = async (req, res) => {
    const userId = req.userId;


    const user = await User.findByPk(userId)

    return res.json(user);
}

userController.updateProfile = async (req, res) => {

    const userId = req.userId;

    const name = req.body.name;
    const surname = req.body.surname;
    const phone = req.body.phone;
    const email = req.body.email;

    const updateProfile = await User.update({name : name, surname:surname,phone:phone,email:email},{ where:{ id: userId}})

    return res.json(updateProfile);
}

userController.getAppointmentsByUser = async(req, res) => {
    const appointments = await Appointment.findAll({ where:{ client_id : req.clientId }});


    return res.json(appointments)
}


module.exports = userController;