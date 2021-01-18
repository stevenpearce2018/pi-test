const express = require('express');
const router = express.Router();
const makePI = require('../utils/makePI');

// API Route(s)

// GET - /pi -> Returns String of N digit
router.get('/pi', async (req, res) => {
    // String: n; returns the index of pie, n starts at 1. Length of n determines time to complete request.
    const { n } = req.query;

    // Error handling for n edgecases
    if (!n) return res.status(400).send("n cannot be undefined, ex: localhost:8080/pi?n=3");
    if (n === "0") return res.status(400).send("n cannot be 0, ex: localhost:8080/pi?n=3");

    const pi = makePI(n);
    // PI without period and converted to a string to allow for index search
    const PI_string = pi.toString().replace('.', '');
    res.send(n ? PI_string[n - 1] : PI_string);
});

module.exports = router