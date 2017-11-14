"use strict";

const logger = require('logger');
const enums = require('./enums');
const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const defaultLang = enums.getLanguageKey(enums.Language.en_US.value);
const debugLang = enums.getLanguageKey(enums.Language.debug.value);

class translationsHelper {

  constructor(){
    this.translationsFolder = "./translations/";
  }

  requireTranslations(lang) {
    try {
      return require(`${this.translationsFolder}${lang}`);
    }
    catch(e) {
      return {};
    }
  }

  getTranslationsData(lang) {
    let defaultLangTranslations = this.requireTranslations(defaultLang);

    if(lang == defaultLang)
      return defaultLangTranslations;

    if(lang == debugLang)
      return Object.assign(...Object.keys(defaultLangTranslations).map(k => ({[k]: "keys." + k})));

    let translations = this.requireTranslations(lang);
    return Object.assign({}, defaultLangTranslations, translations);
  }

  translate(lang, key, ...args) {
    let translations = this.getTranslationsData(lang);
    let translatedPhrase = translations[key] || '';
    return translatedPhrase.replace(/{(\d+)}/g, (match, number) => args[number] || '');
  }

  translateToUserLanguage(user, key, ...args) {
    return this.translate(user.language, key, ...args);
  }

  //for test
  setTranslationsFolder(path){
    this.translationsFolder = path;
  }

}

let instance = new translationsHelper();
module.exports = instance;
