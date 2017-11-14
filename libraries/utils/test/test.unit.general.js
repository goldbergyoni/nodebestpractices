const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);
const sinon = require('sinon');
const faker = require('faker');
const testServices = require('testServices');

const utils = require('utils'),
  flagHelper = utils.general.flagHelper,
  stateFlags = {
      None: 0,
      Disabled: 1,
      Deleted: 2,
      Invalid: 4
    };


describe("general tests #cold #fast #utils", () => {

  before(function () {

  });

  describe('random number tests', () => {
    it('Generate random number without options (min=0, max=999, integer=true)', async () => {
      let randomNumber = utils.general.generateRandomNumber();
      expect(randomNumber).to.be.greaterThan(-1);
      expect(randomNumber).to.be.lessThan(1000);
      expect(parseInt(randomNumber, 10)).to.be.equal(randomNumber);
      randomNumber = 0;
      for (let i=0 ; i < 10 ; i++){
        randomNumber += utils.general.generateRandomNumber();
        randomNumber -= utils.general.generateRandomNumber();
      }
      expect(randomNumber).to.be.not.equal(0);
    });

    it('Generate random number without options (min=30, max=600, integer=true)', async () => {
      let randomNumber = utils.general.generateRandomNumber(30, 600);
      expect(randomNumber).to.be.greaterThan(29);
      expect(randomNumber).to.be.lessThan(601);
      expect(parseInt(randomNumber, 10)).to.be.equal(randomNumber);
      randomNumber = 0;
      for (let i=0 ; i < 10 ; i++){
        randomNumber += utils.general.generateRandomNumber(30, 600);
        randomNumber -= utils.general.generateRandomNumber(30, 600);
      }
      expect(randomNumber).to.be.not.equal(0);
    });

  });

  describe('flagHelper tests', () => {
    it('Doesn\'t have any of the flags', async () => {
      let state = stateFlags.None;
      expect(flagHelper.hasFlag(state, stateFlags.Disabled)).to.be.equal(false);
      expect(flagHelper.hasFlag(state, stateFlags.Deleted)).to.be.equal(false);
      expect(flagHelper.hasFlag(state, stateFlags.Invalid)).to.be.equal(false);
    });

    it('Add Disabled flag and test that only it exists', async () => {
      let state = flagHelper.addFlag(stateFlags.Disabled);
      expect(flagHelper.hasFlag(state, stateFlags.Disabled)).to.be.equal(true);
      expect(flagHelper.hasFlag(state, stateFlags.Deleted)).to.be.equal(false);
      expect(flagHelper.hasFlag(state, stateFlags.Invalid)).to.be.equal(false);
    });

    it('Add Disabled and Deleted flags and test that only they exist', async () => {
      let state = flagHelper.addFlag(stateFlags.Disabled);
      state = flagHelper.addFlag(state, stateFlags.Deleted);
      expect(flagHelper.hasFlag(state, stateFlags.Disabled)).to.be.equal(true);
      expect(flagHelper.hasFlag(state, stateFlags.Deleted)).to.be.equal(true);
      expect(flagHelper.hasFlag(state, stateFlags.Invalid)).to.be.equal(false);
    });

    it('Add Disabled and Deleted flags, then remove the Deleted flag and test that only Disabled exist', async () => {
      let state = flagHelper.addFlag(stateFlags.Disabled);
      state = flagHelper.addFlag(state, stateFlags.Deleted);
      expect(flagHelper.hasFlag(state, stateFlags.Disabled)).to.be.equal(true);
      expect(flagHelper.hasFlag(state, stateFlags.Deleted)).to.be.equal(true);
      expect(flagHelper.hasFlag(state, stateFlags.Invalid)).to.be.equal(false);
      state = flagHelper.removeFlag(state, stateFlags.Deleted);
      expect(flagHelper.hasFlag(state, stateFlags.Disabled)).to.be.equal(true);
      expect(flagHelper.hasFlag(state, stateFlags.Deleted)).to.be.equal(false);
      expect(flagHelper.hasFlag(state, stateFlags.Invalid)).to.be.equal(false);
    });
  });

  afterEach(function () {
  });

  after(function () {
  });

});




