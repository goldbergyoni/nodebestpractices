var credit_card = {};
module['exports'] = credit_card;
credit_card.visa = require("./visa");
credit_card.mastercard = require("./mastercard");
credit_card.discover = require("./discover");
credit_card.american_express = require("./american_express");
credit_card.maestro = require("./maestro");
