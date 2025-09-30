import { prisma } from "../database";
import { app } from "../server";
import request from 'supertest'

describe('VolunteerController', () => {
  afterAll(async () => {
    await prisma.volunteer.deleteMany(); // limpa os dados criados
    await prisma.$disconnect();
  });

  it('deve criar um novo voluntário com sucesso', async () => {
    const payload = {
      name: 'Luciano',
      password: 'senhaSegura123',
      race: 'NORD',
      gender: 'MALE',
      moralAlignment: 'SKYRIM_FOR_NORDS',
      motivation: 'END_EMPIRE'
    };

    const response = await request(app)
      .post('/api/volunteers')
      .send(payload);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(payload.name);
    expect(response.body.race).toBe(payload.race);
    expect(response.body.gender).toBe(payload.gender);
    expect(response.body.moralAlignment).toBe(payload.moralAlignment);
    expect(response.body.motivation).toBe(payload.motivation);
  });
});