var path = require('path');
var test = require('tape');
var resolve = require('../');

test('filter', function (t) {
    var dir = path.join(__dirname, 'resolver');
    var res = resolve.sync('./baz', {
        basedir: dir,
        packageFilter: function (pkg) {
            pkg.main = 'doom';
            return pkg;
        }
    });
    t.equal(res, path.join(dir, 'baz/doom.js'));
    t.end();
});
