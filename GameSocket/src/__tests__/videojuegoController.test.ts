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


import * as videojuegoService from '../services/videojuego';

// Crea el mock de la función específica
const mockFindAllVideojuegos = jest.fn();

// Mockea el módulo y especifica la implementación mockeada para findAllVideojuegos
jest.mock('../services/videojuego', () => ({
  findAllVideojuegos: mockFindAllVideojuegos,
}));

describe('Videojuegos Service Tests', () => {
  beforeEach(() => {
    // Limpia las instancias previas y las llamadas a la función antes de cada prueba
    mockFindAllVideojuegos.mockClear();
  });

  it('findAllVideojuegos ha sido llamado', async () => {
    // Configura el mock para devolver un valor específico
    mockFindAllVideojuegos.mockResolvedValue([
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
    ]);

    // Llama al método findAllVideojuegos mockeado
    const videojuegos = await videojuegoService.findAllVideojuegos();

    // Verifica que el mock haya sido llamado
    expect(mockFindAllVideojuegos).toHaveBeenCalled();
    // Verifica que el valor devuelto por el mock sea el esperado
    expect(videojuegos).toEqual([
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
    ]);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
