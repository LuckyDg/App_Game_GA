// controllers/videojuegoController.ts

import { Request, Response } from 'express';
import * as videojuegoService from '../services/videojuego';


export const getAllVideojuegosController = async (req: Request, res: Response) => {
    try {
        const videojuegos = await videojuegoService.findAllVideojuegos();
        res.json(videojuegos);
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
        return res.status(500).send(`Error: ${errorMessage}`);
    }
};

export const createVideojuegoController = async (req: Request, res: Response): Promise<void> => {
    try {
        await videojuegoService.createVideojuego(req.body);
        res.status(201).send('Videojuego creado con éxito');
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
        res.status(500).send(`Error al crear videojuego: ${errorMessage}`);
    }
};

export const updateVideojuegoController = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        await videojuegoService.updateVideojuego(id, req.body);
        res.send('Videojuego actualizado con éxito');
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
        res.status(500).send(`Error al actualizar videojuego: ${errorMessage}`);
    }
};

export const deleteVideojuegoController = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        await videojuegoService.deleteVideojuego(id);
        res.send('Videojuego eliminado con éxito');
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
        res.status(500).send(`Error al eliminar videojuego: ${errorMessage}`);
    }
};

export const getVideojuegoByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const videojuego = await videojuegoService.findVideojuegoById(id);
        if (videojuego) {
            res.json(videojuego);
        } else {
            res.status(404).send('Videojuego no encontrado');
        }
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
        res.status(500).send(`Error al buscar el videojuego: ${errorMessage}`);
    }
};