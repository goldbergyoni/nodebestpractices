var Faker = require('../lib');
var faker = new Faker({ locale: 'en_CA', localeFallback: 'en' });
faker.locales['en_CA'] = require('../lib/locales/en_CA');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
