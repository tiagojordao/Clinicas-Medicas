/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Token', () => {
  it('Deve falhar por token inválido', async () => {
    const response = await request(app).get('/consultas').send({user_id: 1}).set('Authorization', "Bearer aaaaaa");

    expect(response.status).toBe(401);
  });
});