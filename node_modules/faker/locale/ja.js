var Faker = require('../lib');
var faker = new Faker({ locale: 'ja', localeFallback: 'en' });
faker.locales['ja'] = require('../lib/locales/ja');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
