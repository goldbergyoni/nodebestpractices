var Faker = require('../lib');
var faker = new Faker({ locale: 'en_GB', localeFallback: 'en' });
faker.locales['en_GB'] = require('../lib/locales/en_GB');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
