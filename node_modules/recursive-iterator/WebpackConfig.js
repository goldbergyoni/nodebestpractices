'use strict';

// http://webpack.github.io/docs/
let webpack = require('webpack');


class WebpackConfig {
  /**
   * @param {Object} descriptor
   * @param {String} descriptor.name
   * @param {String} descriptor.version
   * @param {String} descriptor.homepage
   * @param {Object} path
   * @param {String} path.src
   * @param {String} path.dist
   */
  constructor(descriptor, path) {
    this.name = descriptor.name;
    this.version = descriptor.version;
    this.homepage = descriptor.homepage;
    this.path = path;
  }
  /**
   * @returns {Object}
   */
  get() {
    let entry = {};
    entry[this.name] = this.path.src;
    entry[this.name + '.min'] = this.path.src;

    return {
      entry,
      module: {
        loaders: [
          // https://github.com/babel/babel-loader
          {
            test: /\.js$/,
            loader: 'babel'
          }
        ]
      },
      devtool: "source-map",
      output: {
        libraryTarget: 'umd',
        library: this.name,
        filename: "[name].js"
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          // Minify only [name].min.js file
          // http://stackoverflow.com/a/34018909
          include: /\.min\.js$/
        }),
        new webpack.BannerPlugin(
          `/*\n` +
          ` ${this.name} v${this.version}\n` +
          ` ${this.homepage}\n` +
          `*/\n`
          , {
            entryOnly: true,
            raw: true
          })
      ]
    };
  }
}

module.exports = WebpackConfig;