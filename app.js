const express = require('express');
const app =  express();

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/cadastro", (req, res) =>{
    res.sendFile(__dirname + "/views/Cad.html")
});

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));

//conexão com o banco de dados:
const BD = require('./models/db')

app.listen(8080, () =>{
    console.log("servido iniciado na porta 8080: http://localhost:8080")
});


