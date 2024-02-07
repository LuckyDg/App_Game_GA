drop table if exists videojuegos;
drop table if exists valoraciones;

CREATE TABLE IF NOT EXISTS videojuegos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    genero VARCHAR(50),
    plataforma VARCHAR(50),
    fecha_lanzamiento DATE,
    stock INT DEFAULT 0,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS valoraciones (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_videojuego INT REFERENCES videojuegos(id),
    puntuacion INT CHECK (puntuacion >= 1 AND puntuacion <= 5),
    comentario TEXT,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
