var Faker = require('../lib');
var faker = new Faker({ locale: 'en', localeFallback: 'en' });
faker.locales['en'] = require('../lib/locales/en');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
