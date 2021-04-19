/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('Appointment', () => {
  it('Deve listar todos os médicos', async () => {
    const response = await request(app).get('/consultas').send({user_id: 1}).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).not.toBeNull();
  });

  it('Deve criar uma nova consulta', async () => {
    const response = await request(app).post('/consulta').send({
      "doctor_id": 1,
      "patient_id": 4,
      "date": "2021-04-20T10:00:00-03:00"
    }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).toHaveProperty('id');
  });

  it('Deve falhar por não encontrar médico', async () => {
    const response = await request(app).post('/consulta').send({
      "doctor_id": 2,
      "patient_id": 5,
      "date": "2021-04-20T13:00:00-03:00"
    }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.status).toBe(401);
  });

  it('Deve falhar por não encontrar paciente', async () => {
    const response = await request(app).post('/consulta').send({
      "doctor_id": 1,
      "patient_id": 1,
      "date": "2021-04-20T13:00:00-03:00"
    }).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.status).toBe(401);
  });

  it('Deve cancelar uma consulta', async () => {
    const response = await request(app).delete('/consultas/7').set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).toHaveProperty('id');
  });

  it('Deve realizar update em uma consulta', async () => {
    const response = await request(app).put('/consultas/2').send({"notes": "Melhora no quadro do Paciente!"}).set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.body).toHaveProperty('id');
  });

  it('Deve falhar a edição por não encontrar a consulta', async () => {
    const response = await request(app).put('/consultas/9999').set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.status).toBe(404);
  });

  it('Deve falhar o delte por não encontrar a consulta', async () => {
    const response = await request(app).delete('/consultas/9999').set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE4NzgxODQzLCJleHAiOjE2MTkwNDEwNDN9.UdmnZRIThRzMG2Y1RfyZiVyxEhHSFzxyYdkXobnpjFE");

    expect(response.status).toBe(404);
  });
});
