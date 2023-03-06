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

        return res.json(newAppointment);
    } catch (error) {

        return res.status(500).send(error.message);
    }
}

appointmentController.deleteAppointment = async (req, res) => {
    const appointmentId = req.params.id;

    const deleteAppointment = await Appointment.destroy({ where: { id: appointmentId, client_id: req.clientId } })

    return res.json(deleteAppointment);
}

appointmentController.updateAppointment = async (req, res) => {
    const appointmentId = req.params.id;

    const date = req.body.date;
    const hour = req.body.hour;
    const price = req.body.price;
    const about = req.body.about;

    const updateAppointment = await Appointment.update({ date: date, hour: hour, price: price, about: about }, { where: { id: appointmentId, client_id: req.clientId } })

    return res.json(updateAppointment);
}



module.exports = appointmentController;