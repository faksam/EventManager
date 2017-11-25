import express from 'express';
import logger from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import jsonfile from 'jsonfile';

var router = express.Router();

//import json file
import centers from '../event-manager/centers.json';
var file = './event-manager/centers.json';

var event = {
    "bookedBy": "fakunle samuel",
    "date": "11/12/17",
    "email": "contact@fakunlesamuel.com",
    "phone": "0703924853"
};
var event1 = {
    "bookedBy": "",
    "date": "",
    "email": "",
    "phone": ""
};
    

/* GET /event listing. */
//router.get('/', function (req, res, next) {
    
//    res.send(events);
//});

///* POST /event */
router.post('/', function (req, res, next) {
    var center = {};
    centers.centers.forEach((element, index) => {
        if (element.id == 5) {
            element.events = req.body;
            
            center = element;
        }
    });
    jsonfile.writeFile(file, centers, { spaces: 2, EOL: '\r\n' }, function (err) {
        console.error(err)
    });
    
    res.status(201).send(centers);
});



///* GET /event/id */
//router.get('/:id', function (req, res, next) {

//});

///* PUT /event/:id */
router.put('/:id', function (req, res, next) {
    var center = {};
    centers.centers.forEach((element, index) => {
        if (element.id == req.params.id) {
            element.events = event;

            center = element;
        }
    });
    jsonfile.writeFile(file, centers, { spaces: 2, EOL: '\r\n' }, function (err) {
        console.error(err)
    });

    res.send(centers);
});

///* DELETE /event/:id */
router.delete('/:id', function (req, res, next) {
    
    var center = {};
    centers.centers.forEach((element, index) => {
        if (element.id == req.params.id) {
            element.events = event1;
        }
    });
    jsonfile.writeFile(file, centers, { spaces: 2, EOL: '\r\n' }, function (err) {
        console.error(err)
    });

    res.send(centers);
});

module.exports = router;
