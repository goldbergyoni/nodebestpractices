'use strict';

// Project metadata.
var pkg = require('../package.json'),
    options = require('./cli/options.json');

exports.name = pkg.name;

exports.version = function() {
  console.log(pkg.version);
};

exports.help = function() {
  console.log('\nUsage : %s [options] file1.js file2.js ... fileN.js', pkg.name);
  Object.keys(options).forEach(function(shortOption){
    var option = options[shortOption];
    console.log(
      '  -%s%s%s%s',
      shortOption,
      option.long ? ', --' + option.long : '',
      option.type !== 'Boolean' ? ' : ' + option.type : '',
      option.required ? ' *required*' : ''
    );
    console.log('      %s', option.desc);
  });
};
