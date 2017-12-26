const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const Validator = require("jsonschema").Validator;
const knex = require("knex");

//initilization
const port = process.env.PORT || 8080;
app.listen(port);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const logger = (req, res, next) => {
  console.log(`New request ${req.url}`);
  next();
};
app.use(logger);

var router = express.Router();
router.get("/api/products", async (req, res) => {
  res.json([
    {
      name: "iphone"
    },
    {
      name: "galaxy"
    }
  ]);
});

router.post("/api/products", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.json(req.body);

  var schema = {
    id: "/Product",
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      numOfSales: {
        type: "integer",
        minimum: 1
      },
      type: {
        type: {
          enum: ["home", "business"]
        }
      }
    },

    required: ["name", "numOfSales"]
  };

  var v = new Validator();

  if (v.validate(req.body, schema).errors.length > 0) {
    res.status(400).end();
  }

  knex(require("./knexfile"))
    .insert(req.body)
    .into("products")
    .then(id => {
      console.log(id);
    });
});

app.use(router);