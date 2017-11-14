'use strict';

const path = require('path');
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const karma = require('karma');
const WebpackConfig = require('./WebpackConfig');

const descriptor = require('./package.json');


let config = new WebpackConfig(descriptor, {
  src: './src/RecursiveIterator.js',
  dist: './dist/'
});


gulp.task(
  `${config.name}/build`,
  function () {
    let cfg = config.get();
    cfg.output.library = 'RecursiveIterator';
    return gulp
      .src(config.path.src)
      .pipe(webpackStream(cfg))
      .pipe(gulp.dest(config.path.dist));
  }
);

gulp.task(
  `${config.name}/watch`, function () {
    return gulp
      .watch(`${config.path.src}**/*.*`, [
        `${config.name}/build`
      ]);
  }
);

gulp.task(
  `${config.name}/test`,
  function (next) {
    new karma.Server({
      configFile: path.resolve('karma.conf.js')
    }, next).start();
  }
);


gulp.task(
  'default',
  [
    `${config.name}/build`,
    `${config.name}/test`
  ]
);