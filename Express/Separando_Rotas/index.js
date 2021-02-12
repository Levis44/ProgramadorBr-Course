let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let aluno = require('./routes/aluno');



app.use(bodyParser.urlencoded({ extended: false }))

app.use("/aluno", aluno)

app.get("/", (req, res) => {
    res.send("Hello");
})



app.listen(3000, () => {console.log("Server rodando...");})
