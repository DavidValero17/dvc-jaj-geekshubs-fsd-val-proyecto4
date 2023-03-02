const authController = {};
const { User, Client } = require('../models');
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

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.send("Wrong Credentials U");
        }

        
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.send("Wrong Credentials P");
        }

        //Token propio para autenticar el usuario
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                roleId: user.role_id
            },
            'secreto'
        );
        return res.json(token);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = authController;