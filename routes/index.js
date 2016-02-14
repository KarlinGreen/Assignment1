var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

router.get('/aboutMe', function(req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/contactMe', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

router.get('/myProjects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

router.get('/myServices', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
