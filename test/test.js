const request = require('supertest');
const app = require('../app');

describe('GET /items', () => {
  it('should return an empty list of bills', (done) => {
    request(app)
      .get('/items')
      .expect(200)
      .expect([])
      .end(done);
  });

  it('should return a list of bills', (done) => {
    const bill = {
      patientName: 'Amy Santiago',
      patientAddress: '123 Main St',
      hospitalName: 'Rainbow Hospital',
      dateOfService: '2022-01-01',
      billAmount: 1000,
    };

    request(app)
      .post('/items')
      .send(bill)
      .end(() => {
        request(app)
          .get('/items')
          .expect(200)
          .expect([bill])
          .end(done);
      });
  });
});

describe('POST /items', () => {
  it('should create a new bill', (done) => {
    const bill = {
      patientName: 'Sheldon Cooper',
      patientAddress: '456 Main St',
      hospitalName: 'Bowring Hospital',
      dateOfService: '2022-02-01',
      billAmount: 2000,
    };

    request(app)
      .post('/items')
      .send(bill)
      .expect(200)
      .expect(bill)
      .end(done);
  });
});
