exports["Browser"] = {
    // TODO: Needs fixing
    environment: "browser",
    libs: [
        "node_modules/samsam/lib/samsam.js"
    ],
    sources: ["lib/*.js"],
    tests: ["test/*-test.js"]
};

exports["Node"] = {
    extends: "Browser",
    environment: "node"
};
