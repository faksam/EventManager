'use strict';

const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js'); // Our app

describe('API endpoint /centers', function () {
    this.timeout(5000); // How long to wait for a response (ms)

    before(function () {

    });

    after(function () {

    });

    // GET - List all centers
    it('should return all centers', function () {
        return chai.request(app)
            .get('/centers')
            .then(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body.results).to.be.an('array');
            });
    });

    // GET - Invalid path
    it('should return Not Found', function () {
        return chai.request(app)
            .get('/INVALID_PATH')
            .then(function (res) {
                throw new Error('Path exists!');
            })
            .catch(function (err) {
                expect(err).to.have.status(404);
            });
    });

    // POST - Add new color
    it('should add new center', function () {
        return chai.request(app)
            .post('/centers')
            .send({
                "id": 7,
                "name": "Civic Innovation Lab7",
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
            })
            .then(function (res) {
                expect(res).to.have.status(201);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                expect(res.body.results).to.be.an('array').that.includes(
                    'YELLOW');
            });
    });

    // POST - Bad Request
    it('should return Bad Request', function () {
        return chai.request(app)
            .post('/centers')
            .type('form')
            .send({
                color: 'YELLOW'
            })
            .then(function (res) {
                throw new Error('Invalid content type!');
            })
            .catch(function (err) {
                expect(err).to.have.status(400);
            });
    });
});