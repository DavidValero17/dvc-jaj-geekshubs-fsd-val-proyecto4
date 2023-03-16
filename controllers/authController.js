const authController = {};
const { User, Client } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authController.register = async (req, res) => {
    try {
        const { name, surname, phone, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);
        if (name === undefined || email === undefined|| password === undefined) {
            return res.json({
                success: false,
                message: "You must fill all the fields"
            })
        }
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
        const newClient = await Client.create({
            user_id: newUser.id
        })

        return res.json(
            {
                success: true,
                message: "User created succesfully",
                data: { newUser, newClient }
            });
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

authController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } });
        if (!user) {

            return res.send("Wrong Credentials");
        }



        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {

            return res.send("Wrong Credentials");
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

        return res.json(
            {
                success: true,
                message: "Token created",
                data: token
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

module.exports = authController;