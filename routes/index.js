var express = require('express');
var router = express.Router();

//const students = require('./students');
const data = require('../students.json');

routes.use('/students', students);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'College Coach' });
});

module.exports = (req, res) => {
  const students = data.cars;

  res.status(200).json({ cars });
};



module.exports = router;
