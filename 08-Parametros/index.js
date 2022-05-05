// os parâmetros são capazes de gerar rotas e dar dinamidade ao website.

const express = require('express');
const app = express();

// este representa a rota principal
app.get('/', function(req, res){
  res.send('Seja Bem-Vindo ao meu website!');
});

// rota específica para a 'bio'
app.get('/bio', function(req, res){
  res.send('Aqui esta explicado sobre minha bio.');
});

// rota baseado em parâmetros
// dessa forma você envia todos os parâmetros juntos de uma só vez, 'req.params'
app.get('/bio/:comida/:cargo', function(req, res){
  res.send(req.params)
})

// dessa forma você envia um parâmetro por vez, 'req.params.parametro'
app.get('/bio/:nome/:idade/:cor', function(req, res){     // os ":" indicam q são parâmetros
  res.send('<h1>Ola ' + req.params.nome + '.</h1>' +
          '<h2>Voce possui ' + req.params.idade + ' anos de idade.</h2>' +
          '<h3>Sua cor favorita e: ' + req.params.cor + '.</h3>');
});       // o 'res.send()' só pode ser enviado uma única vez, se não resulta em erro.

app.listen(8081, function(){
  console.log('Servidor Rodando na url http://localhost:8081');
});
