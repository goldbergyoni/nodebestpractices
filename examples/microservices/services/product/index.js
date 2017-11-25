'use strict';
const express = require('express'),
router = express.Router();

router.get('/:id', async(req, res, next) => {
    if(req.params.id==0) res.send(true);
    else res.send(false);
});

module.exports.API = router;