export interface Valoracion {
    id?: number;
    id_usuario: number;
    id_videojuego: number;
    puntuacion: number;
    comentario: string;
    fecha_creacion?: Date;
}