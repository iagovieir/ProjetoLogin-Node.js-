const express = require('express');
const app =  express();
const BodyParse = require('body-parser');

//conexão com o banco de dados:
const BD = require('./models/db');

//criação de tabela
const User = require('./models/tablaUsers');

//criação de rotas:
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/cad2", (req, res) =>{
    res.sendFile(__dirname + "/views/cad2.html");
});
app.post("/AddOK", (req,res)=>{
    res.send(`your username is: ${req.body.username}`);
})

//configurando o body-parse(recolhando dados de um formulário):
app.use(BodyParse.urlencoded({extended:false}));
app.use(BodyParse.json());

//tornando-os estaticos.
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));


app.listen(8080, () =>{
    console.log("servido iniciado na porta 8080: http://localhost:8080");
});




