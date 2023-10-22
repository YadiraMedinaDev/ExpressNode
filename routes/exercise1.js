var express = require('express');
var router = express.Router();

/* Construya un programa que multiplique dos números dados por el usuario. */
router.get('/', function(req, res, next) {
  let number1 = parseInt(req.headers['number1']);
  let number2 = parseInt(req.headers['number2']);
  if (isNaN(number1) || isNaN(number2)) {
    res.status(400).send('Los parámetros deben ser números válidos.');
  } else {
    const result = number1 * number2;
    res.send(`El producto de ${number1} y ${number2} es igual a ${result}`);
  }
});

module.exports = router;
