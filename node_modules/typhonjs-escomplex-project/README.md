![typhonjs-escomplex-project](https://i.imgur.com/bU71qsX.png)

[![NPM](https://img.shields.io/npm/v/typhonjs-escomplex-project.svg?label=npm)](https://www.npmjs.com/package/typhonjs-escomplex-project)
[![Documentation](http://docs.typhonjs.io/typhonjs-node-escomplex/typhonjs-escomplex-project/badge.svg)](http://docs.typhonjs.io/typhonjs-node-escomplex/typhonjs-escomplex-project/)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MPLv2-yellowgreen.svg?style=flat)](https://github.com/typhonjs-node-escomplex/typhonjs-escomplex-project/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/typhonjs/TyphonJS.svg)](https://gitter.im/typhonjs/TyphonJS)

[![Build Status](https://travis-ci.org/typhonjs-node-escomplex/typhonjs-escomplex-project.svg?branch=master)](https://travis-ci.org/typhonjs-node-escomplex/typhonjs-escomplex-project)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-node-escomplex/typhonjs-escomplex-project.svg)](https://codecov.io/github/typhonjs-node-escomplex/typhonjs-escomplex-project)
[![Dependency Status](https://www.versioneye.com/user/projects/575de44d7757a00041b3b906/badge.svg?style=flat)](https://www.versioneye.com/user/projects/575de44d7757a00041b3b906)

Provides project oriented AST processing for typhonjs-escomplex complexity reports. The following JS AST generators are supported / tested: [acorn](https://www.npmjs.com/package/acorn), [babylon](https://www.npmjs.com/package/babylon), [espree](https://www.npmjs.com/package/espree), [esprima](https://www.npmjs.com/package/esprima). Any compliant JS parser that supports Babylon or ESTree AST should work as well.

More information forthcoming. This NPM module can be installed as a dependency in `package.json` as follows:
```
"dependencies": {
  "typhonjs-escomplex-project": "^0.0.9"
}
```

An ES6 example follows:
```
import escomplexProject from 'typhonjs-escomplex-project';

const modules =
[
   { ast: <some parsed AST>, srcPath: 'a/file/path/1' },
   { ast: <some parsed AST>, srcPath: 'a/file/path/2' }
]);

const results = escomplexProject.analyze(modules);
```


A CJS example follows:
```
var escomplexProject = require('typhonjs-escomplex-project');

var modules =
[
   { ast: <some parsed AST>, srcPath: 'a/file/path/1' },
   { ast: <some parsed AST>, srcPath: 'a/file/path/2' }
]);

var results = escomplexProject.analyze(modules);
```
