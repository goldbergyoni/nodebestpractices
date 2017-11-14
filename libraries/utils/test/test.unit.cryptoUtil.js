const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);
const sinon = require('sinon');
const faker = require('faker');
const testServices = require('testServices');

const utils = require('utils');


describe("cryptUtil tests #cold #fast #utils", () => {

  before(function () {

  });

  describe('utility test: password hashing', () => {
    it('Scenario: Hash password. Expectation: ', async () => {
      const pwd = "p@h%rd#334RFh89";
      const salt = await utils.crypto.generateSalt();
      const hashedPwd = await utils.crypto.hashPassword(pwd, salt);
      let result = await utils.crypto.verifyPassword(pwd, hashedPwd, salt);
      expect(result).to.be.equal(true);
      result = await utils.crypto.verifyPassword("fake_password", hashedPwd, salt);
      expect(result).to.be.equal(false);
    });
  });

  afterEach(function () {
  });

  after(function () {
  });

});




