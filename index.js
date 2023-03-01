
const express = require('express');
const db = require("./db");

const app = express();
//Importo el método de conexion a la base de datos
const authRoutes = require('./views/authRoutes');


app.use(express.json());
app.use(authRoutes);


const PORT = 4000;

db.then (() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));




