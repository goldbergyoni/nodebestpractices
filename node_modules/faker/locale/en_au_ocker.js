var Faker = require('../lib');
var faker = new Faker({ locale: 'en_au_ocker', localeFallback: 'en' });
faker.locales['en_au_ocker'] = require('../lib/locales/en_au_ocker');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
