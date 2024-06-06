var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('Połączono z API');
});
router.get('/contact', function(req, res, next) {
  res.status(200);
});
router.get('/szafa', function(req, res, next) {
  res.status(200);
});
router.get('/login', function(req, res, next) {
  res.status(200);
});

module.exports = router;
