// PREPARANDO O BACKEND P/ RECEBER OS DADOS DO FORMULÁRIO

/*
Aprendi um segundo comando de criar rotas, o ".post"
Uma rota criada pelo ".post" só é possível ser acessada por meio de requisições dentro do site
Ou seja, não é possível acessar tais rotas por meio da url
*/

/*
Aprendi o uso do comando ".render" p/ o envio de formulários
*/

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

    app.post('/envio', function(req, res){
        res.send('Formulário Recebido!')
    })
    
app.listen(8081, function(){
    console.log('Servidor Rodando na url http://localhost:8081')
})
