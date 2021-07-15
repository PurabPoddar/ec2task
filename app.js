var createError = require('http-errors');
var express = require('express');
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, './config/') + '.' + process.env.NODE_ENV + '.env',
});
const {port} = require('./config/config');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const trainerData = require('./routes/traner');
const es6test = require('./routes/es6test');
const MODEL = require('./models');
const trainee = require('./routes/trainer/trainer');


const { copyFileSync } = require('fs');
const { models } = require('./models');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trainer', trainerData);
app.use('/es6test', es6test);
app.use('/trainee', trainee);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

//let port = '4001';




MODEL.sequelize.sync().then(result => {
  app.listen(port);
  console.log('Port listening on ' ,{port})
}).catch(err => {
  console.log(err);
});




module.exports = app;
