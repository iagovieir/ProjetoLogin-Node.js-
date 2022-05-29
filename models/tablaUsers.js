const Sequelize = require('sequelize');
const BD = require('./db');

const User = BD.define('clientes',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        
    },
    Usuario:{
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
    },
    Telefone:{
        type: Sequelize.STRING(11),
        unique: true,
        allowNull: false
    },
    Email:{
        type: Sequelize.STRING(80),
        allowNull: false,
        unique: true,
    },
    Password:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

//User.sync();
//User.sync({alter: true});

module.exports = User;