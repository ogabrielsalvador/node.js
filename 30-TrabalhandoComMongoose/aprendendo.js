// COMO SE CONECTAR AO MONGOOSE

const mongoose = require('mongoose')


// Configurando o mongoose
    mongoose.Promise = global.Promise;      // comando p/ evitar alguns erros

    // mongoose.connect('mongodb://QualHost/NomeDoBancoDeDados', {}).then().catch()

    mongoose.connect('mongodb://localhost/aprendendo', {        // caso não exista esse banco de dados, ele será criado
                       // comando p/ evitar alguns erros
    }).then(() => {
        console.log('MongoDB Conectado com sucesso...')
    }).catch((erro) => {
        console.log('Houve um erro na conexão: ' + erro)
    })


// Model - Usuários
// Definindo o Model

// Criando const referente a collection
// a collection seria como as tabelas em MySQL
const Schema = mongoose.Schema

const Usuario = new Schema({    // configurações da collection
    nome: {
        type: String,
        require: true           // refere-se a obrigatoriedade do preenchimento desse campo
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    país: {
        type: String
    }
})

mongoose.model('usuarios', Usuario)       // criação da collection 'usuarios'

// Adicionando dados na collection
const AdicionarUsuario = mongoose.model('usuarios')

new AdicionarUsuario({
    nome: 'Marlon',
    sobrenome: 'Freitas',
    email: 'marlon@email.com',
    idade: 28
}).save().then(() => {
    console.log('Usuario criado com sucesso!')
}).catch((erro) => {
    console.log('Houve um erro: ' + erro)
})
