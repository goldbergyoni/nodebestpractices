const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);
const sinon = require('sinon');
const faker = require('faker');
const testServices = require('testServices');

const utils = require('../prototypes');


describe("prototype tests #cold #fast #utils", () => {

  before(function () {

  });

  describe('Test toServerString on the Date prototype', () => {
    it('Date to server string test', async () => {
      const date = new Date(2017, 7, 23, 11, 23, 39);
      date.setUTCHours(11);
      expect(date.toServerString()).to.be.equal('2017-08-23 11:23:39');
    });

    it('Date to server string test with HH hours', async () => {
      const date = new Date(2017, 7, 23, 23, 23, 39);
      date.setUTCHours(23);
      expect(date.toServerString()).to.be.equal('2017-08-23 23:23:39');
    });
  });

  afterEach(function () {
  });

  after(function () {
  });

});




