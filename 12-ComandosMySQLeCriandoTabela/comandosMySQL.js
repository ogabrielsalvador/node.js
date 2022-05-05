// conceitos básicos sobre MySQL

// como acessar o MySQL no cmd
// "mysql -h localhost -u root -p"
// o "-h" refere-se ao host, o "-u" ao usuário e o "-p" irá pedir a senha de acesso

// sempre que digitar um comando no MySQL é preciso colocar ";" no final

// "SHOW DATABASES;"
// ele mostra todos os bancos de dados dentro do seu MySQL

// "CREATE DATABASE NomeDoSeuBancoDeDados;"
// irá realizar a criação de um banco de dados

// "USE NomeDoSeuBancoDeDados;"
// você irá acessar o banco de dados que vc chamou

// "SHOW TABLES;"
// irá mostras os dados do seu banco de dados (vc deve acessar ele antes de usar esse comando)

// "CREATE TABLE NomeDaTabela(AquiVaiNomeDasColunas);"
// esse comando irá realizar a criação de uma tabela no banco
// conferir o arquivo "criando-tabela.sql" como exemplo

// "DESCRIBE NomeDaTabela;"
// irá te retornar as informações sobre a tabela

// "INSERT INTO NomeDaTabela(AquiVaiNomeDasColunas) VALUES(AquiVaiValoresDasColunas);"
// irá adicionar valores na tabela
// conferir o arquivo "adc-dados-tabela.sql" como exemplo

// "SELECT * FROM NomeDaTabela;"
// irá te mostrar todos os dados da tabela
// o " * " significa estar selecionando tudo (todas as colunas no caso)
// conferir o arquivo "mostrar-dados-tabela.sql" como exemplo

// "SELECT * FROM NomeDaTabela WHERE CondiçãoDosDados"
// irá te mostrar os dados da tabela que condizem com a condição que você colocou
// conferir o arquivo "mostrar-dados-tabela.sql" como exemplo

// "DELETE FROM NomeDaTabela;"
// NUNCA USAR!! Esse comando irá apagar TODOS os dados da tabela
// conferir o arquivo "deletando-dados-tabela.sql" como exemplo

// "DELETE FROM NomeDaTabela WHERE CondiçãoDosDados;"
// irá apagar os dados da tabela que condizem com a condição que você colocou
// conferir o arquivo "deletando-dados-tabela.sql" como exemplo
