var database = {};
module['exports'] = database;
database.collation = require("./collation");
database.column = require("./column");
database.engine = require("./engine");
database.type = require("./type");