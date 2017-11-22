//initialization and networking configuration
var express    = require('express');
var app        = express();
const countries = require('country-data');
var requestLanguage = require('express-request-language');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
app.listen(port);

app.use(requestLanguage({
    languages: ['en-US', 'zh-CN', 'de-CH', 'de']
}));

app.get('/', (req, res) => res.send("<img src='https://s3-eu-west-1.amazonaws.com/i0natan-general/funny-image.jpg'/>"));

app.use((req, res, next)=>{
    console.log(`New message arrived from country ${req.language}`);
    const currencies = countries[req.language].currencies;
    console.log(`Request currencies ${currencies}`);
    if(currencies.includes('USD'))
        res.redirect('http://www.google.com');
    next();
});

app.use((req, res, next)=>{
    console.log(`New message arrived with IP: ${req.ip}, URL: ${req.originalUrl}`);
    next();
});

app.use((req, res, next)=>{
    console.log(`Caller language is ${req.language}`);
    next();
});

//application endpoints (routes)
var router = express.Router();
router.get('/healthcheck', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.use('/api', router);