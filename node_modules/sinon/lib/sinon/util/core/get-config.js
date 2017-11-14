"use strict";

var defaultConfig = require("./default-config");

module.exports = function getConfig(custom) {
    var config = {};
    var prop;

    custom = custom || {};

    for (prop in defaultConfig) {
        if (defaultConfig.hasOwnProperty(prop)) {
            config[prop] = custom.hasOwnProperty(prop) ? custom[prop] : defaultConfig[prop];
        }
    }

    return config;
};
