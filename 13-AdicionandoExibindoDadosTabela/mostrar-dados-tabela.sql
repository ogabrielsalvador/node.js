-- MOSTRANDO DADOS DA TABELA

SELECT * FROM usuarios;
-- o resultado ao usar esse comando será:
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


SELECT * FROM usuarios WHERE idade >= 20;
-- o resultado ao usar esse comando será:
+------------------+-------------------+-------+
| nome             | email             | idade |
+------------------+-------------------+-------+
| Gabriel Salvador | gabriel@email.com |    20 |
| Julio            | julio@email.com   |    20 |
| Carlos           | carlos@email.com  |    32 |
+------------------+-------------------+-------+
3 rows in set (0.00 sec)


SELECT * FROM usuarios WHERE nome = 'Gabriel Salvador';
-- o resultado ao usar esse comando será:
+------------------+-------------------+-------+
| nome             | email             | idade |
+------------------+-------------------+-------+
| Gabriel Salvador | gabriel@email.com |    20 |
+------------------+-------------------+-------+
1 row in set (0.00 sec)
