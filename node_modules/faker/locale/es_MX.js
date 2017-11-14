var Faker = require('../lib');
var faker = new Faker({ locale: 'es_MX', localeFallback: 'en' });
faker.locales['es_MX'] = require('../lib/locales/es_MX');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
