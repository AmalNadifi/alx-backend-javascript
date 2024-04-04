const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore(); // Restore the spy after each test
  });

  it('should log the correct message with total amount 100 and total shipping 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message with total amount 10 and total shipping 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
