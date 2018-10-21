const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('./routes'));

mongoose.set('useCreateIndex', true);
mongoose.connect(
    process.env.URLDB,
    {useNewUrlParser: true},
    (err, res) => {
      if (err) throw err;

      console.log('Base de datos ONLINE');
    }
);

if (!isProduction) {
  app.use(errorhandler());
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

if (isProduction) {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// / catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// / error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});
module.exports = app;
