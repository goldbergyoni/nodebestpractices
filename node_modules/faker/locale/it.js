var Faker = require('../lib');
var faker = new Faker({ locale: 'it', localeFallback: 'en' });
faker.locales['it'] = require('../lib/locales/it');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
