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

-- Inserir categorias
INSERT INTO categorias (categoria, createdAt, updatedAt) VALUES
('Esporte', NOW(), NOW()),
('Casual', NOW(), NOW()),
('Moda Feminina', NOW(), NOW());

-- Inserir produtos da categoria Esporte
INSERT INTO produtos (produto, categoria, valor, imagem, createdAt, updatedAt) VALUES
('Nike Revolution 7', 1, 250.5, 'https://cadiles.vtexassets.com/arquivos/ids/200791-1200-1200?v=638451759923170000&width=1200&height=1200&aspect=true', NOW(), NOW()),
('Under Dagger 4', 1, 329.99, 'https://oscarcalcados.vtexassets.com/arquivos/ids/6927503/image-c07a7a16ea9b481aac049077caf00110.jpg?v=638439674283970000', NOW(), NOW()),
('Olimpikus Venum', 1, 140.6, 'https://d2tgkknf0jkrgw.cloudfront.net/Custom/Content/Products/75/26/75264_olympikus-252-venum-marinho-limao252-venum-715736_m5_638283235944511012.png', NOW(), NOW()),
('Adidas Ultimashow', 1, 190.5, 'https://static.allianzparqueshop.com.br/produtos/tenis-adidas-ultimashow-masculino/26/NQQ-6927-326/NQQ-6927-326_zoom1.jpg?ts=1695700276', NOW(), NOW()),
('Puma Flyer Runner', 1, 170.0, 'https://oscarcalcados.vtexassets.com/arquivos/ids/4296556/image-24139a9e594c45298428725f3bdaf9d7.jpg?v=638246997575900000', NOW(), NOW()),
('Nike Air Zoom Pegasus', 1, 450.0, 'https://aesportiva.vteximg.com.br/arquivos/ids/359357-1000-1000/1_094336_0427.jpg?v=638170460682500000', NOW(), NOW()),
('Adidas Runfalcon', 1, 230.0, 'https://static.kapiva.com.br/public/kapiva/imagens/produtos/tenis-adidas-runfalcon-2-0-preto-branco-amarelo-4370.png', NOW(), NOW()),
('Mizuno Wave Prophecy', 1, 899.99, 'https://mizunobr.vtexassets.com/arquivos/ids/232355-800-800?v=638191789429700000&width=800&height=800&aspect=true', NOW(), NOW()),
('Asics Gel Nimbus', 1, 750.0, 'https://asicsbr.vteximg.com.br/arquivos/ids/477344-1000-1000/null.jpg', NOW(), NOW()),
('Fila Kenya Racer', 1, 299.99, 'https://mediacdn.wtennis.com.br/catalog/product/f/i/fila_kenya_racer_kr5_ag_13_1019318_1.jpg', NOW(), NOW()),
('New Balance 1080v11', 1, 550.0, 'https://acdn.mitiendanube.com/stores/001/166/827/products/tenis_new_balance_1080v12_corrida_9233_1_f246e224a09e28a4e526ba3db68c47cb1-6e0133e441312b91eb16776156242004-640-0.jpg', NOW(), NOW()),
('Saucony Endorphin Speed', 1, 600.0, 'https://m.media-amazon.com/images/I/31cjbwDJwtL._AC_UL240_SR240,220_.jpg', NOW(), NOW()),
('Brooks Ghost 14', 1, 520.0, 'https://static.runnea.pt/images/202402/brooks-ghost-14-gtx-sapatilhas-running-514x514x90xX.jpg?1', NOW(), NOW());

-- Inserir produtos da categoria Casual
INSERT INTO produtos (produto, categoria, valor, imagem, createdAt, updatedAt) VALUES
('Fila Acd Classic SE', 2, 320.99, 'https://imgmarketplace.lojasrenner.com.br/20001/3631/7010702382469/7510705405186/0.jpeg', NOW(), NOW()),
('Adidas Breaknet', 2, 189.99, 'https://cdn.awsli.com.br/600x1000/1343/1343110/produto/246990950/whatsapp-image-2024-01-04-at-09-57-05-17dqvqopv8.jpeg', NOW(), NOW()),
('Mormaii Urban One', 2, 151.85, 'https://imgcentauro-a.akamaihd.net/1366x1366/M14JCQ15.jpg', NOW(), NOW()),
('Lacoste Europa', 2, 299.99, 'https://esportelegal.fbitsstatic.net/img/p/tenis-lacoste-europa-masculino-95278/332397-1.jpg?w=800&h=800&v=no-change&qs=ignore', NOW(), NOW()),
('Olympikus Only 2', 2, 175.9, 'https://vulcabras.vtexassets.com/arquivos/ids/210963/43711902_2-005-01.jpg?v=637590152498630000', NOW(), NOW()),
('Nike Air Max', 2, 499.9, 'https://artwalk.vtexassets.com/arquivos/ids/491436/FD581-0-101-1.jpg?v=638470727183030000', NOW(), NOW()),
('Puma RS-X', 2, 379.99, 'https://images.tcdn.com.br/img/img_prod/1048024/tenis_puma_rs_x_3d_geek_branco_394312_05_7765_1_f396190b9a6435efb288841f1221a23a.jpg', NOW(), NOW()),
('New Balance 574', 2, 299.0, 'https://cdn.bnws3.com.br/b2online.com.br/image/cache/data/produtos/new-balance/masculino/tenis-new-balance-574-v2-masculino-marinho---cinza-8785-23-08-15-1200x1200.jpg', NOW(), NOW()),
('Asics Gel-Lyte III', 2, 450.0, 'https://d1ubrw5u7b0xq6.cloudfront.net/Custom/Content/Products/50/56/5056_asics-gel-lyte-iii-og1201a482-800_l3_637671499073929644.jpg', NOW(), NOW());

-- Inserir produtos da categoria Moda Feminina
INSERT INTO produtos (produto, categoria, valor, imagem, createdAt, updatedAt) VALUES
('Nike Downshifter 12', 3, 253.99, 'https://cdnv2.moovin.com.br/kenpo/imagens/produtos/lista/tenis-nike-downshifter-12-feminino-bege-roxo-d9d1fc94b5ab98bd019b4b1febcc124b.jpg', NOW(), NOW()),
('Everlast Force 2', 3, 225.99, 'https://cdn.awsli.com.br/600x700/2472/2472960/produto/288250022/d4d901a35618ea520eecf86616e16d56-4xas8vm9w7.png', NOW(), NOW()),
('Fila Renno Sport', 3, 399.99, 'https://imgcentauro-a.akamaihd.net/1366x1366/M11WGO01.jpg', NOW(), NOW()),
('Mizuno Action 3', 3, 423.5, 'https://mizunobr.vtexassets.com/arquivos/ids/233770-800-800?v=638223640435600000&width=800&height=800&aspect=true', NOW(), NOW()),
('Adidas Duramo 10', 3, 299.9, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLpbvGWz_7hw5UABq781sF-wMg09-QWfnxQ&s', NOW(), NOW()),
('Puma Flyer Runner', 3, 189.99, 'https://d2ne65t3epzl8v.cloudfront.net/Custom/Content/Products/99/22/992277_tenis-puma-flyer-runner-feminino-12866_l20_637437407506726722.jpg', NOW(), NOW()),
('Asics Gel Pulse', 3, 379.99, 'https://imgcentauro-a.akamaihd.net/1366x1366/99004876.jpg', NOW(), NOW()),
('Reebok Royal Glide', 3, 349.0, 'https://cdn.awsli.com.br/600x700/2292/2292677/produto/308170869/reebok-royal-glide-ripple-cln-feminino-dv4614-216_20230330095620.jpg', NOW(), NOW()),
('Nike Renew Ride 3', 3, 290.0, 'https://imgnike-a.akamaihd.net/1920x1920/014203TA.jpg', NOW(), NOW());



select *  from clientes;
select *  from pedidos;
select *  from produtos 
join categorias on produtos.categoria = categorias.id;