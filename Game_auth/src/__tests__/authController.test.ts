import request from 'supertest';
import app from '../app';

describe('POST /login', () => {
  it('debería autenticar al usuario correctamente', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'user@example.com', password: 'password123' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('debería fallar con un usuario no autorizado', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'user@wrong.com', password: 'wrong' });

    expect(response.statusCode).toBe(401);
    expect(response.text).toEqual('Usuario no Autorizado');
  });
});
