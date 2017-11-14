module.exports = {
    paths: [
        "lib/*.js",
        "test/*.js"
    ],
    linterOptions: {
        node: true,
        browser: true,
        plusplus: true,
        vars: true,
        nomen: true,
        forin: true,
        sloppy: true,
        eqeq: true,
        predef: [
            "_",
            "define",
            "assert",
            "refute",
            "buster"
        ]
    }
};
