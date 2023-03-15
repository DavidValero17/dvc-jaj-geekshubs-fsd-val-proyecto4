
const express = require('express');
const db = require("./db");
const router = require("./router");
const app = express();

app.use(express.json());
app.use(router)


const PORT = 4000;

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));




