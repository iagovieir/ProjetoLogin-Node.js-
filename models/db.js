const Sequelize = require('sequelize');

const BD = new Sequelize("clientes","root","Edvania.2020*", {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    BD.authenticate().then(()=>{
        console.log(`conexão realizada com sucesso!`);
    });
    
}
catch(erro){
    console.erro(`conexão sem sucesso, pois apresenta o erro ${erro}.`);
}

module.exports =  BD;