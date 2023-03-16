
const express = require('express');
const db = require("./db");
const cors = require('cors');
const app = express();
//Importo el método de conexion a la base de datos
const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(userRoutes);
app.use(appointmentRoutes);


const PORT = 4000;

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));




