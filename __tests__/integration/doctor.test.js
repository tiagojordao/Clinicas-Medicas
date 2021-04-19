/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Doctor', () => {
  it('Deve listar todos os médicos', async () => {
    const response = await request(app).get('/medico').set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).not.toBeNull();
  });
});
