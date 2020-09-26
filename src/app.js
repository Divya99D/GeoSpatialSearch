const express = require('express');
const router = require('./routes/index');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const connectDB = require('./database/db_connection')
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router);

connectDB();
// error handler
app.use(function(err, req, res, next) {
    if(err){
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'DEV' ? err : {};
      
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }else{
        next();
    }
});

module.exports = app;