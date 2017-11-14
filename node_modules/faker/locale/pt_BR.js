var Faker = require('../lib');
var faker = new Faker({ locale: 'pt_BR', localeFallback: 'en' });
faker.locales['pt_BR'] = require('../lib/locales/pt_BR');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
