const { expect } = require('chai');
const request = require('supertest');
const { Artist } = require('../src/models');
const app = require('../src/app');

describe('/artists', () => {
  before(done => {
    Artist.sequelize
      .sync()
      .then(() => done())
      .catch(error => done(error));
  });

  beforeEach(done => {
    Artist.destroy({ where: {} })
      .then(() => done()).catch(error => done(error));
  });

  describe('POST /artists', (done) => {
    it('creates a new artist in the database', async () => {
      request(app).post('/artists').send({
        name: 'Tame Impala',
        genre: 'Rock',
      }).then(response => {
        expect(response.status).to.equal(201);
        done();
      }).catch(error => done(error));
    });
  });
});