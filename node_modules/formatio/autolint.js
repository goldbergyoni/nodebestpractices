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
        regexp: true,
        predef: [
            "samsam",
            "define",
            "assert",
            "refute",
            "buster"
        ]
    }
};
