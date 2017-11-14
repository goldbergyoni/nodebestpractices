var config = module.exports;

config["browser"] = {
    rootPath: ".",
    environment: "browser",
    src: [
        "lib/samsam.js"
    ],
    tests: [
        "test/samsam-test.js"
    ]
};

config["node"] = {
    rootPath: ".",
    environment: "node",
    tests: [
        "test/samsam-test.js"
    ]
};
