const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const util = require('util');
console.log('Starting');
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
    console.log(`We got a new product ${util.inspect(req.body)}`);
    //validation
    //db query
    res.json(req.body);
})

app.use('/api/products', router);

console.log('Initialization ended');