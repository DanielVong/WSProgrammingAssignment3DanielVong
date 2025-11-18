var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/assignment', function(req, res, next) {
  res.render('assignment', { title: 'Assignments' });
});
module.exports = router;
