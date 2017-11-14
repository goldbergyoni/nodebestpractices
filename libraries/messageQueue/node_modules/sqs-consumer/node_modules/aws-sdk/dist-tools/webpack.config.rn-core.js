// import path for resolving file paths
var path = require('path');
module.exports = {
    // Specify the entry point for our app.
    entry: [
        path.join(__dirname, '..', 'lib', 'core.js'),
    ],
    // Specify the output file containing our bundled code
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'aws-sdk-core-react-native.js',
        libraryTarget: 'umd',
        library: 'AWS'
    },
    resolve: {},
    module: {
        /**
         * Tell webpack how to load 'json' files.
         * By default, webpack only knows how to handle
         * JavaScript files.
         * When webpack comes across a 'require()' statement
         * where a json file is being imported, it will use
         * the json-loader.
         */
        loaders: [
            {
                test: /\.json$/,
                loaders: ['json']
            }
        ]
    }
}