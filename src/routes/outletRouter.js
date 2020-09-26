const express = require('express');
const router = express.Router();
const outlet = require('../controllers/outletController');

router.get('/getOutlet', outlet.getOutletController);

module.exports = router;
