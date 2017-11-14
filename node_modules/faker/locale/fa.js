var Faker = require('../lib');
var faker = new Faker({ locale: 'fa', localeFallback: 'en' });
faker.locales['fa'] = require('../lib/locales/fa');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
