export interface Videojuego {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    genero: string;
    plataforma: string;
    fecha_lanzamiento: Date | null;
    stock: number;
    fecha_creacion: Date;
}
