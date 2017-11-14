var Faker = require('../lib');
var faker = new Faker({ locale: 'uk', localeFallback: 'en' });
faker.locales['uk'] = require('../lib/locales/uk');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
