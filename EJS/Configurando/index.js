const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {
        id: 0,
        name: "Igor 3k",
        phone: "(11)444-5647"
    },
    {
        id: 1,
        name: "Monark",
        phone: "(55)999-5647"
    },
    {
        id: 2,
        name: "Jean",
        phone: "(77)120-5647"
    }
]

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.get("/", (req, res) => {

   res.render('user', {users});

})

app.get("/about", (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log("Server Rodando...");
})