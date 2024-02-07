import { pool } from "../data/db";
import { Valoracion } from "../models/valoracion.model";
import { getIo } from "../socket";

export const getValoracionesPorVideojuego = async (idVideojuego: number): Promise<Valoracion[]> => {
    const res = await pool.query('SELECT * FROM valoraciones WHERE id_videojuego = $1', [idVideojuego]);
    return res.rows;
};

export const addValoracion = async (valoracion: Valoracion): Promise<void> => {
    const { id_usuario, id_videojuego, puntuacion, comentario } = valoracion;
    await pool.query(
        'INSERT INTO valoraciones (id_usuario, id_videojuego, puntuacion, comentario) VALUES ($1, $2, $3, $4)',
        [id_usuario, id_videojuego, puntuacion, comentario]
    );
    const io = getIo();
    io.emit('valoracionAñadida', { message: 'Se ha añadido una nueva valoración.' });
};