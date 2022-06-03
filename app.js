const express = require('express');
const app =  express();
const BodyParse = require('body-parser');

//conexão com o banco de dados:
const BD = require(__dirname + '/models/db');

//criação de tabela
const User = require(__dirname + '/models/tablaUsers');

//tornando-os estaticos.
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));

//configurando o body-parse(recolhando dados de um formulário):
app.use(BodyParse.json());
app.use(BodyParse.urlencoded({extended:false}));

//criação de rotas:
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/cadastro", (req, res) =>{
    res.sendFile(__dirname + "/views/Cad.html");
});

app.get("/AdminPage", (req, res)=>{
    res.sendFile(__dirname + "/views/AdminPage.html");
})

app.post("/AddOK", (req,res)=>{
    User.create({
        Usuario: req.body.usuario,
        Telefone: req.body.telefone,
        Email: req.body.email,
        Password: req.body.password
    }).then(()=>{
        res.sendFile(__dirname + "/views/CadOK.html");
    }).catch((erro)=>{
        res.status(400).send(`houve algum tipo de erro${erro}`);
    });
});

//iniciando o servidor:
app.listen(8080, () =>{
    console.log("servido iniciado na porta 8080: http://localhost:8080");
});




