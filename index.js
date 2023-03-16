
const express = require('express');
const db = require("./db");
const cors = require('cors');
const app = express();
//Importo el método de conexion a la base de datos
const authRoutes = require('./views/authRoutes');
const userRoutes = require('./views/userRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');


app.use(express.json());
app.use(router)


const PORT = 4000;

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));




