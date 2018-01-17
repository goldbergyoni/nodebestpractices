const express = require("express");
const router = express.Router();
const middlewarePool = require('./middlewares');

//for all endpoints
//router.use(middlewarePool.getDefaultList())

//public endpoints
router.get('/user', (req,res)=>{
  //busienss logic comes here
})

//router.use(middlewarePool.JWTAuthenticator);

//secured endpoints here
router.get('/user/photos', (req,res)=>{
  //busienss logic comes here
})

// router.put('/user/photos/delete', authroizer('admin'), (req,res)=>{
//   //busienss logic comes here
  
// })



module.exports = router;