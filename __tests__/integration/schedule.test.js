/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Schedule', () => {
  it('Deve listar a agenda', async () => {
    const response = await request(app).get('/agenda/1').set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).not.toBeNull();
  });
});
