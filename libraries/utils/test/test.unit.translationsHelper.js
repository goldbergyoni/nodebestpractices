const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
chai.use(chaiAsPromised);
const utils = require('utils');
const translationsFolder = "./test/translations/";

describe("translationsHelper #cold #fast #utils", () => {

  before(function () {
    utils.translationsHelper.setTranslationsFolder(translationsFolder);
  });

  describe("translations Helper get translations", () => {
    it("Scenario: get default language translations, Expectation: get en_US json", async () => {
      const translations = utils.translationsHelper.getTranslationsData('en_US');
      expect(translations.test1).to.be.equal("test 1");
      expect(translations.test2).to.be.equal("test 2");
      expect(translations.test3).to.be.equal("test {0} {1} {0}");
    });

    it("Scenario: get translations for debug, Expectation: get default language json, replace values with object keys", async () => {
      const translations = utils.translationsHelper.getTranslationsData('debug');
      expect(translations.test1).to.be.equal("keys.test1");
      expect(translations.test2).to.be.equal("keys.test2");
      expect(translations.test3).to.be.equal("keys.test3");
    });
    
    it("Scenario: get translations for fr_FR, Expectation: get default language json, with fr_FR json overides", async () => {
      const translations = utils.translationsHelper.getTranslationsData('fr_FR');
      expect(translations.test1).to.be.equal("test 1 fr");
      expect(translations.test2).to.be.equal("test 2");
      expect(translations.test3).to.be.equal("test {0} {1} {0}");
    });
    
    it("Scenario: get not exist language translations, Expectation: get default language json", async () => {
      const translations = utils.translationsHelper.getTranslationsData('il_IL');
      expect(translations.test1).to.be.equal("test 1");
      expect(translations.test2).to.be.equal("test 2");
      expect(translations.test3).to.be.equal("test {0} {1} {0}");
    });

  });

  describe("translations Helper - translate", () => {
    it("Scenario: get key to translate, Expectation: get translation", async () => {
      const translatedPhrase = utils.translationsHelper.translate('en_US', 'test1');
      expect(translatedPhrase).to.be.equal("test 1");
    });

    it("Scenario: get key to translate with args, Expectation: get translation with formatting", async () => {
      const translatedPhrase = utils.translationsHelper.translate('en_US', 'test3', 1, 2);
      expect(translatedPhrase).to.be.equal("test 1 2 1");
    });

  });
});
