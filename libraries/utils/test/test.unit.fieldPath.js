const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);
const sinon = require('sinon');
const faker = require('faker');
const testServices = require('testServices');
const enums = require('../enums');

const FieldPath = require('../fieldPath');


describe("FieldPath parser tests #cold #fast #utils", () => {

  before(function () {

  });

  describe('Testing FieldPath parser', () => {
    it('Testing parsing with no hops', async () => {
      const fieldPath = "CurrentObject().State";
      let parsedFormula = new FieldPath(fieldPath);
      expect(parsedFormula.toString()).to.be.equal(fieldPath);
      expect(parsedFormula.numberOfHops).to.be.equal(0);
      expect(parsedFormula.fieldApiName).to.be.equal("State");
      expect(parsedFormula.entityApiName).to.be.equal("CurrentObject()");
    });

    it('Testing parsing of 1 hop', async () => {
      const fieldPath = "CurrentObject().$AccountManager<Account>.Name";
      let parsedFormula = new FieldPath(fieldPath);
      expect(parsedFormula.toString()).to.be.equal(fieldPath);
      expect(parsedFormula.numberOfHops).to.be.equal(1);
      expect(parsedFormula.fieldApiName).to.be.equal("AccountManager");
      expect(parsedFormula.entityApiName).to.be.equal("CurrentObject()");
      expect(parsedFormula.hop).not.to.be.null;
      expect(parsedFormula.hop.entityApiName).to.be.equal("Account");
      expect(parsedFormula.hop.fieldApiName).to.be.equal("Name");
    });

    it('Testing parsing of 2 hops', async () => {
      const fieldPath = "CurrentObject().$AccountOwner<User>.$BuyingCompany<Company>.Address";
      let parsedFormula = new FieldPath(fieldPath);
      expect(parsedFormula.toString()).to.be.equal(fieldPath);
      expect(parsedFormula.numberOfHops).to.be.equal(2);
      expect(parsedFormula.entityApiName).to.be.equal("CurrentObject()");
      expect(parsedFormula.fieldApiName).to.be.equal("AccountOwner");
      expect(parsedFormula.hop).not.to.be.null;
      expect(parsedFormula.hop.entityApiName).to.be.equal("User");
      expect(parsedFormula.hop.fieldApiName).to.be.equal("BuyingCompany");
      expect(parsedFormula.hop.hop).not.to.be.null;
      expect(parsedFormula.hop.hop.entityApiName).to.be.equal("Company");
      expect(parsedFormula.hop.hop.fieldApiName).to.be.equal("Address");
    });

    it('Testing parsing with bad format', async () => {
      let parsedFormula;
      try {
        parsedFormula = new FieldPath("CurrentObject().$AccountOwner<User>.BuyingCompany<Company>.Address");
      } catch (err) {
        expect(err.name).to.be.equal("BadFormat");
      }

      expect(parsedFormula).to.be.undefined;

      try {
        parsedFormula = new FieldPath("CurrentObject().$AccountOwner<User.$BuyingCompany<Company>.Address");
      } catch (err) {
        expect(err.name).to.be.equal("BadFormat");
      }

      expect(parsedFormula).to.be.undefined;

      try {
        parsedFormula = new FieldPath("CurrentObject().$AccountOwner<User>.$BuyingCompany<Company>");
      } catch (err) {
        expect(err.name).to.be.equal("BadFormat");
      }

      expect(parsedFormula).to.be.undefined;
    });


  });

  afterEach(function () {
  });

  after(function () {
  });

});




