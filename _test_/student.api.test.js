const request = require('supertest');
const app = require('../server'); // Make sure server.js exports app, not server.listen()

describe('Student API Endpoints', () => {
  it('should create a new student', async () => {
    const res = await request(app).post('/api/students').send({
      name: 'Aakriti',
      email: 'aakriti@example.com',
      course: 'IT',
      age: 21
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Aakriti');
  });

  it('should get all students', async () => {
    const res = await request(app).get('/api/students');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
