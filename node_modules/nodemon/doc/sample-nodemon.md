# Sample nodemon.json

Here is an example (of a contrived) `nodemon.json` file:

    {
      "restartable": "rs",
      "ignore": [
        ".git",
        "node_modules/**/node_modules"
      ],
      "verbose": true,
      "execMap": {
        "js": "node --harmony"
      },
      "events": {
        "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
      },
      "watch": [
        "test/fixtures/",
        "test/samples/"
      ],
      "env": {
        "NODE_ENV": "development"
      },
      "ext": "js json"
    }

Note that the `ignore` used is nodemon's default ignore rule. The complete defaults can be seen here: [defaults.js](https://github.com/remy/nodemon/blob/master/lib/config/defaults.js).
