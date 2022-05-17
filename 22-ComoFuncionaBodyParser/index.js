// CONFIGURANDO O BODY PARSER E VENDO SEU FUNCIONAMENTO

/*
O Body Parser é responsável pelo controle dos dados enviados do formulário
*/

const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Conexão com o banco de dados MySQL
        const sequelize = new Sequelize('teste', 'root', '0919.lra', {
            host: 'localhost',
            dialect: 'mysql'
        })

// Rotas

    app.get('/cadastro', function(req, res){
        res.render('formulario')
    })

    app.post('/envio', function(req, res){
        res.send('Titulo: ' + req.body.titulo +
        '<br>Conteudo: ' + req.body.conteudo)
    })

app.listen(8081, function(){
    console.log('Servidor Rodando na url http://localhost:8081')
})
