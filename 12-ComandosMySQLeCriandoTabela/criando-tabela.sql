-- utilizando esse arquivo p/ escrever a criação da tabela
-- após isso, vc precisa colar o código da tabela no cmd para adc ao banco 

-- "usuarios" será o nome q a tabela irá receber
-- "nome", "email" e "idade" são os nomes das colunas da tabela
-- "VARCHAR()" e "INT" referem-se ao tipo dos dados da coluna
-- "VARCHAR()" são para dados que são caracteres
-- VARCHAR("50"), nesse a coluna possui um limite de 50 caracteres
-- "INT" são para dados que são números inteiros
CREATE TABLE usuarios(
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);
