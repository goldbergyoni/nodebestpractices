var Faker = require('../lib');
var faker = new Faker({ locale: 'en_IE', localeFallback: 'en' });
faker.locales['en_IE'] = require('../lib/locales/en_IE');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
