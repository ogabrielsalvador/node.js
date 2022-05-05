-- DELETANDO DADOS NA TABELA

-- NUNCA USAR ASSIM!!!
-- esse comando sem o WHERE irá apagar todos os dados da tabela
-- ou seja, NUNCA USE sem o WHERE
DELETE FROM usuarios; -- CUIDADO!! Irá deletar toda a sua tabela


DELETE FROM usuarios WHERE nome = 'Carlos';
-- antes de usar o comando os dados da tabela eram assim:
+------------------+----------------------+-------+
| nome             | email                | idade |
+------------------+----------------------+-------+
| Gabriel Salvador | gabriel@email.com    |    20 |
| Maria Clara      | mariaclara@email.com |    15 |
| Carlos           | carlos@email.com     |    32 |
| Ana              | ana@email.com        |    18 |
| Julio            | julio@email.com      |    20 |
+------------------+----------------------+-------+
5 rows in set (0.00 sec)

-- depois de usar o comando:
+------------------+----------------------+-------+
| nome             | email                | idade |
+------------------+----------------------+-------+
| Gabriel Salvador | gabriel@email.com    |    20 |
| Maria Clara      | mariaclara@email.com |    15 |
| Ana              | ana@email.com        |    18 |
| Julio            | julio@email.com      |    20 |
+------------------+----------------------+-------+
4 rows in set (0.00 sec)
