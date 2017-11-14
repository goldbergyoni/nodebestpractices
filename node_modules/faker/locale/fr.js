var Faker = require('../lib');
var faker = new Faker({ locale: 'fr', localeFallback: 'en' });
faker.locales['fr'] = require('../lib/locales/fr');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
