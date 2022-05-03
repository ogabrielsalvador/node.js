// importando uma biblioteca pública
var http = require('http')

http.createServer(function(req, res){     // criando um servidor local
  res.end('Hello World! Welcome  to my website.');    // mensagem na página desse site criado
}).listen(8081);      // refere-se a porta em que esse servidor irá utilizar

// digitar "localhost:8081" no navegador p/ abrir essa servidor local

console.log('O Servidor rodando!');
