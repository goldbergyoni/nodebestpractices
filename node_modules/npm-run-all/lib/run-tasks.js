/**
 * @module run-tasks-in-parallel
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const MemoryStream = require("memorystream")
const NpmRunAllError = require("./npm-run-all-error")
const runTask = require("./run-task")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Remove the given value from the array.
 * @template T
 * @param {T[]} array - The array to remove.
 * @param {T} x - The item to be removed.
 * @returns {void}
 */
function remove(array, x) {
    const index = array.indexOf(x)
    if (index !== -1) {
        array.splice(index, 1)
    }
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Run npm-scripts of given names in parallel.
 *
 * If a npm-script exited with a non-zero code, this aborts other all npm-scripts.
 *
 * @param {string} tasks - A list of npm-script name to run in parallel.
 * @param {object} options - An option object.
 * @returns {Promise} A promise object which becomes fullfilled when all npm-scripts are completed.
 * @private
 */
module.exports = function runTasks(tasks, options) {
    return new Promise((resolve, reject) => {
        if (tasks.length === 0) {
            resolve([])
            return
        }

        const results = tasks.map(task => ({ name: task, code: undefined }))
        const queue = tasks.map((task, index) => ({ name: task, index }))
        const promises = []
        let error = null
        let aborted = false

        /**
         * Done.
         * @returns {void}
         */
        function done() {
            if (error == null) {
                resolve(results)
            }
            else {
                reject(error)
            }
        }

        /**
         * Aborts all tasks.
         * @returns {void}
         */
        function abort() {
            if (aborted) {
                return
            }
            aborted = true

            if (promises.length === 0) {
                done()
            }
            else {
                for (const p of promises) {
                    p.abort()
                }
                Promise.all(promises).then(done, reject)
            }
        }

        /**
         * Runs a next task.
         * @returns {void}
         */
        function next() {
            if (aborted) {
                return
            }
            if (queue.length === 0) {
                if (promises.length === 0) {
                    done()
                }
                return
            }

            const originalOutputStream = options.stdout
            const optionsClone = Object.assign({}, options)
            const writer = new MemoryStream(null, {
                readable: false,
            })

            if (options.aggregateOutput) {
                optionsClone.stdout = writer
            }

            const task = queue.shift()
            const promise = runTask(task.name, optionsClone)

            promises.push(promise)
            promise.then(
                (result) => {
                    remove(promises, promise)
                    if (aborted) {
                        return
                    }

                    if (options.aggregateOutput) {
                        originalOutputStream.write(writer.toString())
                    }

                    // Save the result.
                    results[task.index].code = result.code

                    // Aborts all tasks if it's an error.
                    if (result.code) {
                        error = new NpmRunAllError(result, results)
                        if (!options.continueOnError) {
                            abort()
                            return
                        }
                    }

                    // Aborts all tasks if options.race is true.
                    if (options.race && !result.code) {
                        abort()
                        return
                    }

                    // Call the next task.
                    next()
                },
                (thisError) => {
                    remove(promises, promise)
                    if (!options.continueOnError || options.race) {
                        error = thisError
                        abort()
                        return
                    }
                    next()
                }
            )
        }

        const max = options.maxParallel
        const end = (typeof max === "number" && max > 0)
            ? Math.min(tasks.length, max)
            : tasks.length
        for (let i = 0; i < end; ++i) {
            next()
        }
    })
}
