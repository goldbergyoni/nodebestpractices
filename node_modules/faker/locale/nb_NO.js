var Faker = require('../lib');
var faker = new Faker({ locale: 'nb_NO', localeFallback: 'en' });
faker.locales['nb_NO'] = require('../lib/locales/nb_NO');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
