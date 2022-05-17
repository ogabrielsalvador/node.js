// ESTRUTURANDO O BANCO DE DADOS E ORGANIZANDO O MODELS

const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

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
