const Clarifai = require('clarifai');
const util = require('util');

// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
    apiKey: 'ae04f8d71fce4b8ab61168e6bbc5cd4d'
});

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'http://d3pah2c10lnl36.cloudfront.net/images/menu_pop_lunch_01_.jpg').then(
    function (response) {
        console.log(util.inspect(response, {depth:7}));
    },
    function (err) {
        console.error(err);
    }
);