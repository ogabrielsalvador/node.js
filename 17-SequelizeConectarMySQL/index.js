// COMO SE CONECTAR AO BANCO DE DADOS ATRAVÉS DO SEQUELIZE

const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
})

/*
const sequelize = new Sequelize('NomeDoBancoDeDadosQueVcQuerAcessar', 'Usuario', 'Senha', {
    host: 'QualHost',
    dialect: 'QualBancoDeDados'
})
*/


// FORMA DE CONFERIR SE FOI FEITA A CONEXÃO
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar: ' + erro)
})

// o ".authenticate()" irá conferir se foi possível conectar, resultando em dois casos:
// o uso do ".then()" no caso de conseguir se conectar
// ou o uso do ".catch()" no caso de não conseguir se conectar
