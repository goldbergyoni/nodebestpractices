const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

var router = express.Router();

var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const logger = (req,res,next)=>{
  console.log(`New request arrived ${req.url}`)
  next()
}

router.post("/api/products", (req, res, next) => {
  console.log(`The product is ${req.body}`);
  res.json(req.body);
  next()
});

const headerRemover = (req,res,next)=>{
  res.removeHeader('X-Powered-By')
  next()
}


app.use(headerRemover);
app.use(router);
app.use(logger);
