const express = require('express');
const logger = require('morgan');
var path = require('path');
const bodyParser = require('body-parser');
require('babel-register'); 

//routes
var events = require('./routes/events');
var centers = require('./routes/centers');


// Set up the express app
const app = express();
//Start server 
var port = 3456;
app.listen(port);
console.log("Listening on port : " + port);

// Log requests to the console. 
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
//app.get('*', (req, res) => res.status(200).send({
//    message: 'Welcome to the beginning of nothingness.',
//}));

app.use(express.static(path.join(__dirname, '../template')));//remove ../ pass template  ass 
// Require static assets from template folder
app.use('../template', express.static(path.join(__dirname + '../template')));

// view engine setup
app.set('views', path.join(__dirname, '../template'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('/template/index.html', { title: 'MyApp' });
});

app.use('/centers', centers);
app.use('/events', events);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.', {
        message: err.message,
        error: {}
    });
}); 

module.exports = app;