const DefinePlugin = require('webpack/lib/DefinePlugin')
const { ignoreLoader, rel } = require('./lib')

module.exports = {
  context: rel('src'),
  entry: './elasticsearch.angular.js',
  output: {
    filename: 'elasticsearch.angular.js',
    path: rel('dist'),
  },
  module: {
    loaders: [
      ignoreLoader([
        'src/lib/connectors/jquery.js',
        'src/lib/connectors/xhr.js',
        'promise/lib/es6-extensions',
      ]),
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
}
