const appointmentController = {};
const { Appointment } = require('../models');
// const jwt = require('jsonwebtoken');
appointmentController.createAppointment = async (req, res) => {
    try {
        //Recuperar info de la peticion
        const { date, hour, price, about, doctor_id, client_id } = req.body;
        
        const newAppointment = await Appointment.create(
            {
                date: date,
                hour: hour,
                price: price,
                about: about,
                doctor_id: doctor_id,
                client_id: client_id
            }
        )
        return res.json(newAppointment);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = appointmentController;