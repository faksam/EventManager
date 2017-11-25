import express from 'express';
import logger from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import jsonfile from 'jsonfile';

var router = express.Router();

//import json file
import centers from '../event-manager/centers.json';
var file = './event-manager/centers.json';

var center = {
    "id": 7,
    "name": "Civic Innovation Lab - 7",
    "address": "II Wuse Road Abuja, Nigeria",
    "capacity": 500,
    "description": "It is a Civic kinda thingly",
    "facilities": [
        {
            "projector": true,
            "no-chairs": 650,
            "video-overage": true
        }
    ],
    "first_name": "John",
    "last_name": "Smith",
    "phone": "219-839-2819"
};

/* GET /center listing. */
router.get('/', function (req, res, next) {
    res.send(centers);
});

///* POST /center */
router.post('/', function (req, res, next) {
    centers.centers.push(req.body);
    jsonfile.writeFile(file, centers, { spaces: 2, EOL: '\r\n' }, function (err) {
        console.error(err)
    });
    res.status(201).send(centers);
});


///* GET /center/id */
router.get('/:id', function (req, res, next) {
    function findCenter(center) {
        return center.id == req.params.id;
    }
    res.send(centers.centers.find(findCenter)); 
});

///* PUT /center/:id */
router.put('/:id', function (req, res, next) {
    centers.centers.forEach((element, index) => {
        if (element.id === center.id) {
            centers.centers[index] = center;
        }
    });
    jsonfile.writeFile(file, centers, { spaces: 2, EOL: '\r\n' }, function (err) {
        console.error(err)
    });
    res.send(centers);
});

///* DELETE /center/:id */
router.delete('/:id', function (req, res, next) {
    var count = 0;
    centers.centers.forEach((element, index) => {
        if (element.id === center.id) {
            centers.centers.splice(count, 1);
        }
        count++;
    });
    jsonfile.writeFile(file, centers, { spaces: 2, EOL: '\r\n' }, function (err) {
        console.error(err)
    });
    res.send(centers);
});

module.exports = router;
