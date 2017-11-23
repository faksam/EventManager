var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var file = 'event-manager/centers.json'

jsonfile.readFile(file, function (err, obj) {
    console.dir(obj)
})
var Center = require('../models/Center.js');

/* GET /todos listing. */
router.get('/', function (req, res, next) {
    var d;
    jsonfile.readFile(file, function (err, obj) {
        if (err) throw err;
        console.log(obj);
        d = obj;
        console.log("in router");
        console.log(d);
        res.render('searchcenters', { centers: obj });
    });
});

/* POST /todos */
router.post('/', function (req, res, next) {
    Center.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /todos/id */
router.get('/:id', function (req, res, next) {
    res.render('centerdetails.html');
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
    Center.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
