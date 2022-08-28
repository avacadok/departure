INSERT INTO users (name, email, password)
VALUES 
('Ava', '123gmail.com', '123456'),
('Brandon', '121@gmai.com', '123456'),
('Snowie', '12@gmail.com', '123456');

INSERT INTO products (name, description, price_cents, material, size, category, color)
VALUES 
('The Pet Carrier', 'The Pet Carrier makes it easy to bring your furry friend wherever you go, with features like sherpa bedding, water-resistant lining, and multiple pockets (for both of you). Designed to work seamlessly with the way you already travel, it has latches that can fasten it to a car seat belt and a sleeve that can secure it to any Away luggage.', 6500, 'Nylon, leather', '47.5 cm x 27.4 cm x 27.3 cm', 'bag', 'Nylon'),
('Packing Cubes', 'Our packing cubes compress and organize everything inside your suitcase, from socks to shirts to even your bulkiest items. Made from water-resistant nylon that protects your clothes, these travel must-haves are designed with a mesh panel to make it easy to find what you need without fully unpacking. Thoughtfully packaged as a set of four, our packing cubes are designed to fit perfectly inside our luggage.', 2600, 'Nylon', '25.5 cm x 10.5 cm x 11 cm', 'accessory', 'Coast');

INSERT INTO product_pictures (product_id, url, is_thumbnail)
VALUES 
(1, 'https://imgur.com/L1xjbkY.png', true),
(1, 'https://imgur.com/fQE4dTf.png', false),
(1, 'https://imgur.com/nijLtiy.png', false),
(1, 'https://imgur.com/cXt9LQE.png', false),
(1, 'https://imgur.com/sxQcU8E.png', false),
(2, 'https://imgur.com/Ggxi9N4.png', true),
(2, 'https://imgur.com/EjTKOhQ.png', false),
(2, 'https://imgur.com/QoEo5Lq.png', false);