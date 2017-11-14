/*global Blob */
"use strict";

exports.isSupported = (function () {
    try {
        return !!new Blob();
    } catch (e) {
        return false;
    }
}());
