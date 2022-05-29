const express = require('express');
const app =  express();

//conexão com o banco de dados:
const BD = require('./models/db');

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html");
});

//criação de tabela
const User = require('./models/tablaUsers')

app.post("/cadastro", (req, res) =>{
    res.json(__dirname + "/views/Cad.html");
});

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));


app.listen(8080, () =>{
    console.log("servido iniciado na porta 8080: http://localhost:8080")
});




