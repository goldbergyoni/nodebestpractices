if (typeof module === "object" && typeof require === "function") {
    var buster = require("buster");
    var samsam = require("../lib/samsam");
}

(function () {

    var assert = buster.assert;

    function tests(method, body) {
        var tc = {};

        function pass(name) {
            var args = Array.prototype.slice.call(arguments, 1);
            tc["should return true for " + name] = function () {
                assert(samsam[method].apply(samsam, args));
            };
        }

        function fail(name) {
            var args = Array.prototype.slice.call(arguments, 1);
            tc["should return false for " + name] = function () {
                assert(!samsam[method].apply(samsam, args));
            };
        }

        function shouldThrow(name) {
            var args = Array.prototype.slice.call(arguments, 1);
            try {
                samsam[method].apply(samsam, args);
                buster.assertion.fail("Expected to throw");
            } catch (e) {
                assert(true);
            }
        }

        function add(name, func) {
            tc[name] = func;
        }

        body(pass, fail, shouldThrow, add);
        buster.testCase(method, tc);
    }

    tests("isElement", function (pass, fail) {
        if (typeof document !== "undefined") {
            pass("DOM element node", document.createElement("div"));
            fail("DOM text node", document.createTextNode("Hello"));
        }

        fail("primitive", 42);
        fail("object", {});
        fail("node-like object", { nodeType: 1 });
    });

    tests("isNegZero", function (pass, fail) {
        pass("-0", -0);
        fail("0", 0);
        fail("object", {});
    });

    tests("identical", function (pass, fail) {
        var object = { id: 42 };
        pass("same object", object, object);
        pass("same primitive", 42, 42);
        fail("-0 and 0", -0, 0);
        pass("NaN and NaN", NaN, NaN);
    });

    tests("deepEqual", function (pass, fail) {
        var func = function () {};
        var obj = {};
        var arr = [];
        var date = new Date();
        var sameDate = new Date(date.getTime());
        var anotherDate = new Date(date.getTime() - 10);
        var sameDateWithProp = new Date(date.getTime());
        sameDateWithProp.prop = 42;

        pass("object to itself", obj, obj);
        pass("strings", "Hey", "Hey");
        pass("numbers", 32, 32);
        pass("booleans", false, false);
        pass("null", null, null);
        pass("undefined", undefined, undefined);
        pass("function to itself", func, func);
        fail("functions", function () {}, function () {});
        pass("array to itself", arr, arr);
        pass("date objects with same date", date, sameDate);
        fail("date objects with different dates", date, anotherDate);
        fail("date objects to null", date, null);
        fail("date with different custom properties", date, sameDateWithProp);
        fail("strings and numbers with coercion", "4", 4);
        fail("numbers and strings with coercion", 4, "4");
        fail("number object with coercion", 32, new Number(32));
        fail("number object reverse with coercion", new Number(32), 32);
        fail("falsy values with coercion", 0, "");
        fail("falsy values reverse with coercion", "", 0);
        fail("string boxing with coercion", "4", new String("4"));
        fail("string boxing reverse with coercion", new String("4"), "4");
        pass("NaN to NaN", NaN, NaN);
        fail("-0 to +0", -0, +0);
        fail("-0 to 0", -0, 0);
        fail("objects with different own properties",
             { id: 42 }, { id: 42, di: 24 });
        fail("objects with different own properties #2",
             { id: undefined }, { di: 24 });
        fail("objects with different own properties #3",
             { id: 24 }, { di: undefined });
        pass("objects with one property", { id: 42 }, { id: 42 });
        pass("objects with one object property",
             { obj: { id: 42 } }, { obj: { id: 42 } });
        fail("objects with one property with different values",
             { id: 42 }, { id: 24 });

        var deepObject = {
            id: 42,
            name: "Hey",
            sayIt: function () {
                return this.name;
            },

            child: {
                speaking: function () {}
            }
        };

        pass("complex objects", deepObject, {
            sayIt: deepObject.sayIt,
            child: { speaking: deepObject.child.speaking },
            id: 42,
            name: "Hey"
        });

        pass("arrays",
             [1, 2, "Hey there", func, { id: 42, prop: [2, 3] }],
             [1, 2, "Hey there", func, { id: 42, prop: [2, 3] }]);

        fail("nested array with shallow array", [["hey"]], ["hey"]);

        var arr1 = [1, 2, 3];
        var arr2 = [1, 2, 3];
        arr1.prop = 42;
        fail("arrays with different custom properties", arr1, arr2);

        pass("regexp literals", /a/, /a/);
        pass("regexp objects", new RegExp("[a-z]+"), new RegExp("[a-z]+"));

        var re1 = new RegExp("[a-z]+");
        var re2 = new RegExp("[a-z]+");
        re2.id = 42;

        fail("regexp objects with custom properties", re1, re2);
        fail("different objects", { id: 42 }, {});
        fail("object to null", {}, null);
        fail("object to undefined", {}, undefined);
        fail("object to false", {}, false);
        fail("false to object", false, {});
        fail("object to true", {}, true);
        fail("true to object", true, {});
        fail("'empty' object to date", {}, new Date());
        fail("'empty' object to string object", {}, String());
        fail("'empty' object to number object", {}, Number());
        fail("'empty' object to empty array", {}, []);

        function gather() { return arguments; }
        var arrayLike = { length: 4, "0": 1, "1": 2, "2": {}, "3": [] };

        pass("arguments to array", [1, 2, {}, []], gather(1, 2, {}, []));
        pass("array to arguments", gather(), []);

        pass("arguments to array like object",
             arrayLike, gather(1, 2, {}, []));

        if (typeof Set !== "undefined") {
          pass("sets with the same content", new Set([1, 2, 3]), new Set([2, 1, 3]));
          fail("sets with different content", new Set([1, 2, 3]), new Set([2, 5, 3]));
       }
    });

    /**
     * Tests for cyclic objects.
     */
    tests("deepEqual", function (pass, fail) {

        (function () {
            var cyclic1 = {}, cyclic2 = {};
            cyclic1.ref = cyclic1;
            cyclic2.ref = cyclic2;
            pass("equal cyclic objects (cycle on 2nd level)", cyclic1, cyclic2);
        }());

        (function () {
            var cyclic1 = {}, cyclic2 = {};
            cyclic1.ref = cyclic1;
            cyclic2.ref = cyclic2;
            cyclic2.ref2 = cyclic2;
            fail("different cyclic objects (cycle on 2nd level)",
                cyclic1, cyclic2);
        }());

        (function () {
            var cyclic1 = {}, cyclic2 = {};
            cyclic1.ref = {};
            cyclic1.ref.ref = cyclic1;
            cyclic2.ref = {};
            cyclic2.ref.ref = cyclic2;
            pass("equal cyclic objects (cycle on 3rd level)", cyclic1, cyclic2);
        }());

        (function () {
            var cyclic1 = {}, cyclic2 = {};
            cyclic1.ref = {};
            cyclic1.ref.ref = cyclic1;
            cyclic2.ref = {};
            cyclic2.ref.ref = cyclic2;
            cyclic2.ref.ref2 = cyclic2;
            fail("different cyclic objects (cycle on 3rd level)",
                cyclic1, cyclic2);
        }());

        (function () {
            var cyclic1 = {}, cyclic2 = {};
            cyclic1.ref = cyclic1;
            cyclic2.ref = cyclic1;
            pass("equal objects even though only one object is cyclic",
                cyclic1, cyclic2);
        }());

        (function () {
            var cyclic1 = {}, cyclic2 = {};
            cyclic1.ref = {
                ref: cyclic1
            };
            cyclic2.ref = {};
            cyclic2.ref.ref = cyclic2.ref;
            pass("referencing different but equal cyclic objects",
                cyclic1, cyclic2);
        }());

        (function () {
            var cyclic1 = {a: "a"}, cyclic2 = {a: "a"};
            cyclic1.ref = {
                b: "b",
                ref: cyclic1
            };
            cyclic2.ref = {
                b: "b"
            };
            cyclic2.ref.ref = cyclic2.ref;
            fail("referencing different and unequal cyclic objects",
                cyclic1, cyclic2);
        }());
    });

    tests("match", function (pass, fail, shouldThrow, add) {
        pass("matching regexp", "Assertions", /[a-z]/);
        pass("generic object and test method returning true", "Assertions", {
            test: function () { return true; }
        });
        fail("non-matching regexp", "Assertions 123", /^[a-z]$/);
        pass("matching boolean", true, true);
        fail("mismatching boolean", true, false);
        fail("generic object with test method returning false", "Assertions", {
            test: function () { return false; }
        });
        shouldThrow("match object === null", "Assertions 123", null);
        fail("match object === false", "Assertions 123", false);
        fail("matching number against string", "Assertions 123", 23);
        fail("matching number against similar string", "23", 23);
        pass("matching number against itself", 23, 23);
        pass("matcher function returns true",
             "Assertions 123", function (obj) { return true; });
        fail("matcher function returns false",
             "Assertions 123", function (obj) { return false; });
        fail("matcher function returns falsy",
             "Assertions 123", function () {});
        fail("matcher does not return explicit true",
             "Assertions 123", function () { return "Hey"; });

        add("should call matcher with object", function () {
            var spy = this.spy();
            samsam.match("Assertions 123", spy);
            assert.calledWith(spy, "Assertions 123");
        });

        pass("matcher is substring of matchee", "Diskord", "or");
        pass("matcher is string equal to matchee", "Diskord", "Diskord");
        pass("strings ignoring case", "Look ma, case-insensitive",
             "LoOk Ma, CaSe-InSenSiTiVe");
        fail("match string is not substring of matchee", "Vim", "Emacs");
        fail("match string is not substring of object", {}, "Emacs");
        fail("matcher is not substring of object.toString", {
            toString: function () { return "Vim"; }
        }, "Emacs");
        fail("null and empty string", null, "");
        fail("undefined and empty string", undefined, "");
        fail("false and empty string", false, "");
        fail("0 and empty string", 0, "");
        fail("NaN and empty string", NaN, "");

        var object = {
            id: 42,
            name: "Christian",
            doIt: "yes",

            speak: function () {
                return this.name;
            }
        };

        pass("object containing all properties in matcher", object, {
            id: 42,
            doIt: "yes"
        });

        var object2 = {
            id: 42,
            name: "Christian",
            doIt: "yes",
            owner: {
                someDude: "Yes",
                hello: "ok"
            },

            speak: function () {
                return this.name;
            }
        };

        pass("nested matcher", object2, {
            owner: {
                someDude: "Yes",
                hello: function (value) {
                    return value == "ok";
                }
            }
        });

        pass("empty strings", "", "");
        pass("empty strings as object properties", { foo: "" }, { foo: "" });
        pass("similar arrays", [1, 2, 3], [1, 2, 3]);
        pass("array subset", [1, 2, 3], [2, 3]);
        pass("single-element array subset", [1, 2, 3], [1]);
        pass("matching array subset", [1, 2, 3, { id: 42 }], [{ id: 42 }]);
        fail("mis-matching array 'subset'", [1, 2, 3], [2, 3, 4]);
        fail("mis-ordered array 'subset'", [1, 2, 3], [1, 3]);
        fail("mis-ordered, but similar arrays of objects", [{a: 'a'}, {a: 'aa'}], [{a: 'aa'}, {a: 'a'}]);
        pass("empty arrays", [], []);
        pass("objects with empty arrays", { xs: [] }, { xs: [] });
        fail("nested objects with different depth", { a: 1 }, { b: { c: 2 } });
        pass("dom elements with matching data attributes", {
            getAttribute: function (name) {
                if (name === "data-path") {
                    return "foo.bar";
                }
            }
        }, { "data-path": "foo.bar" });
        fail("dom elements with not matching data attributes", {
            getAttribute: function (name) {
                if (name === "data-path") {
                    return "foo.foo";
                }
            }
        }, { "data-path": "foo.bar" });

        pass("equal null properties", { foo: null }, { foo: null });
        fail("unmatched null property", {}, { foo: null });
        fail("matcher with unmatched null property", { foo: 'arbitrary' }, { foo: null });
        pass("equal undefined properties", { foo: undefined }, { foo: undefined });
        fail("matcher with unmatched undefined property", { foo: 'arbitrary' }, { foo: undefined });
        pass('unmatched undefined property', {}, { foo: undefined });

        var obj = { foo: undefined };
        pass("same object matches self", obj, obj);

        pass("null matches null", null, null);
        fail("null does not match undefined", null, undefined);

        pass("undefined matches undefined", undefined, undefined);
        fail("undefined does not match null", undefined, null);

        if (typeof Set !== 'undefined') {
            pass("sets with same content", new Set([1, 2, 3]), new Set([2, 3, 1]));
            pass("subset", new Set([1, 2, 3]), new Set([3, 1]));
            pass("subset complex types", new Set([1, {id: 42}, 3]), new Set([{id: 42}]));
            fail("sets with dissimilar content", new Set([1, 2, 3]), new Set([2, 5, 1]));
            fail("sets with different complex member", new Set([{id: 42}]), new Set([{id: 13}]));

            pass(
                "differently sorted complex objects",
                new Set([{
                    end: "2019-08-07T18:00:00Z",
                    geoAvailability: {
                        resId: "http://id.nrk.no/2015/guri/IPRights/geoavailability/NORGE",
                        title: "NORGE"
                    },
                    resId: "http://id.nrk.no/2015/guri/68cc0a15-2be1-4666-984f-b421b415326d/publicationEvent/0",
                    start: "2015-04-03T14:00:00Z"
                }, {
                    geoAvailability: {
                        resId: "http://id.nrk.no/2015/guri/IPRights/geoavailability/NRK",
                        title: "NRK"
                    },
                    resId: "x-test:pubEvent-1",
                    start: "2015-04-03T14:00:00Z"
                }]),

                new Set([{
                    geoAvailability: {
                        resId: "http://id.nrk.no/2015/guri/IPRights/geoavailability/NRK",
                        title: "NRK"
                    },
                    resId: "x-test:pubEvent-1",
                    start: "2015-04-03T14:00:00Z"
                }, {
                    end: "2019-08-07T18:00:00Z",
                    geoAvailability: {
                        resId: "http://id.nrk.no/2015/guri/IPRights/geoavailability/NORGE",
                        title: "NORGE"
                    },
                    start: "2015-04-03T14:00:00Z"
                }])
            );
        }

        var date = new Date();
        var sameDate = new Date(date.getTime());
        var anotherDate = new Date(date.getTime() - 10);
        pass("date objects with same date", date, sameDate);
        fail("date objects with different dates", date, anotherDate);
    });

    tests("isArguments", function (pass, fail) {
        pass("arguments object", arguments);
        fail("primitive", 42);
        fail("object", {});
        pass("arguments object from strict-mode function",
            (function () { "use strict"; return arguments; }()));
    });
}());
