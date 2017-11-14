var Faker = require('../lib');
var faker = new Faker({ locale: 'tr', localeFallback: 'en' });
faker.locales['tr'] = require('../lib/locales/tr');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
