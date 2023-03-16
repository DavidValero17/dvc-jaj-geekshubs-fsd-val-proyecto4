const appointmentController = {};
const { Appointment } = require('../models');


appointmentController.createAppointment = async (req, res) => {
    try {
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

        return res.json(
            {
                success: true,
                message: "Appointment created",
                data: newAppointment
            }
        );
    } catch (error) {

        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
    }
}

appointmentController.deleteAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const deleteAppointment = await Appointment.destroy({ where: { id: appointmentId, client_id: req.clientId } })

        return res.json(
            {
                success: true,
                message: "Appointment deleted",
                data: deleteAppointment
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );

    }
}

appointmentController.updateAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const date = req.body.date;
        const hour = req.body.hour;
        const price = req.body.price;
        const about = req.body.about;
        const updateAppointment = await Appointment.update({ date: date, hour: hour, price: price, about: about }, { where: { id: appointmentId, client_id: req.clientId } })

        return res.json(
            {
                success: true,
                message: "Appointment updated",
                data: updateAppointment
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "something went wrong",
                error: error.message
            }
        );
    }
}



module.exports = appointmentController;