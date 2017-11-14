![typhonjs-escomplex](https://i.imgur.com/XBZF3h9.png)

[![NPM](https://img.shields.io/npm/v/typhonjs-escomplex.svg?label=npm)](https://www.npmjs.com/package/typhonjs-escomplex)
[![Documentation](http://docs.typhonjs.io/typhonjs-node-escomplex/typhonjs-escomplex/badge.svg)](http://docs.typhonjs.io/typhonjs-node-escomplex/typhonjs-escomplex/)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MPLv2-yellowgreen.svg?style=flat)](https://github.com/typhonjs-node-escomplex/typhonjs-escomplex/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/typhonjs/TyphonJS.svg)](https://gitter.im/typhonjs/TyphonJS)

[![Build Status](https://travis-ci.org/typhonjs-node-escomplex/typhonjs-escomplex.svg?branch=master)](https://travis-ci.org/typhonjs-node-escomplex/typhonjs-escomplex)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-node-escomplex/typhonjs-escomplex.svg)](https://codecov.io/github/typhonjs-node-escomplex/typhonjs-escomplex)
[![Dependency Status](https://www.versioneye.com/user/projects/575dc05d7757a0003bd4c2a3/badge.svg?style=flat)](https://www.versioneye.com/user/projects/575dc05d7757a0003bd4c2a3)

`typhonjs-escomplex` provides next generation Javascript complexity reports by utilizing [babylon](https://github.com/babel/babylon) w/ all plugins enabled to parse JS source code feeding the rest of the AST / processing modules which are available separately. Please review the [typhonjs-node-escomplex](https://github.com/typhonjs-node-escomplex) organization for all of the separate components which may be used independently if direct AST processing is required. `typhonjs-escomplex` simply provides a shim using `babylon` to produce the AST.

Work is swiftly being finished.

More information forthcoming. This NPM module can be installed as a dependency in `package.json` as follows:
```
"dependencies": {
  "typhonjs-escomplex": "^0.0.9"
}
```


An ES6 example follows:
```
import escomplex from 'typhonjs-escomplex';

const source = <some JS source code>;

const report = escomplex.analyzeModule(source);
```


A CJS example follows:
```
var escomplex = require('typhonjs-escomplex');

var source = <some JS source code>;

var report = escomplex.analyzeModule(source);
```
