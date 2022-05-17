// CRIANDO FORMULÁRIO DE CADASTRO DE POSTS

const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o banco de dados MySQL
        const sequelize = new Sequelize('teste', 'root', '0919.lra', {
            host: 'localhost', 
            dialect: 'mysql'
        })

// Rotas

    app.get('/cadastro', function(req, res){
        res.render('formulario')
    })
    
app.listen(8081, function(){
    console.log('Servidor Rodando na url http://localhost:8081')
})
