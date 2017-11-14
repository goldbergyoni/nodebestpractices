var Faker = require('../lib');
var faker = new Faker({ locale: 'az', localeFallback: 'en' });
faker.locales['az'] = require('../lib/locales/az');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
