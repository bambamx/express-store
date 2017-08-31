var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');
var brand = require('./routes/brand');
var latest = require('./routes/latest');
var orders = require('./routes/orders');
var search = require('./routes/search');
var featured = require('./routes/featured');
var categories = require('./routes/categories');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/users', users);
app.use('/admin', admin);
app.use('/brand', brand);
app.use('/latest', latest);
app.use('/orders', orders);
app.use('/search', search);
app.use('/featured', featured);
app.use('/categories', categories);

if(!process.env.DBUSER){
  console.error("DBUSER env variable not defined");
  process.exit(1);
}

if(!process.env.DBPASS){
  console.error("DBPASS env variable not defined");
  process.exit(1);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
