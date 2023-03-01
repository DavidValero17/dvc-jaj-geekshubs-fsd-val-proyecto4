
const express = require('express');
const app = express();
//Importo el método de conexion a la base de datos
const db = require("./db/db");
const router = require('./router');
const { sequelize } = require("./models/index");
app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 4000;
db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));




