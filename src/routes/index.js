const express = require('express');
const router = express.Router();
const outletRouter = require('./outletRouter');

router.use('/health',(req, res, next) =>{res.send({status : "up"});});
router.use('/outlets', outletRouter)

module.exports = router;
