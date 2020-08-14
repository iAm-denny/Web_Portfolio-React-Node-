var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const onlineFoodRouter = require('./routes/online-food')
const customer = require('./routes/customer')
const cors = require('cors');
const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://<dbname>:<password>@nodetus.ccrkx.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(dbURL , {useNewUrlParser:true , useUnifiedTopology:true})
.then(res => console.log('Connected to Database'))
.catch(err => console.log(err))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'ejs');
app.use(express.static('public'))
// app.set('view engine', 'jade');


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customer-feedback', onlineFoodRouter)
app.use('/customers' ,customer)
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

module.exports = app;
