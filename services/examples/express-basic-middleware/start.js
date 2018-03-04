const express = require("express");
const app = express();

app.listen(8080);

const router = express.Router();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) =>{

})

router.post("/api/products", async (req, res, next) => {
  //my function
  console.log(`API was called ${util.inspect(req.body)}`);
  await businessLogic();
  res.status(200).json({ ok: "yes" });
});

const businessLogic = async ()=>{
    return ;
}

app.use(router);
