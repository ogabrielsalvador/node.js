// COMO SE CONECTAR AO MONGOOSE

const mongoose = require('mongoose')

// Configurando o mongoose
    mongoose.Promise = global.Promise;      // comando p/ evitar alguns erros
    // mongoose.connect('mongodb://QualHost/NomeDoBancoDeDados', {}).then().catch()
    mongoose.connect('mongodb://localhost/aprendendo', {
        useMongoClient: true                // comando p/ evitar alguns erros
    }).then(() => {
        console.log('MongoDB Conectado com sucesso...')
    }).catch((erro) => {
        console.log('Houve um erro na conexão: ' + erro)
    })
