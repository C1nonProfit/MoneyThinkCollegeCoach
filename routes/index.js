var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Couch' });
});

router.post('/login', function(req, res, next) {
    var userName = req.body.userName;
    var password = req.body.password;
    if(userName === "counselor1" && password === "Password1") {
        res.json({"token" : "azHasAIas12dAsdY1Au123ag1hy12", "loginState" : "success"});
    } else {
        res.status(500).json({"loginState" : "failed"});
    }
});

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'College Couch' });
});

module.exports = router;
