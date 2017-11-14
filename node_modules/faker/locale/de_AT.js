var Faker = require('../lib');
var faker = new Faker({ locale: 'de_AT', localeFallback: 'en' });
faker.locales['de_AT'] = require('../lib/locales/de_AT');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
