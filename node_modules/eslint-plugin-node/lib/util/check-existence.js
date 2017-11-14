/**
 * @fileoverview Rule to check whether or not `require()` is valid.
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const exists = require("./exists")
const getAllowModules = require("./get-allow-modules")

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Checks whether or not each requirement target exists.
 *
 * It looks up the target according to the logic of Node.js.
 * See Also: https://nodejs.org/api/modules.html
 *
 * @param {RuleContext} context - A context to report.
 * @param {ImportTarget[]} targets - A list of target information to check.
 * @returns {void}
 */
module.exports = function checkForExistence(context, targets) {
    const allowed = new Set(getAllowModules(context))

    for (const target of targets) {
        const missingModule = (
            target.moduleName != null &&
            !allowed.has(target.moduleName) &&
            target.filePath == null
        )
        const missingFile = (
            target.moduleName == null &&
            !exists(target.filePath)
        )

        if (missingModule || missingFile) {
            context.report({
                node: target.node,
                loc: target.node.loc,
                message: "\"{{name}}\" is not found.",
                data: target,
            })
        }
    }
}
