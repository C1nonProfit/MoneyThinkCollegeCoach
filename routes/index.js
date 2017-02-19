var express = require('express');
var router = express.Router();

const students = require('./students');

routes.use('/students', students);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'College Coach' });
});

router.get('/students', function(req, res, next) {
  res.render('dashboard', { title: 'College Coach' });
});



module.exports = router;
