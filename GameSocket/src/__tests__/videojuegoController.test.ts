// TODO: revisar prueba y arreglar
// import request from 'supertest';
// import app from '../app';
// // eslint-disable-next-line no-unused-vars
// import * as videojuegoService from '../services/videojuego';

// // Crea el mock de la función específica
// const mockFindAllVideojuegos = jest.fn();

// // Mockea el módulo y especifica la implementación mockeada para findAllVideojuegos
// jest.mock('../services/videojuego', () => ({
//   findAllVideojuegos: mockFindAllVideojuegos,
// }));

// describe('GET /api/videojuegos', () => {
//   beforeAll(() => {
//     // Usa el mock específico para definir el valor resuelto
//     mockFindAllVideojuegos.mockResolvedValue([
//       {
//         id: 1,
//         titulo: 'Videojuego Mockeado',
//         descripcion: 'Una descripción mockeada',
//         precio: 50,
//         genero: 'Aventura',
//         plataforma: 'PC',
//         fecha_lanzamiento: new Date('2020-01-01'),
//         stock: 5,
//         fecha_creacion: new Date('2020-01-01'),
//       },
//     ]);
//   });

//   it('debería obtener todos los videojuegos', async () => {
//     const res = await request(app).get('/api/videojuegos');
//     expect(res.statusCode).toEqual(200);
//     // Verifica que el cuerpo de la respuesta contenga los datos mockeados
//     expect(res.body).toEqual([
//       {
//         id: 1,
//         titulo: 'Videojuego Mockeado',
//         descripcion: 'Una descripción mockeada',
//         precio: 50,
//         genero: 'Aventura',
//         plataforma: 'PC',
//         fecha_lanzamiento: new Date('2020-01-01'),
//         stock: 5,
//         fecha_creacion: new Date('2020-01-01'),
//       },
//     ]);
//   });

//   afterAll(() => {
//     jest.resetAllMocks();
//   });
// });

import request from 'supertest';
import app from '../app';
import * as videojuegoService from '../services/videojuego';

// Mockea el módulo y su método findAllVideojuegos
jest.mock('../services/videojuego', () => ({
  ...jest.requireActual('../services/videojuego'), // Opcional: conserva las implementaciones reales de otros métodos
  findAllVideojuegos: jest.fn().mockResolvedValue([
    {
      id: 1,
      titulo: 'Videojuego Mockeado',
      descripcion: 'Una descripción mockeada',
      precio: 50,
      genero: 'Aventura',
      plataforma: 'PC',
      fecha_lanzamiento: new Date('2020-01-01'),
      stock: 5,
      fecha_creacion: new Date('2020-01-01'),
    },
  ]),
}));

describe('GET /api/videojuegos', () => {
  it('debería obtener todos los videojuegos', async () => {
  const res = await request(app).get('/api/videojuegos');
  expect(res.statusCode).toEqual(200);

  // Convierte las fechas de string a Date en la respuesta para la comparación
  const expectedBody = res.body.map(videojuego => ({
    ...videojuego,
    fecha_creacion: new Date(videojuego.fecha_creacion),
    fecha_lanzamiento: new Date(videojuego.fecha_lanzamiento)
  }));

  expect(expectedBody).toEqual([
    {
      id: 1,
      titulo: 'Videojuego Mockeado',
      descripcion: 'Una descripción mockeada',
      precio: 50,
      genero: 'Aventura',
      plataforma: 'PC',
      fecha_lanzamiento: new Date('2020-01-01T00:00:00.000Z'),
      stock: 5,
      fecha_creacion: new Date('2020-01-01T00:00:00.000Z'),
    },
  ]);
});
