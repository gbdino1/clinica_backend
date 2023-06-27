const express = require('express');
const pacienteModel =  require('../model/pacienteModel');
const upload = require('../helpers/upload/upload');

const router = express.Router();

router.post('/paciente/inserir', upload.array('foto', 2), (req, res)=>{

    let {nome_paciente, telefone_paciente, celular_paciente, 
    email_paciente, nome_responsalvel, telefone_responsavel} = req.body;
    let foto = req.files[0].path;


    pacienteModel.create(
        {
            nome_paciente,
            telefone_paciente, 
            celular_paciente, 
            email_paciente, 
            foto,
            nome_responsalvel, 
            telefone_responsavel
        }
    ).then(
        ()=>{
            return res.statu(201).json({
                errorStatus:false,
                messageStatus: 'PACIENTE INSERIDO COM SUCESSO!'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                messageStatus: error
            });
        }
    )

});

module.exports = router;