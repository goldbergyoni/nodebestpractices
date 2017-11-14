![typhonjs-escomplex-module](https://i.imgur.com/xsQDVG1.png)

[![NPM](https://img.shields.io/npm/v/typhonjs-escomplex-module.svg?label=npm)](https://www.npmjs.com/package/typhonjs-escomplex-module)
[![Documentation](http://docs.typhonjs.io/typhonjs-node-escomplex/typhonjs-escomplex-module/badge.svg)](http://docs.typhonjs.io/typhonjs-node-escomplex/typhonjs-escomplex-module/)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MPLv2-yellowgreen.svg?style=flat)](https://github.com/typhonjs-node-escomplex/typhonjs-escomplex-module/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/typhonjs/TyphonJS.svg)](https://gitter.im/typhonjs/TyphonJS)

[![Build Status](https://travis-ci.org/typhonjs-node-escomplex/typhonjs-escomplex-module.svg?branch=master)](https://travis-ci.org/typhonjs-node-escomplex/typhonjs-escomplex-module)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-node-escomplex/typhonjs-escomplex-module.svg)](https://codecov.io/github/typhonjs-node-escomplex/typhonjs-escomplex-module)
[![Dependency Status](https://www.versioneye.com/user/projects/575ddc4a7757a00034dc5438/badge.svg?style=flat)](https://www.versioneye.com/user/projects/575ddc4a7757a00034dc5438)

Provides module / individual file oriented AST processing for typhonjs-escomplex complexity reports. The following JS AST generators are supported / tested: [acorn](https://www.npmjs.com/package/acorn), [babylon](https://www.npmjs.com/package/babylon), [espree](https://www.npmjs.com/package/espree), [esprima](https://www.npmjs.com/package/esprima). Any compliant JS parser that supports Babylon or ESTree AST should work as well.

More information forthcoming. This NPM module can be installed as a dependency in `package.json` as follows:
```
"dependencies": {
  "typhonjs-escomplex-module": "^0.0.9"
}
```

An ES6 example follows:
```
import escomplexModule from 'typhonjs-escomplex-module';

const ast = <some parsed AST>;

const report = escomplexModule.analyze(ast);
```


A CJS example follows:
```
var escomplexModule = require('typhonjs-escomplex-module');

var ast = <some parsed AST>;

var report = escomplexModule.analyze(ast);
```
