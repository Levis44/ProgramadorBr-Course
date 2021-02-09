//IP 192.168.0.8
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')));

// PROTOCOLOS
// app.get("/", (req, res) => {
//     res.type("html"); // html
// //  res.type("txt"); // texto normal
// //  res.type("json"); // json

//     res.send("Salve GET");
// });

// app.post("/", (req, res) => {
//     res.send("Salve POST");
// });

// app.put("/", (req, res) => {
//     res.send("Salve PUT");
// });

// app.delete("/", (req, res) => {
//     res.send("Salve DELETE");
// });

// -----------------------------------------------------------

// MIDDLEWARES
// parâmetro
// let consoleMethod = (req, res, next) => {
//     console.log(req.method);
//     // se passar um parâmetro, é sempre um erro
//     //next("Error");
//     next();
// }

let consoleBody = (req, res, next) => {

    console.log(req.body);
    next();

}

let hello = (req, res) => {
    res.send("Salve");
}

app.use("/", bodyParser.json())
// .use() permite que o middleware seja usado para qualquer tipo de rota
app.use("/", consoleBody)

app.get("/",hello)
app.post("/", hello)



app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`);
});