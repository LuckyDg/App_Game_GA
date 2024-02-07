// services/videojuegoService.ts

import { Videojuego } from '../models/videjuego.model';
import { pool } from '../data/db';
import { getIo } from "../socket";


export const createVideojuego = async (videojuego: Videojuego): Promise<void> => {
    const { titulo, descripcion, precio, genero, plataforma, fecha_lanzamiento, stock } = videojuego;
    await pool.query(
        'INSERT INTO videojuegos (titulo, descripcion, precio, genero, plataforma, fecha_lanzamiento, stock) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [titulo, descripcion, precio, genero, plataforma, fecha_lanzamiento, stock]
    );
    const io = getIo();
    // Emitir un evento después de insertar el videojuego
    io.emit('videojuegoCreado', { message: 'Se ha creado un nuevo videojuego.' });
};

export const updateVideojuego = async (id: number, videojuego: Partial<Videojuego>): Promise<void> => {
    const { titulo, descripcion, precio, genero, plataforma, fecha_lanzamiento, stock } = videojuego;
    await pool.query(
        'UPDATE videojuegos SET titulo = $1, descripcion = $2, precio = $3, genero = $4, plataforma = $5, fecha_lanzamiento = $6, stock = $7 WHERE id = $8',
        [titulo, descripcion, precio, genero, plataforma, fecha_lanzamiento, stock, id]
    );
};

export const deleteVideojuego = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM videojuegos WHERE id = $1', [id]);
    const io = getIo();
    io.emit('videojuegoEliminado', { message: 'Se ha creado un nuevo videojuego.' });
};

export const findAllVideojuegos = async (): Promise<Videojuego[]> => {
    const res = await pool.query('SELECT * FROM videojuegos');
    return res.rows.map(row => {
        return {
            id: row.id,
            titulo: row.titulo,
            descripcion: row.descripcion,
            precio: row.precio,
            genero: row.genero,
            plataforma: row.plataforma,
            fecha_lanzamiento: row.fecha_lanzamiento,
            stock: row.stock,
            fecha_creacion: row.fecha_creacion
        };
    });
};

export const findVideojuegoById = async (id: number): Promise<Videojuego | null> => {
    const res = await pool.query('SELECT * FROM videojuegos WHERE id = $1', [id]);
    if (res.rows.length) {
        return res.rows[0];
    } else {
        return null;
    }
};
