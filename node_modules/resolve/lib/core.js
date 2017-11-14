var current = (process.versions && process.versions.node && process.versions.node.split('.')) || [];

function versionIncluded(specifier) {
    if (specifier === true) { return true; }
    var parts = specifier.split(' ');
    var op = parts[0];
    var versionParts = parts[1].split('.');

    for (var i = 0; i < 3; ++i) {
        var cur = Number(current[i] || 0);
        var ver = Number(versionParts[i] || 0);
        if (cur === ver) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        }
        if (op === '<') {
            return cur < ver;
        } else if (op === '>=') {
            return cur >= ver;
        } else {
            return false;
        }
    }
    return false;
}

var data = require('./core.json');

var core = {};
for (var mod in data) { // eslint-disable-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = versionIncluded(data[mod]);
    }
}
module.exports = core;
