export class Videojuego {
    constructor(
        public id?: number,
        public titulo: string = '',
        public descripcion: string = '',
        public precio: number = 0,
        public genero: string = '',
        public plataforma: string = '',
        public fecha_lanzamiento?: Date,
        public stock: number = 0,
        public fecha_creacion?: Date,
    ) { }
}