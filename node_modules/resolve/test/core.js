var test = require('tape');
var keys = require('object-keys');
var resolve = require('../');

test('core modules', function (t) {
    t.test('isCore()', function (st) {
        st.ok(resolve.isCore('fs'));
        st.ok(resolve.isCore('net'));
        st.ok(resolve.isCore('http'));

        st.ok(!resolve.isCore('seq'));
        st.ok(!resolve.isCore('../'));
        st.end();
    });

    t.test('core list', function (st) {
        var cores = keys(resolve.core);
        st.plan(cores.length);

        for (var i = 0; i < cores.length; ++i) {
            var mod = cores[i];
            if (resolve.core[mod]) {
                st.doesNotThrow(
                    function () { require(mod); }, // eslint-disable-line no-loop-func
                    'requiring ' + mod + ' does not throw'
                );
            } else {
                st.skip(mod + ' not supported');
            }
        }

        st.end();
    });

    t.end();
});
