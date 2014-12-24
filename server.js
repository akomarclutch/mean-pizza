var express = require('express');         //server engine
var app = express();                      //init
var bodyParser = require('body-parser');
var mongoose = require('mongoose');       //object data model
var morgan = require('morgan');           //http logging

// TODO prefill mongodb script
// TODO grunt setup
// TODO unit tests
// TODO configure for postgres

// configuration ===========================================

  // set our port
  var port = process.env.PORT || 3000;

  // connect to database with mongoose
  mongoose.connect('mongodb://localhost:27017/test');

  // parse application/json
  app.use(bodyParser.json());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

// routes ==================================================

  // configure our routes
  require('./app/routes')(app);

// start app ===============================================

  // set the static files location /public/img will be /img for users
  app.use(express.static(__dirname + '/public'));

  // startup our app at locally at port 3000 (see config above)
  app.listen(port);

  // shoutout to the user
  console.log('Magic happens on port ' + port);

  // expose app
  exports = module.exports = app;
