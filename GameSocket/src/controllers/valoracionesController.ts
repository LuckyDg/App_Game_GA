import { Request, Response } from 'express';
import * as valoracionesService from '../services/valoracion';

export const getValoraciones = async (req: Request, res: Response): Promise<void> => {
    try {
        const idVideojuego = parseInt(req.params.videojuegoId);
        if (!idVideojuego) {
            res.status(400).send('ID de videojuego inválido');
            return;
        }
        const valoraciones = await valoracionesService.getValoracionesPorVideojuego(idVideojuego);
        res.json(valoraciones);
    } catch (error) {
        res.status(500).send(`Error al obtener valoraciones: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
};

export const addValoracion = async (req: Request, res: Response): Promise<void> => {
    try {
        await valoracionesService.addValoracion(req.body); // Asume que tu cuerpo de solicitud ya tiene la estructura adecuada
        res.status(201).send('Valoración añadida con éxito');
    } catch (error) {
        res.status(500).send(`Error al añadir valoración: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    }
};
