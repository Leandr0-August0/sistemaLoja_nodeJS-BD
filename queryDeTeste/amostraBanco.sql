create database if not exists loja;
use loja;


#AMOSTRA DE TESTES ->
INSERT INTO clientes(nome, email, tel, createdAt, updatedAt) VALUES
("Tiago", "chupaPk@gmail.com", 13696969696, NOW(), NOW()),
("Joana", "joana123@gmail.com", 11987654321, NOW(), NOW()),
("Carlos", "carlos.jr@gmail.com", 12987564789, NOW(), NOW()),
("Ana", "ana.silva@gmail.com", 11978451236, NOW(), NOW()),
("Pedro", "pedro@hotmail.com", 13984326785, NOW(), NOW()),
("Mariana", "mariana.contato@gmail.com", 21986541236, NOW(), NOW()),
("Lucas", "lucas.fernandes@gmail.com", 31965473218, NOW(), NOW()),
("Julia", "julia.tavares@yahoo.com", 47987651234, NOW(), NOW()),
("Felipe", "felipe.sales@gmail.com", 61998765432, NOW(), NOW()),
("Bruna", "bruna.melo@gmail.com", 81923456789, NOW(), NOW());

INSERT INTO pedidos(qtd, cliente, total, datPedido, datEnvio, datEntrega, createdAt, updatedAt) VALUES
(5, 1, 150.50, NOW(), NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 5 DAY, NOW(), NOW()),
(3, 2, 75.00, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 3 DAY, NOW(), NOW()),
(10, 3, 300.00, NOW(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 7 DAY, NOW(), NOW()),
(2, 4, 45.99, NOW(), NULL, NULL, NOW(), NOW()),
(8, 5, 200.80, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 4 DAY, NOW(), NOW()),
(1, 6, 22.50, NOW(), NULL, NULL, NOW(), NOW()),
(6, 7, 175.75, NOW(), NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 6 DAY, NOW(), NOW()),
(7, 8, 210.10, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 5 DAY, NOW(), NOW()),
(4, 9, 98.99, NOW(), NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 6 DAY, NOW(), NOW()),
(9, 10, 275.25, NOW(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 8 DAY, NOW(), NOW()),
(3, 1, 67.30, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 4 DAY, NOW(), NOW()),
(11, 2, 330.50, NOW(), NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 5 DAY, NOW(), NOW()),
(2, 3, 44.60, NOW(), NULL, NULL, NOW(), NOW()),
(5, 4, 150.00, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 4 DAY, NOW(), NOW()),
(4, 5, 105.40, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 3 DAY, NOW(), NOW()),
(10, 6, 290.90, NOW(), NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 7 DAY, NOW(), NOW()),
(7, 7, 195.60, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 6 DAY, NOW(), NOW()),
(8, 8, 220.15, NOW(), NOW() + INTERVAL 3 DAY, NOW() + INTERVAL 5 DAY, NOW(), NOW()),
(6, 9, 160.75, NOW(), NOW() + INTERVAL 1 DAY, NOW() + INTERVAL 4 DAY, NOW(), NOW()),
(12, 10, 350.30, NOW(), NOW() + INTERVAL 2 DAY, NOW() + INTERVAL 7 DAY, NOW(), NOW());


select *  from clientes;
select *  from pedidos;
select *  from produtos 
join categorias on produtos.categoria = categorias.id;