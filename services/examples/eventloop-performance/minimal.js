const express = require('express')
const app = express();
const knex = require('knex')(require('./knexfile'));

console.log('starting');
const port = process.env.PORT || 8080;
app.listen(port);

app.post('/api/products' , async (req,res) =>{
    console.log('starting')
    productToAdd = {name:'iPhone', numOfSales:5}

    //validate the input
    validateProduct(productToAdd);

    //save in DB
    const DBResult = await knex.insert(productToAdd).into("products");

    res.json({}).end();
});

function validateProduct(productToValidate){
    for(i=0;i<15000;i++){
        if(!productToValidate.name || !productToValidate.numOfSales){
            return false;
        }        
    }

    console.log(i);
    return true;
}