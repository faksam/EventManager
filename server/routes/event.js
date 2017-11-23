var express = require('express');
var router = express.Router();

var Event = require('../models/Event.js');

/* GET /todos listing. */
//router.get('/', function (req, res, next) {
//    Event.find(function (err, events) {
//        if (err) return next(err);
//        res.json(events);
//    });
//});

/* POST /todos */
router.post('/', function (req, res, next) {
    Event.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

///* GET /todos/id */
//router.get('/:id', function (req, res, next) {
//    Event.findById(req.params.id, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});

/* PUT /todos/:id */
router.put('/:id', function (req, res, next) {
    Event.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function (req, res, next) {
    Event.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});