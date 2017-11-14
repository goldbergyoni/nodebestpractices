var Faker = require('../lib');
var faker = new Faker({ locale: 'nep', localeFallback: 'en' });
faker.locales['nep'] = require('../lib/locales/nep');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
