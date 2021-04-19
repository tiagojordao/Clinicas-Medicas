/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('Deve cadastrar um novo usuário', async () => {
    const response = await request(app).post('/user').send({
      name: 'Marcos',
      phone: '84999999999',
      email: 'marcos@gmail.com',
      password: '123456',
      position: 'PACIENTE',
    });

    expect(response.body).toHaveProperty('id');
  });

  it('Deve falhar cadastro por email já cadastrado', async () => {
    const response = await request(app).post('/user').send({
      name: 'Carla',
      phone: '84999999999',
      email: 'carla@gmail.com',
      password: '123456',
      position: 'PACIENTE',
    });

    expect(response.status).toBe(400);
  });

  it('Deve Listar todos os Usuários', async () => {
    const response = await request(app).get('/users').set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).not.toBeNull();
  });

  it('Deve deletar um usuário cadastrado', async () => {
    const response = await request(app).delete('/user/5').set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).toHaveProperty('id');
  });

  it('Deve alterar um usuário', async () => {
    const response = await request(app).put('/user/1').send({
      name: 'Joao',
    }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).toHaveProperty('id');
  });
});
