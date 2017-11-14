const DefinePlugin = require('webpack/lib/DefinePlugin')
const { ignoreLoader, rel } = require('./lib')

module.exports = {
  context: rel('src'),
  entry: './elasticsearch.js',
  output: {
    filename: 'elasticsearch.js',
    path: rel('dist'),
    library: 'elasticsearch',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      ignoreLoader([
        'src/lib/connectors/jquery.js',
        'src/lib/connectors/angular.js'
      ]),
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
}
