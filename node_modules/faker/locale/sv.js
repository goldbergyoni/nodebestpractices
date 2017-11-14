var Faker = require('../lib');
var faker = new Faker({ locale: 'sv', localeFallback: 'en' });
faker.locales['sv'] = require('../lib/locales/sv');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
