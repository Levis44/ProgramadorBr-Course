const express = require('express');
const fs = require('fs');
const { format } = require('path');
const app = express();

let user = {
    id: 0,
    name: "Igor",
    phone: "(222)234-5647"
}

function render(data, obj) {
    
    for(let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key]);
    }
    return data
}          


app.get("/", (req, res) => {

    fs.readFile('./templates/user.html', 'UTF8', (err,data) => {
        res.send(render(data, user));        
    })

})

app.listen(3000, () => {
    console.log("Server Rodando...");
})