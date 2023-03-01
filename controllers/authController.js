const authController = {};
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
authController.register = async (req, res) => {
    try {
        //Recuperar info de la peticion
        const { name, surname, phone, email, password } = req.body;
        //Tratar esa informacion (encriptada con bcrypt)
        const encryptedPassword = bcrypt.hashSync(password, 10);
        const newUser = await User.create(
            {
                name: name,
                surname: surname,
                phone: phone,
                email: email,
                password: encryptedPassword,
                role_id: 2
            }
        )
        return res.json(newUser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = authController;