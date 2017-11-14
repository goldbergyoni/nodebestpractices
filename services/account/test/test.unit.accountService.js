const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);
const usersServiceUnderTest = require('../accountService');
const sinon = require('sinon');
const DAL = require('../DB/usersDAL');
const faker = require('faker');
const config = require('configurationManager');
const utils = require('utils');
const testServices = require('testServices');

describe("AccountService #cold #fast #account", () => {

  before(function () {

    sinon.stub(DAL, DAL.getByEmail.name).returns(null);
    const userReturnedFromDAL = testServices.API.factorBasicUser();
    userReturnedFromDAL.id = 1;
    sinon.stub(DAL, DAL.addUser.name).returns(userReturnedFromDAL);
  });

  describe("Account Service registration", () => {
    it("Scenario: adding a new valid user. Expectation: get a valid result", async () => {
      const userToAdd = testServices.API.factorBasicUserForSignup();
      const theUserWeAdded = await new usersServiceUnderTest().addNewUser(userToAdd);
      allValidMemberExpactations(theUserWeAdded);
    });

    it("Scenario: adding an invalid user without email. Expectation: get the right error", async () => {
      const userToAdd = testServices.API.factorBasicUserForSignup();
      userToAdd.email = "sd";
      expect(new usersServiceUnderTest().addNewUser(userToAdd)).to.eventually.be.rejected;
    });

  });

  describe("Account Service get user", () => {
    it("Scenario: Get by non existing email. Expectation: get null back", async () => {
      const result = await new usersServiceUnderTest().getByEmail(faker.internet.email());
      expect(result).to.be.a('null');
    });

  });

  after(function () {
    DAL.addUser.restore();
    DAL.getByEmail.restore();
  });
});


function allValidMemberExpactations(user) {
  expect(user).to.be.a('object');
  expect(user.id).to.be.a('number');
}
