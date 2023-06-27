const sequelize = require('sequelize');

const connection = require('../database/database');

const paciente = connection.define(
    'tbl_paciente',
    {
        nome_paciente:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        telefone_paciente:{
            type: sequelize.STRING(10),
            allowNull:false
        },
        celular_paciente:{
            type: sequelize.STRING(11),
            allowNull:false
        },
        email_paciente:{
            type: sequelize.STRING(100),
            allowNull:false
        },
        foto:{
            type: sequelize.STRING(500),
            allowNull:false
        },
        nome_responsalvel:{
            type: sequelize.STRING(500),
            allowNull:true
        },
        telefone_responsavel:{
            type: sequelize.STRING(10),
            allowNull:true
        }
    }
);

paciente.sync({force:false});

module.exports = paciente
