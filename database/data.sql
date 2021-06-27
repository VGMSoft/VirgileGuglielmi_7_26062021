INSERT INTO Users (email, password, pseudo) VALUES
('postmaster@groupomania.com', 'Ainamopuorg?', 'Postmaster - Groupomania'),
('virgile.gug@gmail.com', 'Lucas2021!', 'VGMSoft'),
('catitaa19@gmail.com', 'Calypso2020', 'Catis'),
('lucas@gmail.com', 'Poulpe', 'LuLu'),
('calypso@gmail.com', 'Croquettes', 'Nini');

INSERT INTO Posts (user_id, post_content, post_date) VALUES # //TODO: sauvegarde retouts chariots
(2, 'Bienvenue sur Groupomania!', '2021-06-25 18:51:37'),
(2, 'Bienvenue sur Groupomania!', '2021-06-25 18:51:37'),
(3, 'Hola !!!', '2021-06-25 22:36:21'),
(2, 'Bientôt un mois pour Lucas!', '2021-06-26 14:32:19'),
(3, 'La chaleur est fatiguante.', '2021-06-26 14:34:12'),
(4, 'Gu?', '2021-06-26 15:02:28'),
(5, 'Miaou!', '2021-06-26 15:03:13');

INSERT INTO Comments (post_id, user_id, comment_content, comment_date) VALUES
(1, 1, 'Prométeur ce réseau social!', '2021-06-25 18:51:37'),
(5, 4, 'Miaou!', '2021-06-26 15:05:22');

INSERT INTO Likes (post_id, user_id, like_dislike) VALUES
(1, 2, TRUE),
(2, 1, TRUE),
(1, 1, FALSE),
(6, 3, TRUE);