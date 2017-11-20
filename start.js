const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const util = require('util');
var Validator = require('jsonschema').Validator;

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
    if(v.validate(req.body , schema).errors.length > 0)
      res.status(400).end();

      
    
    
    res.json(req.body);
})

app.use('/api/products', router);

console.log('Initialization ended');