var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var db = require('monk')('localhost:27017/collegeCoach');

var index = require('./routes/index');
var users = require('./routes/users');
var dashboard = require('./routes/dashboard');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '.')));
app.use(express.static(path.join(__dirname, 'views/include')));

app.use(function (req, res, next) {
    if(db != undefined) {
      console.log("db connected...");
    }
    req.db = db;
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/dashboard', dashboard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var config = require('./routes/db/createRequiredConfig');
config.createConfig(db);

module.exports = app;
