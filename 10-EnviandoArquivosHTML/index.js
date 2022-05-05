// a função "sendFile()" te permite enviar arquivos para o servidor.

const express = require('express');
const app = express();


// é possível eu enviar um arquivo completo de HTML
app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});
// o "__dirname" retorna o caminho completo até o meu diretório principal
// nesse caso seria a pasta em que o arquivo desse código está
// supondo que o endereço desse arquivo fosse "C:\Users\user\Desktop\teste\index.js"
// o resultado seria: "C:\Users\user\Desktop\teste\html\index.html"


// é possível eu determinar para cada rota um arquivo diferente
app.get('/bio', function(req, res){
  res.sendFile(__dirname + '/html/bio.html');
});


app.listen(8081, function(){
  console.log('Servidor Rodando na url http://localhost:8081');
});
