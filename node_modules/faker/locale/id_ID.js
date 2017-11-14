var Faker = require('../lib');
var faker = new Faker({ locale: 'id_ID', localeFallback: 'en' });
faker.locales['id_ID'] = require('../lib/locales/id_ID');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
