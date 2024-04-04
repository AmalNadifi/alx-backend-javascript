const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('should return correct status code', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other routes gracefully', (done) => {
    request.get('http://localhost:7865/other', (error, response, body) => {
      expect(response.statusCode).to.equal(404); // Assuming no route is defined for /other
      done();
    });
  });
});
