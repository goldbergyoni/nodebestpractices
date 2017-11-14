var address = {};
module['exports'] = address;
address.postcode = require("./postcode");
address.state = require("./state");
address.city = require("./city");
address.default_country = require("./default_country");
