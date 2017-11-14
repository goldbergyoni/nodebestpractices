# node security project npm utilities

## Methods:

### getPackageJson = function (module, callback)

Return the full package document for the given `module`.

### getShrinkwrapDependencies = function (shrinkwrapJson, callback)

Get a [depTree](#deptree-format) for the module from a full npm-shrinkwrap.json. `shrinkwrapJson` should be an object from a parsed npm-shrinkwrap.json file (or look like one): required keys: `name`, `version`, `dependencies`.

```js
var fs = require('fs');

getShrinkwrapDependencies(JSON.parse(fs.readFileSync('./npm-shrinkwrap.json')), function (err, depTree) {
    console.log(depTree);
});
```

#### depTree format

The returned `depTree` representing the full dependency tree object is in a format that's easier to traverse than a full tree. Each module in the full heirarchy has a key in the object of `module@version`. It's value is an object with `parents`, `children` and `source`.

Note that the root module has a key too.

e.g.:

```js
//depTree for some-module version 1.1.0
{
    //root module
    "some-module@1.1.0": {
        parents: [],
        children: ["depA@0.1.0", "depB@1.0.1", "depC@0.2.0"],
    },

    //root's dependencies
    "depA@0.1.0": {
        parents: ["some-module@1.1.0"],
        children: ["underscore@1.6.0"],
        source: "npm"
    },
    "depB@1.0.1": {
        parents: ["some-module@1.1.0"],
        children: ["underscore@1.6.0", "backbone@1.0.0"],
        source: "npm"
    },
    "depC@0.2.0": {
        parents: ["some-module@1.1.0"],
        children: [],
        source: "unknown" //not on npm, maybe it's private/local?
    }

    //deeper dependencies
    "underscore@1.6.0": {
        parents: ["depA@0.1.0", "depB@1.0.1", "backbone@1.6.0"], //modules can be required multiple places in the tree
        children: [],
        source: "npm"
    },
    "backbone@1.6.0": {
        parents: ["depB@1.0.1"], //modules can be required multiple places in the tree
        children: ["underscore@1.6.0"],
        source: "npm"
    }
}
```
