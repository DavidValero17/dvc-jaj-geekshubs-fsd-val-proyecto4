const cors = require('cors');
const express = require('express');
const db = require("./db");
const app = express();
const router = require('./router');
//Importo el método de conexion a la base de datos

let corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors());
app.use(express.json());
app.use(router);



const PORT = 4000;

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));




