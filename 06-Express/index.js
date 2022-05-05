// Framework é responsável por auxiliar as linguagens de programação na sua aplicação, havendo dois tipos deles.
// Framework minimalista: possui apenas o básico p/ focar na velocidade de programação, tornando seu uso mais simples e rápido.
// Framework full-stack: são completos, tendo todas as funcionalidades necessárias, porém torna-se mais complexo seu uso.

// utiliza-se a "const" ao invés de "var" p/ evitar que haja a sobreposição dos valores
const express = require('express');       // essa constante irá importar o módulo do express se tornando uma função
const app = express();                   // essa constante irá incorporar todo o framework do express





// essa linha precisa ser a última linha do código
app.listen(8081, function(){        // a função "listen()" cria o servidor local
  console.log('Servidor Rodando na url http://localhost:8081');
});         // a função "function()" é executada após o servidor estar no ar
// o servidor no navegador estará dando erro, pois ainda não foi definido uma rota
