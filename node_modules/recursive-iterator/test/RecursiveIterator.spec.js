

describe('RecursiveIterator must be defined', function() {
    it('RecursiveIterator to be defined', function() {
        expect(RecursiveIterator).toBeDefined();
    });
});


describe('RecursiveIterator returns instance of RecursiveIterator', function() {
    it('RecursiveIterator must be instance of RecursiveIterator', function() {
        var iterator = new RecursiveIterator({});
        expect(iterator instanceof RecursiveIterator).toBe(true);
    });
});


describe('Actual iteration should return the object of the specified type', function() {
    var root = {
        object: {
            number: 1
        },
        string: 'walker'
    };

    var iterator = new RecursiveIterator(root);
    var state = iterator.next().value;

    it('it object must have "parent" property', function() {
        expect(state.hasOwnProperty('parent')).toBeTruthy();
    });
    it('it object must have "node" property', function() {
        expect(state.hasOwnProperty('node')).toBeTruthy();
    });
    it('it object must have "key" property', function() {
        expect(state.hasOwnProperty('key')).toBeTruthy();
    });
    it('it object must have "path" property', function() {
        expect(state.hasOwnProperty('path')).toBeTruthy();
    });
    it('it object must have "deep" property', function() {
        expect(state.hasOwnProperty('deep')).toBeTruthy();
    });
});


describe('The end of the iteration', function() {
    var root = {
        object: {
            number: 1
        },
        string: 'walker'
    };

    var iterator = new RecursiveIterator(root);
    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();

    it('item.value must undefined', function() {
        expect(iterator.next().value).toBeUndefined();
    });
    it('item.done must true', function() {
        expect(iterator.next().done).toBe(true);
    });
});


describe('Do not iterate over objects if it keys.length === 0', function() {
    var root = new Date();
    var queue = [];

    var iterator = new RecursiveIterator(root);
    for(var item = iterator.next(); !item.done; item = iterator.next()) {
        var state = item.value;
        queue.push(state.parent);
        queue.push(state.node);
        queue.push(state.key);
        queue.push(state.path);
        queue.push(state.deep);
    }

    it('queue.length must be 0', function() {
        expect(queue.length).toEqual(0);
    });
});


describe('Iterate through array-like objects', function() {
    // This is an array-like object
    var rootOne = {
        '0': 1,
        'length': 1
    };
    var queueOne = [];

    var iteratorOne = new RecursiveIterator(rootOne);
    for(var itemOne = iteratorOne.next(); !itemOne.done; itemOne = iteratorOne.next()) {
        var stateOne = itemOne.value;
        queueOne.push(stateOne);
    }

    it('queue.length must be 1', function() {
        expect(queueOne.length).toEqual(1);
    });

    // This is not array-like object
    var rootTwo = {
        'width': 0,
        'height': 0,
        'length': 0
    };
    var queueTwo = [];

    var iteratorTwo = new RecursiveIterator(rootTwo);
    for(var itemTwo = iteratorTwo.next(); !itemTwo.done; itemTwo = iteratorTwo.next()) {
        var stateTwo = itemTwo.value;
        queueTwo.push(stateTwo);
    }

    it('queue.length must be 3', function() {
        expect(queueTwo.length).toEqual(3);
    });
});


describe('Testing of destroy() method', function() {
    var root = {
        object: {
            number: 1
        },
        string: 'walker'
    };

    it('After call of iterator.destroy() item.value === undefined', function() {
        var iterator = new RecursiveIterator(root);
        iterator.next();
        expect(iterator.next().value).toBeDefined();
        iterator.destroy();
        expect(iterator.next().value).toBeUndefined();
        expect(iterator.next().value).toBeUndefined();
    });
    it('After call of iterator.destroy() item.done === true', function() {
        var iterator = new RecursiveIterator(root);
        iterator.next();
        expect(iterator.next().done).toBeFalsy();
        iterator.destroy();
        expect(iterator.next().done).toBeTruthy();
        expect(iterator.next().done).toBeTruthy();
    });
});


describe('Testing of isNode() method', function() {
    it('Calls for each node', function() {
        var root = {
            date: new Date(),
            object: {
                number: 1
            },
            string: 'walker'
        };

        var isObject = function(any) {
            return any !== null && typeof any === 'object';
        };

        var iterator = new RecursiveIterator(root);
        var queue = [];
        iterator.isNode = function(any) {
            queue.push(any);
            return isObject(any);
        };
        for(var item = iterator.next(); !item.done; item = iterator.next()) {
            // empty body
        }

        expect(queue.length).toEqual(5);
    });
    it('Use isNode() for root node', function() {
        var root = {
            date: new Date(),
            object: {
                number: 1
            },
            string: 'walker'
        };

        var iterator = new RecursiveIterator(root);
        var queue = [];
        iterator.isNode = function(any) {
            return false;
        };
        for(var item = iterator.next(); !item.done; item = iterator.next()) {
            queue.push(true);
        }

        expect(queue.length).toEqual(0);
    });
    it('If returns "false" node will be skipped', function() {
        var root = {
            date: new Date(),
            object: {
                number: 1
            },
            string: 'walker'
        };

        var iterator = new RecursiveIterator(root);
        var queue = [];
        iterator.isNode = function(any) {
            return any === root;
        };
        for(var item = iterator.next(); !item.done; item = iterator.next()) {
            queue.push(item);
        }

        expect(queue.length).toEqual(3);
    });
});


describe('Testing of isLeaf() method', function() {
    var root = {
        date: new Date(),
        object: {
            number: 1
        },
        string: 'walker'
    };

    var iterator = new RecursiveIterator(root);

    it('Leaf is all primitive types', function() {
        expect(iterator.isLeaf(iterator.next().value.node)).toBeFalsy(); // date
        expect(iterator.isLeaf(iterator.next().value.node)).toBeFalsy(); // object
        expect(iterator.isLeaf(iterator.next().value.node)).toBeTruthy(); // string
    });
});


describe('Testing of isCircular() method', function() {
    var root = {
        array: [],
        object: undefined,
        string: 'walker'
    };
    root.object = root;

    var iterator = new RecursiveIterator(root, 0, true);

    it('isCircular() returns "true" if object is circular reference', function() {
        expect(iterator.isCircular(iterator.next().value.node)).toBeFalsy();
        expect(iterator.isCircular(iterator.next().value.node)).toBeTruthy();
        expect(iterator.isCircular(iterator.next().value.node)).toBeFalsy();
    });
});


describe('Vertical bypass method (bypassMode = 0)', function() {
    var root = {
        object: {
            number: 1
        },
        string: 'walker'
    };
    var queue = [];

    var iterator = new RecursiveIterator(root);
    for(var item = iterator.next(); !item.done; item = iterator.next()) {
        var state = item.value;
        queue.push(state.parent);
        queue.push(state.node);
        queue.push(state.key);
        queue.push(state.path);
        queue.push(state.deep);
    }

    it('foo [parent, node, key, path, deep]', function() {
        expect(queue.shift()).toBe(root);
        expect(queue.shift()).toBe(root.object);
        expect(queue.shift()).toBe('object');
        expect(queue.shift().join('.')).toBe('object');
        expect(queue.shift()).toBe(1);
    });
    it('foo.bar [parent, node, key, path, deep]', function() {
        expect(queue.shift()).toBe(root.object);
        expect(queue.shift()).toBe(root.object.number);
        expect(queue.shift()).toBe('number');
        expect(queue.shift().join('.')).toBe('object.number');
        expect(queue.shift()).toBe(2);
    });
    it('foo.bar.number [parent, node, key, path, deep]', function() {
        expect(queue.shift()).toBe(root);
        expect(queue.shift()).toBe(root.string);
        expect(queue.shift()).toBe('string');
        expect(queue.shift().join('.')).toBe('string');
        expect(queue.shift()).toBe(1);
    });
});


describe('Horizontal bypass method (bypassMode = 1)', function() {
    var root = {
        object: {
            number: 1
        },
        string: 'walker'
    };
    var queue = [];

    var iterator = new RecursiveIterator(root, 1);
    for(var item = iterator.next(); !item.done; item = iterator.next()) {
        var state = item.value;
        queue.push(state.parent);
        queue.push(state.node);
        queue.push(state.key);
        queue.push(state.path);
        queue.push(state.deep);
    }

    it('foo [parent, node, key, path, deep]', function() {
        expect(queue.shift()).toBe(root);
        expect(queue.shift()).toBe(root.object);
        expect(queue.shift()).toBe('object');
        expect(queue.shift().join('.')).toBe('object');
        expect(queue.shift()).toBe(1);
    });
    it('foo.bar [parent, node, key, path, deep]', function() {
        expect(queue.shift()).toBe(root);
        expect(queue.shift()).toBe(root.string);
        expect(queue.shift()).toBe('string');
        expect(queue.shift().join('.')).toBe('string');
        expect(queue.shift()).toBe(1);
    });
    it('foo.string [parent, node, key, path, deep]', function() {
        expect(queue.shift()).toBe(root.object);
        expect(queue.shift()).toBe(root.object.number);
        expect(queue.shift()).toBe('number');
        expect(queue.shift().join('.')).toBe('object.number');
        expect(queue.shift()).toBe(2);
    });
});


describe('Circular references (exception)', function() {
    var root = {
        object: undefined,
        string: 'walker'
    };
    root.object = root;
    var queue = [];

    try {
        var iterator = new RecursiveIterator(root);
        for(var item = iterator.next(); !item.done; item = iterator.next()) {
            var state = item.value;
            queue.push(state.parent);
            queue.push(state.node);
            queue.push(state.key);
            queue.push(state.path);
            queue.push(state.deep);
        }
    } catch (e) {
        var error = e;
    }

    it('if detected circular reference then will throw an exception', function() {
        expect(error instanceof Error).toBe(true);
    });
    it('if a circular reference refers to root', function() {
        expect(queue.length).toEqual(5);
    });
});


describe('Circular references (ignore)', function() {
    var root = {
        object: undefined,
        string: 'walker'
    };
    root.object = root;
    var queue = [];

    try {
        var iterator = new RecursiveIterator(root, 0, true);
        for(var item = iterator.next(); !item.done; item = iterator.next()) {
            var state = item.value;
            queue.push(state.parent);
            queue.push(state.node);
            queue.push(state.key);
            queue.push(state.path);
            queue.push(state.deep);
        }
    } catch (e) {
        var error = e;
    }

    it('ignoreCircular=true', function() {
        expect(error instanceof Error).toBe(false);
    });
    it('if a circular reference refers to root', function() {
        expect(queue.length).toEqual(10);
    });
});


describe('Max deep', function() {
    var root = {
        object: {
            number: 1
        },
        string: 'walker'
    };
    var queue = [];

    var iterator = new RecursiveIterator(root, 0, false, 1);
    for(var item = iterator.next(); !item.done; item = iterator.next()) {
        var state = item.value;
        queue.push(state.parent);
        queue.push(state.node);
        queue.push(state.key);
        queue.push(state.path);
        queue.push(state.deep);
    }

    it('maxDeep=1', function() {
        expect(queue.length).toEqual(10);
    });
});
