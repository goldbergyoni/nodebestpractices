module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-buster");

    grunt.initConfig({
        "buster": {
            "browser": {
                "test": {
                    "config-group": "browser"
                }
            },
            "node": {
                "test": {
                    "config-group": "node"
                }
            }
        }
    });

    grunt.registerTask("test", "Clean build, minify and run tests",
        ["buster:node:test", "buster:browser:server", "buster:browser:phantomjs", "buster:browser:test"]
    );

};
