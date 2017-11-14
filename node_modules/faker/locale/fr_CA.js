var Faker = require('../lib');
var faker = new Faker({ locale: 'fr_CA', localeFallback: 'en' });
faker.locales['fr_CA'] = require('../lib/locales/fr_CA');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
