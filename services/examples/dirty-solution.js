const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const util = require('util');
const Validator = require('jsonschema').Validator;
const knex = require('knex');

//declaration and initialization
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const logMiddleware = function(req, res, next){
    console.log(`New request ${req.baseUrl}`);
    next();
}
app.use(logMiddleware);

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Initialization ended');

//routes definition
var router = express.Router();

router.get('/', (req, res)=>{
    console.log(req.baseUrl);
    //validation
    //db query
    res.json([{name: 'iRobot'}, {name: 'iPhone'}]);
})

router.post('/' , (req, res)=>{
    console.log(`We got a new product now ${util.inspect(req.body)}`);
    
    app.get('/', (req, res) => res.send("<img src='https://i.pinimg.com/originals/0d/68/02/0d68025b2cd9a144d201d6cea02e7f27.jpg'/>"));
    
    var v = new Validator();
    var schema = {
        "id": "/Product",
        "type": "object",
        "properties": {
          "name": {"type": "string"},
          "numOfSales": {"type": "integer", "minimum": 1},
          "type": { "type": { "enum": [ "home", "business" ] } },
        },
        
        "required": ["name", "numOfSales"]
      };

    console.log(v.validate(req.body , schema))
    if(v.validate(req.body , schema).errors.length > 0){
        res.status(400).end();
    }
      
    knex(require('./knexfile')).insert(req.body).into("products").then((id) => {
        console.log(id);
      })
    
    res.json(req.body);
})

app.use('/api/products', router);

console.log('Initialization ended');