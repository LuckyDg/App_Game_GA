// videojuegoController.test.ts
import request from 'supertest';
import app from '../app'; // Asegúrate de exportar tu app correctamente
// const { server } = require('../app');
describe('GET /api/videojuegos', () => {
    it('debería obtener todos los videojuegos', async () => {
        const res = await request(app).get('/api/videojuegos');
        expect(res.statusCode).toEqual(200);
        // Aquí podrías verificar también el contenido de la respuesta
    });
});

// afterAll((done) => {
//     server.close(done); // Cierra el servidor
// });