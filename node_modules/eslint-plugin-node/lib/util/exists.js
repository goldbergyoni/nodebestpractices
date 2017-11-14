/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs")
const path = require("path")
const Cache = require("./cache")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const ROOT = /^(?:[/.]|\.\.|[A-Z]:\\|\\\\)(?:[/\\]\.\.)*$/
const cache = new Cache()

/**
 * Check whether the file exists or not.
 * @param {string} filePath The file path to check.
 * @returns {boolean} `true` if the file exists.
 */
function existsCaseSensitive(filePath) {
    let dirPath = filePath

    while (dirPath !== "" && !ROOT.test(dirPath)) {
        const fileName = path.basename(dirPath)
        dirPath = path.dirname(dirPath)

        if (fs.readdirSync(dirPath).indexOf(fileName) === -1) {
            return false
        }
    }

    return true
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Checks whether or not the file of a given path exists.
 *
 * @param {string} filePath - A file path to check.
 * @returns {boolean} `true` if the file of a given path exists.
 */
module.exports = function exists(filePath) {
    let result = cache.get(filePath)
    if (result == null) {
        try {
            const relativePath = path.relative(process.cwd(), filePath)
            result = (
                fs.statSync(relativePath).isFile() &&
                existsCaseSensitive(relativePath)
            )
        }
        catch (error) {
            if (error.code !== "ENOENT") {
                throw error
            }
            result = false
        }
        cache.set(filePath, result)
    }

    return result
}
