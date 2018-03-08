const express = require("express");
const app = express();
const ProductService = require("./service-final");

const port = process.env.PORT || 8080;
app.listen(port);


const router = express.Router();

router.get("/api/products", async (req, res, next) => {
  try {
    console.log("Get products was invoked");
    const result = await new ProductService().getUserProducts({});
    res.status(200).json({})
  } catch (error) {
    next(error);
  }
});
app.use(router);

app.use((err, req, res, next) => {
  console.error('Error middleware was invoked');
  console.error(err);
  res.status(err.code).json(err.name);  
});


console.log("Started");