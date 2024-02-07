INSERT INTO videojuegos (titulo, descripcion, precio, genero, plataforma, fecha_lanzamiento, stock) VALUES 
('Super Mario Bros', 'Juego de plataformas.', 30.00, 'Plataformas', 'Nintendo', '1985-09-13', 10),
('The Legend of Zelda', 'Juego de aventura.', 35.00, 'Aventura', 'Nintendo', '1986-02-21', 5);

INSERT INTO valoraciones (id_usuario, id_videojuego, puntuacion, comentario) VALUES 
(1, 1, 5, 'Excelente juego clásico.'),
(2, 2, 4, 'Muy bueno, pero difícil.');
