const { User, Appointment, Client } = require("../models");

const userController = {};

userController.getProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId,
            {
                attributes: { exclude: ["password", "role_id"] }
            }
        )
        return res.json(user);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

userController.updateProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const name = req.body.name;
        const surname = req.body.surname;
        const phone = req.body.phone;
        const email = req.body.email;
        const updateProfile = await User.update({ name: name, surname: surname, phone: phone, email: email }, { where: { id: userId } })

        return res.json(updateProfile);

    } catch (error) {
        return res.status(500).send(error.message);

    }
}

userController.getAppointmentsByUser = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({ where: { client_id: req.clientId } });
        return res.json(appointments)
    } catch (error) {
        return res.status(500).send(error.message);

    }
}

userController.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll()
        return res.json(appointments)
    } catch (error) {
        return res.status(500).send(error.message);

    }
}

userController.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll(
            {
                include: {
                    model: User,
                    attributes: { exclude: ["password", "role_id"] }
                }
            }
        )
        return res.json(clients)
    } catch (error) {
        return res.status(500).send(error.message);

    }
}


module.exports = userController;