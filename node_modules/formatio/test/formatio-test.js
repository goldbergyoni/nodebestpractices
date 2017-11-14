/*global formatio*/
((typeof module === "object" && typeof require === "function" && function (t) {
    t(require("buster"), require("../lib/formatio"));
}) || function (t) {
    t(buster, formatio);
})(function (buster, formatio) {
    var assert = buster.referee.assert;
    var refute = buster.referee.refute;

    function range(size){
        var array = [];

        for (var i = 0; i < size; i++){
            array[i] = i;
        }

        return array;
    }

    function getObjectWithManyProperties(size){
        var object = {};

        for (var i = 0; i < size; i++) {
            object[i.toString()] = i;
        }

        return object;
    }

    buster.testCase("formatio.ascii", {
        "formats strings with quotes": function () {
            assert.equals(formatio.ascii("A string"), '"A string"');
        },

        "formats 0-length strings in a special way": function () {
            assert.equals(formatio.ascii(""), "(empty string)");
        },

        "formats booleans without quotes": function () {
            assert.equals(formatio.ascii(true), "true");
            assert.equals(formatio.ascii(false), "false");
        },

        "formats null and undefined without quotes": function () {
            assert.equals(formatio.ascii(null), "null");
            assert.equals(formatio.ascii(undefined), "undefined");
        },

        "formats numbers without quotes": function () {
            assert.equals(formatio.ascii(3), "3");
            assert.equals(formatio.ascii(3987.56), "3987.56");
            assert.equals(formatio.ascii(-980.0), "-980");
            assert.equals(formatio.ascii(NaN), "NaN");
            assert.equals(formatio.ascii(Infinity), "Infinity");
            assert.equals(formatio.ascii(-Infinity), "-Infinity");
            assert.equals(formatio.ascii(-0), "-0");
        },

        "formats regexp using toString": function () {
            assert.equals(formatio.ascii(/[a-zA-Z0-9]+\.?/),
                          "/[a-zA-Z0-9]+\\.?/");
        },

        "formats functions with name": function () {
            var fn = function doIt() {};
            assert.equals(formatio.ascii(fn), "function doIt() {}");
        },

        "formats functions without name": function () {
            assert.equals(formatio.ascii(function () {}), "function () {}");
        },

        "formats functions with display name": function () {
            function doIt() {}
            doIt.displayName = "ohHai";

            assert.equals(formatio.ascii(doIt), "function ohHai() {}");
        },

        "shortens functions with long bodies": function () {
            function doIt() {
                var i;
                function hey() {}
                for (i = 0; i < 10; i++) { console.log(i); }
            }

            assert.equals(formatio.ascii(doIt), "function doIt() {}");
        },

        "formats functions with no name or display name": function () {
            function doIt() {}
            doIt.name = "";

            assert.equals(formatio.ascii(doIt), "function doIt() {}");
        },

        "formats arrays": function () {
            function ohNo() { return "Oh yes!"; }

            var array = ["String", 123, /a-z/, null];

            var str = formatio.ascii(array);
            assert.equals(str, '["String", 123, /a-z/, null]');

            str = formatio.ascii([ohNo, array]);
            assert.equals(str,
                          '[function ohNo() {}, ["String", 123, /a-z/, null]]');
        },

        "does not trip on circular arrays": function () {
            var array = ["String", 123, /a-z/];
            array.push(array);

            var str = formatio.ascii(array);
            assert.equals(str, '["String", 123, /a-z/, [Circular]]');
        },

        "limit formatted array length": {
            "should stop at given limit" : function () {
                var configuredFormatio = formatio.configure({
                    limitChildrenCount : 30
                });
                var str = configuredFormatio.ascii(range(300));

                refute.contains(str, "30");
                assert.contains(str, "29");
                assert.contains(str, "[... 270 more elements]");
            },

            "should only format as many elements as exists" : function(){
                var configuredFormatio = formatio.configure({
                    limitChildrenCount : 30
                });
                var str = configuredFormatio.ascii(range(10));

                refute.contains(str, "10");
                assert.contains(str, "9");
                refute.contains(str, "undefined");
                refute.contains(str, "[...");
            },

            "should format all array elements if no config is used" : function () {
                var str = formatio.ascii(range(300));

                assert.contains(str, "100");
                assert.contains(str, "299]");
                refute.contains(str, "[...");
            }
        },

        "limit count of formated object properties": {
            "should stop at given limit" : function () {
                var configured = formatio.configure({
                    limitChildrenCount: 30
                });
                var str = configured.ascii(getObjectWithManyProperties(300));

                // returned formation may not be in the original order
                assert.equals(30 + 3, str.split("\n").length);
                assert.contains(str, "[... 270 more elements]");
            },

            "should only format as many properties as exists" : function(){
                var configured = formatio.configure({
                    limitChildrenCount : 30
                });
                var str = configured.ascii(getObjectWithManyProperties(10));

                refute.contains(str, "10");
                assert.contains(str, "9");
                refute.contains(str, "undefined");
                refute.contains(str, "[...");
            },

            "should format all properties if no config is used" : function () {
                var str = formatio.ascii(getObjectWithManyProperties(300));

                assert.equals(300 + 2, str.split("\n").length);
            }
        },

        "formats object": function () {
            var object = {
                id: 42,
                hello: function () {},
                prop: "Some",
                more: "properties",
                please: "Gimme some more",
                "oh hi": 42,
                seriously: "many properties"
            };

            var expected = "{\n  hello: function () {},\n  id: 42,\n  " +
                    "more: \"properties\",\n  \"oh hi\": 42,\n  please: " +
                    "\"Gimme some more\",\n  prop: \"Some\"," +
                    "\n  seriously: \"many properties\"\n}";

            assert.equals(formatio.ascii(object), expected);
        },

        "formats short object on one line": function () {
            var object = {
                id: 42,
                hello: function () {},
                prop: "Some"
            };

            var expected = "{ hello: function () {}, id: 42, prop: \"Some\" }";
            assert.equals(formatio.ascii(object), expected);
        },

        "formats object with a non-function toString": function () {
            var object = { toString: 42 };
            assert.equals(formatio.ascii(object), "{ toString: 42 }");
        },

        "formats nested object": function () {
            var object = {
                id: 42,
                hello: function () {},
                prop: "Some",
                obj: {
                    num: 23,
                    string: "Here you go you little mister"
                }
            };

            var expected = "{\n  hello: function () {},\n  id: 42,\n  obj" +
                    ": { num: 23, string: \"Here you go you little mister\"" +
                    " },\n  prop: \"Some\"\n}";

            assert.equals(formatio.ascii(object), expected);
        },

        "includes constructor if known and not Object": function () {
            function Person(name) {
                this.name = name;
            }

            var person = new Person("Christian");

            assert.equals(formatio.ascii(person),
                          "[Person] { name: \"Christian\" }");
        },

        "does not include one letter constructors": function () {
            function F(name) {
                this.name = name;
            }

            var person = new F("Christian");

            assert.equals(formatio.ascii(person), "{ name: \"Christian\" }");
        },

        "includes one letter constructors when configured so": function () {
            function C(name) {
                this.name = name;
            }

            var person = new C("Christian");
            var formatter = formatio.configure({ excludeConstructors: [] });

            assert.equals(formatter.ascii(person),
                          "[C] { name: \"Christian\" }");
        },

        "excludes constructors when configured to do so": function () {
            function Person(name) {
                this.name = name;
            }

            var person = new Person("Christian");
            var formatter = formatio.configure({ excludeConstructors: ["Person"] });

            assert.equals(formatter.ascii(person), "{ name: \"Christian\" }");
        },

        "excludes constructors by pattern when configured so": function () {
            function Person(name) { this.name = name; }
            function Ninja(name) { this.name = name; }
            function Pervert(name) { this.name = name; }

            var person = new Person("Christian");
            var ninja = new Ninja("Haruhachi");
            var pervert = new Pervert("Mr. Garrison");
            var formatter = formatio.configure({ excludeConstructors: [/^Per/] });

            assert.equals(formatter.ascii(person), "{ name: \"Christian\" }");
            assert.equals(formatter.ascii(ninja),
                          "[Ninja] { name: \"Haruhachi\" }");
            assert.equals(formatter.ascii(pervert),
                          "{ name: \"Mr. Garrison\" }");
        },

        "excludes constructors when run on other objects": function () {
            function Person(name) { this.name = name; }

            var person = new Person("Christian");
            var formatter = { ascii: formatio.ascii };
            formatter.excludeConstructors = ["Person"];

            assert.equals(formatter.ascii(person), "{ name: \"Christian\" }");
        },

        "excludes default constructors when run on other objects": function () {
            var person = { name: "Christian" };
            var formatter = { ascii: formatio.ascii };

            assert.equals(formatter.ascii(person), "{ name: \"Christian\" }");
        },

        "does not trip on circular formatting": function () {
            var object = {};
            object.foo = object;

            assert.equals(formatio.ascii(object), "{ foo: [Circular] }");
        },

        "does not trip on indirect circular formatting": function () {
            var object = { someProp: {} };
            object.someProp.foo = object;

            assert.equals(formatio.ascii(object),
                          "{ someProp: { foo: [Circular] } }");
        },

        "formats nested array nicely": function () {
            var object = { people: ["Chris", "August"] };

            assert.equals(formatio.ascii(object),
                          "{ people: [\"Chris\", \"August\"] }");
        },

        "does not rely on object's hasOwnProperty": function () {
            // Create object with no "own" properties to get past
            //  Object.keys test and no .hasOwnProperty() function
            var Obj = function () {};
            Obj.prototype = { hasOwnProperty: undefined };
            var object = new Obj();

            assert.equals(formatio.ascii(object), "{  }");
        },

        "handles cyclic structures": function () {
            var obj = {};
            obj.list1 = [obj];
            obj.list2 = [obj];
            obj.list3 = [{ prop: obj }];

            refute.exception(function () {
                formatio.ascii(obj);
            });
        },

        "sets": {
            "formats sets": function () {
                var set = new Set([2, {
                    id: 42,
                    prop: "Some"
                }]);

                var expected = "Set {2, { id: 42, prop: \"Some\" }}";
                assert.equals(formatio.ascii(set), expected);
            },

            "limits the number of set members": function () {
                var fmt = formatio.configure({limitChildrenCount: 30});
                var str = fmt.ascii(new Set(range(300)));

                refute.contains(str, "30");
                assert.contains(str, "29");
                assert.contains(str, "[... 270 more elements]");
            }
        },

        "unquoted strings": {
            setUp: function () {
                this.formatter = formatio.configure({ quoteStrings: false });
            },

            "does not quote strings": function () {
                assert.equals(this.formatter.ascii("Hey there"), "Hey there");
            },

            "quotes string properties": function () {
                var obj = { hey: "Mister" };
                assert.equals(this.formatter.ascii(obj), "{ hey: \"Mister\" }");
            }
        },

        "numbers": {
            "formats object with 0": function () {
                var str = formatio.ascii({ me: 0 });
                refute.match(str, "-0");
            },

            "formats object with -0": function () {
                var str = formatio.ascii({ me: -0 });
                assert.match(str, "-0");
            }
        },

        "DOM elements": {
            requiresSupportFor: { "DOM": typeof document !== "undefined" },

            "formats dom element": function () {
                var element = document.createElement("div");

                assert.equals(formatio.ascii(element), "<div></div>");
            },

            "formats dom element with attributes": function () {
                var element = document.createElement("div");
                element.className = "hey there";
                element.id = "ohyeah";
                var str = formatio.ascii(element);

                assert.match(str, /<div (.*)><\/div>/);
                assert.match(str, /class="hey there"/);
                assert.match(str, /id="ohyeah"/);
            },

            "formats dom element with content": function () {
                var element = document.createElement("div");
                element.innerHTML = "Oh hi!";

                assert.equals(formatio.ascii(element), "<div>Oh hi!</div>");
            },

            "truncates dom element content": function () {
                var element = document.createElement("div");
                element.innerHTML = "Oh hi! I'm Christian, and this " +
                    "is a lot of content";

                assert.equals(formatio.ascii(element),
                              "<div>Oh hi! I'm Christian[...]</div>");
            },

            "includes attributes and truncated content": function () {
                var element = document.createElement("div");
                element.id = "anid";
                element.lang = "en";
                element.innerHTML = "Oh hi! I'm Christian, and this " +
                    "is a lot of content";
                var str = formatio.ascii(element);

                assert.match(str,
                             /<div (.*)>Oh hi! I'm Christian\[\.\.\.\]<\/div>/);
                assert.match(str, /lang="en"/);
                assert.match(str, /id="anid"/);
            },

            "formats document object as toString": function () {
                var str;
                buster.referee.refute.exception(function () {
                    str = formatio.ascii(document);
                });

                assert.equals(str, "[object HTMLDocument]");
            },

            "formats window object as toString": function () {
                var str;
                buster.referee.refute.exception(function () {
                    str = formatio.ascii(window);
                });

                assert.equals(str, "[object Window]");
            }
        },

        "global object": {
            requiresSupportFor: { "global": typeof global !== "undefined" },

            "formats global object as toString": function () {
                var str;
                buster.referee.refute.exception(function () {
                    str = formatio.ascii(global);
                });

                assert.equals(str, "[object global]");
            }
        }
    });
});
