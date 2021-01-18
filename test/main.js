process.env.NODE_ENV = 'test';
process.env.PORT = 5050;
const mocha = require('mocha');
const app = require('../app');
const describe = mocha.describe;
const it = mocha.it;
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

// check all routes.
describe('Check routes', () => {
  it('route GET /pi?n=0 should return bad request, n cannot be 0 ', async () => {
    const result = await chai.request(app).get('/pi?n=0').send();
    chai.expect(result).to.have.property('status').eql(400);
    chai.expect(result).to.have.property('text').eql('n cannot be 0, ex: localhost:8080/pi?n=3');
  });

  it('route GET /pi should return bad request, n is required ', async () => {
    const result = await chai.request(app).get('/pi').send();
    chai.expect(result).to.have.property('status').eql(400);
    chai.expect(result).to.have.property('text').eql('n cannot be undefined, ex: localhost:8080/pi?n=3');
  });

  it('route GET /pi?n=3 should return "4", requirements from challenge ', async () => {
    const result = await chai.request(app).get('/pi?n=3').send();
    chai.expect(result).to.have.property('status').eql(200);
    chai.expect(result).to.have.property('text').eql('4');
  });

  it('route GET /pi?n=100 should return "7", PI 100 length', async () => {
    const result = await chai.request(app).get('/pi?n=100').send();
    chai.expect(result).to.have.property('status').eql(200);
    chai.expect(result).to.have.property('text').eql('7');
  });

  it('route GET /pi?n=1000 should return "8", PI 1000 length', async () => {
    const result = await chai.request(app).get('/pi?n=1000').send();
    chai.expect(result).to.have.property('status').eql(200);
    chai.expect(result).to.have.property('text').eql('8');
  });

});
