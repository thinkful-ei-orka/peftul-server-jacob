const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/cat', (req, res, next) => {
    // Return all pets currently up for adoption.
    return res.json(Pets.getNextCat());
});

router.delete('/cat', json, (req, res) => {
    Pets.dequeue('cats');
    return res.status(204).end();
});

router.get('/dog', (req, res) => {
    return res.json(Pets.getNextDog());
});

router.delete('/dog', json, (req, res) => {
    Pets.dequeue('dogs');
    return res.status(204).end();
});

module.exports = router;
