var Faker = require('../lib');
var faker = new Faker({ locale: 'en_BORK', localeFallback: 'en' });
faker.locales['en_BORK'] = require('../lib/locales/en_BORK');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
