"use strict";

module.exports = function functionName(func) {
    var name = func.displayName || func.name;
    var matches;

    // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    if (!name && (matches = func.toString().match(/function ([^\s\(]+)/))) {
        name = matches[1];
    }

    return name;
};

