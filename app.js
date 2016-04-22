var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var nib = require('nib');
var stylus = require('stylus');

var cover = require('./routes/cover');
var terms = require('./routes/terms');
var main = require('./routes/index');

var philo = require('./routes/philo');
var rules = require('./routes/rules');
var pyramid = require('./routes/pyramid');
var hap = require('./routes/hap');

var denumerification  = require('./routes/denumerification');
var goals = require('./routes/goals');
var pathbuilder = require('./routes/pathbuilder');
var contact = require('./routes/contact');

var flow = require('./routes/flow');

var app = express();

app.locals.data = require('./data.json');

//compile stylus to css
function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'img','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('stylus').middleware(
    {src: path.join(__dirname, '/public'),
     compile: compile
    }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cover);
app.use('/terms', terms);
app.use('/main', main);

app.use('/philo', philo);
app.use('/rules', rules);
app.use('/pyramid',pyramid);
app.use('/hap', hap);

app.use('/denumerification', denumerification);
app.use('/goals', goals);
app.use('/pathbuilder', pathbuilder);
app.use('/contact', contact);

app.use('/flow', flow);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// angular.module('ChartsApp', [])
//     .run(function(data) {
//       data.fetchJsonData().then(function (response) {
//         console.log('data loaded');
//       }, console.error);
//     });


module.exports = app;
