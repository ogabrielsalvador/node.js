-- ALTERANDO DADOS EM UMA tabela

-- NUNCA USAR ASSIM!!!
-- esse comando sem o WHERE irá alterar todos os nomes da tabela para 'Julia'
-- ou seja, NUNCA USE sem o WHERE
UPDATE usuarios SET nome = 'Julia';


UPDATE usuarios SET nome = 'Julia' WHERE nome = 'Ana';
-- antes de usar o comando os dados da tabela eram assim:
+------------------+----------------------+-------+
| nome             | email                | idade |
+------------------+----------------------+-------+
| Gabriel Salvador | gabriel@email.com    |    20 |
| Maria Clara      | mariaclara@email.com |    15 |
| Ana              | ana@email.com        |    18 |
| Julio            | julio@email.com      |    20 |
| Carlos           | carlos@email.com     |    32 |
+------------------+----------------------+-------+
5 rows in set (0.00 sec)

-- depois de usar o comando ficou assim:
+------------------+----------------------+-------+
| nome             | email                | idade |
+------------------+----------------------+-------+
| Gabriel Salvador | gabriel@email.com    |    20 |
| Maria Clara      | mariaclara@email.com |    15 |
| Julia            | ana@email.com        |    18 |
| Julio            | julio@email.com      |    20 |
| Carlos           | carlos@email.com     |    32 |
+------------------+----------------------+-------+
5 rows in set (0.00 sec)


UPDATE usuarios SET idade = 12 WHERE nome = 'Julia';
-- após o uso desse comando assim ficou a tabela:
+------------------+----------------------+-------+
| nome             | email                | idade |
+------------------+----------------------+-------+
| Gabriel Salvador | gabriel@email.com    |    20 |
| Maria Clara      | mariaclara@email.com |    15 |
| Julia            | ana@email.com        |    12 |
| Julio            | julio@email.com      |    20 |
| Carlos           | carlos@email.com     |    32 |
+------------------+----------------------+-------+
5 rows in set (0.00 sec)
