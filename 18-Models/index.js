// MODELS SÃO PARA REALIZAR CRIAÇÕES/ALTERAÇÕES DE TABELAS/DADOS NO BANCO DE DADOS

const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '0919.lra', {
    host: 'localhost',
    dialect: 'mysql'
})



// CRIAÇÃO DE UMA TABELA NOVA

/*
a constante "Cliente" comporta todos os dados da tabela "clientes"
o ".define()" retorna o comando com os dados do nome da tabela e os das suas colunas e o tipo de cada uma delas
*/
const Cliente = sequelize.define('clientes', {

    // const Clientes = sequelize.define("NomeDaTabela", {"NomesDasColunas"})

    // {"NomeColuna1": {"InfosDaColuna1"}, "NomeColuna2": {"InfosDaColuna2"}}

    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/*
faz a chamada da const Cliente e realiza a criação de uma tabela nova
com base nos critérios descritos na const Cliente
após ela ser usada, essa chamada deve se tornar um comentário
pois se não toda vez que o código for rodado, uma tabela nova irá ser criada com os mesmos critérios
*/

// Cliente.sync({force: true})

/*
após executar o código com o comando acima, esse será o resultado:
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| nome      | varchar(255) | YES  |     | NULL    |                |
| sobrenome | varchar(255) | YES  |     | NULL    |                |
| idade     | int          | YES  |     | NULL    |                |
| email     | varchar(255) | YES  |     | NULL    |                |
| createdAt | datetime     | NO   |     | NULL    |                |
| updatedAt | datetime     | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
*/
/*
--> no console irá aparecer isso:
Executing (default): DROP TABLE IF EXISTS `clientes`;
Executing (default): CREATE TABLE IF NOT EXISTS `clientes` (`id` INTEGER NOT NULL auto_increment , `nome` VARCHAR(255), `sobrenome` VARCHAR(255), `idade` INTEGER, `email` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `clientes`
*/



// INSERINDO DADOS EM UMA TABELA

/*
a tabela que vc deseja inserir novos dados deve ser chamada, nesse caso é a "const Cliente"
o ".create()" realiza o comando da inserção dos dados referente a cada coluna informados a ele
*/

Cliente.create({

    // "ConstReferenteTabela".create({"DadosDePreenchimentoDaTabela"})

    // {"NomeColuna1": "Dados1", "NomeColuna2": "Dados2"}

    nome: 'Clodoaldo', 
    sobrenome: 'Neves',
    idade: 72,
    email: 'clodoaldodaborracharia27@email.com'
})

/*
--> após executar o código com o comando acima, esse será o resultado:
+----+--------+-----------+-------+----------------------+---------------------+---------------------+
| id | nome   | sobrenome | idade | email                | createdAt           | updatedAt           |
+----+--------+-----------+-------+----------------------+---------------------+---------------------+
|  1 | Sergio | Reis      |    67 | sergioreis@email.com | 2022-05-06 14:31:15 | 2022-05-06 14:31:15 |
+----+--------+-----------+-------+----------------------+---------------------+---------------------+
*/
/*
--> no console irá aparecer isso:
Executing (default): INSERT INTO `clientes` (`id`,`nome`,`sobrenome`,`idade`,`email`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?);
*/
