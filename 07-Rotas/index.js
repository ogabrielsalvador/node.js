// as rotas são os caminhos que seu site pode ter através da url.

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


// a url é http://localhost:8081/blog
app.get('/blog', function(req, res){
  res.send('Esse é meu blog.');
});


app.listen(8081, function(){
  console.log('Servidor Rodando na url http://localhost:8081');
});
