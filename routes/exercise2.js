var express = require('express');
var router = express.Router();

/* Construya un programa que haga la suma de los primeros n números positivos. */
router.get('/:positiveNumber', function (req, res, next) {
    let positiveNumber = parseInt(req.params.positiveNumber);
    let message = "El número ingresado NO es positivo.";
    if (positiveNumber < 0) {
        res.status(400).send(`${message}`);
    }
    let counter = 1;
    let sum = 0;
    while (counter <= positiveNumber) {
        sum += counter;
        counter += 1;
    }
    res.send(`La suma de los primeros ${positiveNumber} números positivos es: ${sum}`);
});

module.exports = router;