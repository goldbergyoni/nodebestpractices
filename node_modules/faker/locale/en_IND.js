var Faker = require('../lib');
var faker = new Faker({ locale: 'en_IND', localeFallback: 'en' });
faker.locales['en_IND'] = require('../lib/locales/en_IND');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
