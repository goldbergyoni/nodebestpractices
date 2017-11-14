var Faker = require('../lib');
var faker = new Faker({ locale: 'zh_TW', localeFallback: 'en' });
faker.locales['zh_TW'] = require('../lib/locales/zh_TW');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;
