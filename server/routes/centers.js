var express = require('express');
const logger = require('morgan');
var path = require('path');
const bodyParser = require('body-parser');
var router = express.Router();
var jsonfile = require('jsonfile')
var file = 'event-manager/centers.json'
// Set up the express app
const app = express();

jsonfile.readFile(file, function (err, obj) {
    console.dir(obj);
});
//var Center = require('../models/Center.js');

/* GET /todos listing. */
router.get('/', function (req, res, next) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) throw err;
        res.json(obj);//res.render('searchcenters', { centers: obj });
    });
});
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../../template')));
// Require static assets from template folder
app.use('../../template', express.static(path.join(__dirname + '../../template')));

// view engine setup
app.set('views', path.join(__dirname, '../../template'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.set('view engine', 'ejs');

/* POST /todos */
router.post('/', function (req, res, next) {

    jsonfile.writeFile(file, req.body, { flag: 'a' }, function (err) {
        console.error(err)
    })
});

/* GET /todos/id */
router.get('/:id', function (req, res, next) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) throw err;
        console.log("Object centers:"+obj.centers);
        for (var x in obj.centers) {
            var i = req.params.id;
            if (obj.centers[x].id && obj.centers[x].id == i)

                res.json(obj.centers[x]);
        }
        //.render('centerdetails', { centers: obj });
    });
});

/* PUT /todos/:id */
router.put('/:id', function (req, res, next) {
    Center.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function (req, res, next) {
    jsonfile.readFile(file, function (err, obj) {
        if (err) throw err;
        for (var x in obj.centers) {
            var i = req.params.id;
            if (obj.centers[x].id && obj.centers[x].id == i) {

            console.log("Object centers:" + obj.centers[x]);
            delete obj.centers.splice(x, 1);
            jsonfile.writeFile(file, obj, function (err) {
                console.error(err)
            });
                res.json(obj.centers);
            }

        }
        //.render('centerdetails', { centers: obj });
    });
});

module.exports = router;
