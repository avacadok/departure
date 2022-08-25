INSERT INTO users (name, email, password)
VALUES 
('Ava', '123gmail.com', '123456'),
('Brandon', '121@gmai.com', '123456'),
('Snowie', '12@gmail.com', '123456');

INSERT INTO products (name, description, price_cents, material, size, category, color)
VALUES 
('The Pet Carrier', 'The Pet Carrier makes it easy to bring your furry friend wherever you go, with features like sherpa bedding, water-resistant lining, and multiple pockets (for both of you). Designed to work seamlessly with the way you already travel, it has latches that can fasten it to a car seat belt and a sleeve that can secure it to any Away luggage.', 6599, 'Nylon, leather', '47.5 cm x 27.4 cm x 27.3 cm', 'bag', 'Nylon');

INSERT INTO product_pictures (product_id, url, is_thumbnail)
VALUES 
(1, 'https://imgur.com/L1xjbkY', true),
(1, 'https://imgur.com/fQE4dTf', false),
(1, 'https://imgur.com/nijLtiy', false),
(1, 'https://imgur.com/cXt9LQE', false),
(1, 'https://imgur.com/sxQcU8E', false);