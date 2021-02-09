let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let alunos = [
    { id: 0, nome: "José"},
    { id: 1, nome: "Maria"},
    { id: 2, nome: "Levi"},
    { id: 3, nome: "João"},
];

app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.send("Opa");
})

app.get("/alunos", (req, res) => {
    
    res.json(JSON.stringify(alunos));

})

// BODY

app.get("/aluno", (req, res) => {
    console.log(req.body);

    let aluno = alunos[req.body.id]
    res.json(aluno)

})

// URL

app.get("/aluno/:id", (req, res) => {
    
    // pega um parametro da URL
    // http://192.168.0.8:3000/aluno/1
    let aluno = alunos[req.params.id]
    res.json(aluno)

})

// QUERY

app.get("/aluna", (req, res) => {
    
    // pega da Query
    // http://192.168.0.8:3000/aluna?id=2
    let aluno = alunos[req.query.id]
    res.json(aluno)

})


app.listen(3000, () => {console.log('Server rodandoo');})