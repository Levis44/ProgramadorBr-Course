//IP 192.168.0.8
const express = require('express');
const path = require('path');

const app = express();

app.use("/meusite",express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
    res.type("html"); // html
//  res.type("txt"); // texto normal
//  res.type("json"); // json

    res.send("Salve");

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`);
})