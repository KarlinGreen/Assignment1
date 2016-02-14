var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About' });
});

router.get('/contactMe', function(req, res, next) {
  res.render('contactMe', { title: 'Contact' });
});

router.get('/myProjects', function(req, res, next) {
  res.render('myProjects', { title: 'Projects' });
});

router.get('/myServices', function(req, res, next) {
  res.render('myServices', { title: 'Services' });
});

module.exports = router;
