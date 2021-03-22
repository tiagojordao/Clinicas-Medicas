/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('Deve cadastrar um novo usuário', async () => {
    const response = await request(app).post('/users').send({
      name: 'Julio',
      phone: '84999999999',
      email: 'emailteste@gmail.com',
      password_hash: '123456',
      position: 'Medico',
    });

    expect(response.body).toHaveProperty('id');
  });

  it('Deve deletar um usuário cadastrado', async () => {
    const response = await request(app).delete('/users/33');

    expect(response.body).toHaveProperty('id');
  });
});
