import * as videojuegoService from '../services/videojuego';
import { pool } from '../data/db';

jest.mock('../data/db', () => ({
    pool: {
        query: jest.fn().mockResolvedValue({
            rows: [
                {
                    id: 1,
                    titulo: 'Test Game',
                    descripcion: 'Descripción del Test Game',
                    precio: 59.99,
                    genero: 'Aventura',
                    plataforma: 'PC',
                    fecha_lanzamiento: new Date('2022-01-01'),
                    stock: 100,
                    fecha_creacion: new Date('2022-01-01')
                }
            ]
        }),
    }
}));


describe('findAllVideojuegos', () => {
    it('debería retornar una lista de videojuegos', async () => {
        const videojuegosMock = [
            {
                id: 1,
                titulo: 'Test Game',
                descripcion: 'Descripción del Test Game',
                precio: 59.99,
                genero: 'Aventura',
                plataforma: 'PC',
                fecha_lanzamiento: new Date('2022-01-01'),
                stock: 100,
                fecha_creacion: new Date('2022-01-01')
            }
        ];

        // Corrige la llamada mock aquí
        (pool.query as unknown as jest.Mock).mockResolvedValueOnce({ rows: videojuegosMock });

        const videojuegos = await videojuegoService.findAllVideojuegos();
        expect(videojuegos).toEqual(videojuegosMock);
        expect(pool.query).toHaveBeenCalledWith('SELECT * FROM videojuegos');
    });
});

// afterAll(async () => {
//     await pool.end(); // Cierra la conexión de la base de datos
// });
