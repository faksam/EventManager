var express = require('express');
var router = express.Router();

var Center = require('../models/Center.js');

/* GET /todos listing. */
router.get('/', function (req, res, next) {
    Center.find(function (err, centers) {
        if (err) return next(err);
        res.json(centers);
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
    Center.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
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
    Center.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
