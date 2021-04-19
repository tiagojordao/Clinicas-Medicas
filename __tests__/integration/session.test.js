/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Session', () => {
  it('Deve autenticar no servidor', async () => {
    const response = await request(app).post('/authenticate').send({
        email: 'maria@gmail.com',
        password: '123456',
    });

    expect(response.body).toHaveProperty('token');
  });

  it('Deve falhar o email para autenticação', async () => {
    const response = await request(app).post('/authenticate').send({
        email: 'maria123@gmail.com',
        password: '123456',
    });

    expect(response.status).toBe(401);
  });

  it('Deve falhar a senha para autenticação', async () => {
    const response = await request(app).post('/authenticate').send({
        email: 'maria@gmail.com',
        password: '1234567890',
    });

    expect(response.status).toBe(401);
  });
});
