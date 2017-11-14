/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "exports-style": require("./rules/exports-style"),
    "no-deprecated-api": require("./rules/no-deprecated-api"),
    "no-extraneous-import": require("./rules/no-extraneous-import"),
    "no-extraneous-require": require("./rules/no-extraneous-require"),
    "no-hide-core-modules": require("./rules/no-hide-core-modules"),
    "no-missing-import": require("./rules/no-missing-import"),
    "no-missing-require": require("./rules/no-missing-require"),
    "no-unpublished-bin": require("./rules/no-unpublished-bin"),
    "no-unpublished-import": require("./rules/no-unpublished-import"),
    "no-unpublished-require": require("./rules/no-unpublished-require"),
    "no-unsupported-features": require("./rules/no-unsupported-features"),
    "process-exit-as-throw": require("./rules/process-exit-as-throw"),
    "shebang": require("./rules/shebang"),
}
