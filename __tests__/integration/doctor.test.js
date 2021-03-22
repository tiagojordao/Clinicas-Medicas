/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Doctor', () => {
  it('Deve listar todos os médicos', async () => {
    const response = await request(app).get('/medico');

    expect(response.body).not.toBeNull();
  });
});
