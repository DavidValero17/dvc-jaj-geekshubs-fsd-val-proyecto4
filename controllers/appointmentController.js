const appointmentController = {};
const { Appointment } = require('../models');
// const jwt = require('jsonwebtoken');
appointmentController.createAppointment = async (req, res) => {
    try {
        //Recuperar info de la peticion
        const { date, hour, price, about, doctor_id } = req.body;
        const newAppointment = await Appointment.create(
            {
                date: date,
                hour: hour,
                price: price,
                about: about,
                doctor_id: doctor_id,
                client_id: req.clientId
            }
        )

        return res.json(newAppointment);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

appointmentController.deleteAppointment = async (req, res) => {
    const appointmentId = req.body.id;

    const deleteAppointment = await Appointment.destroy({ where:{ id: appointmentId}})

    return res.json(deleteAppointment);
}

module.exports = appointmentController;