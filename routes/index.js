var express = require('express');
var router = express.Router();

/* get the home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* get the aboutMe page */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About' });
});

/* get the contactMe page */
router.get('/contactMe', function(req, res, next) {
  res.render('contactMe', { title: 'Contact' });
});

/* get the myProjects page */
router.get('/myProjects', function(req, res, next) {
  res.render('myProjects', { title: 'Projects' });
});

/* get the myServices page */
router.get('/myServices', function(req, res, next) {
  res.render('myServices', { title: 'Services' });
});

module.exports = router;
