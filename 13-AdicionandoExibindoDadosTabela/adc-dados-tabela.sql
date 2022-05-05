-- ADICIONANDO DADOS NA TABELA

INSERT INTO usuarios(nome, email, idade) VALUES(
  'Gabriel Salvador',
  'gabriel@email.com',
  20
);

INSERT INTO usuarios(idade, nome, email) VALUES(
  15,
  'Maria Clara',
  'mariaclara@email.com'
);

INSERT INTO usuarios(email, idade, nome) VALUES(
  'carlos@email.com',
  32,
  'Carlos'
);

INSERT INTO usuarios(nome, idade, email) VALUES(
  'Ana',
  18,
  'ana@email.com'
);

INSERT INTO usuarios(nome, email, idade) VALUES(
  'Julio',
  'julio@email.com',
  20
);

-- depois de todas as inclusões a tabela ficará assim:
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
