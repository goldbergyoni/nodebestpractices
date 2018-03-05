const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const Validator = require('jsonschema').Validator;
const knex = require('knex')(require('./knexfile'));
const axios = require('axios');

console.log('starting');
const port = process.env.PORT || 8080;
app.listen(port);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var router = express.Router();
router.get('/api/products', async(req, res) => {
    res.json([{
        name: 'iphone'
    }, {
        name: 'galaxy'
    }])
})

router.post('/api/products', async (req, res) => {
    console.log(`The product is ${JSON.stringify(req.body)}`)

    let productToAdd = req.body;
    productToAdd = {name:'iPhone', numOfSales:5}
    if(!validateProduct(productToAdd))
        throw new Error('Invalid product')
    
    const DBResult = await knex.insert(productToAdd).into("products");
    res.json(req.body).end();
});


app.use(router);

function validateProduct(productToValidate){
    for(i=0;i<5000;i++){
        if(!productToValidate.name || !productToValidate.numOfSales){
            return false;
        }        
    }

    console.log(i);
    return true;
}