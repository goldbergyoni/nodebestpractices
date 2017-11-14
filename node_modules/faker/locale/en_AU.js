var Faker = require('../lib');
var faker = new Faker({ locale: 'en_AU', localeFallback: 'en' });
faker.locales['en_AU'] = require('../lib/locales/en_AU');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
