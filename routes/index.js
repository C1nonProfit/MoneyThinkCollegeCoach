var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Couch' });
});

router.post('/login', function(req, res, next) {
    var userName = req.body.userName;
    var password = req.body.password;
    var db = req.db;
    var userAccess = db.get("user_access");
    userAccess.find({}, {}, function (err, userAccessDoc) {
        if(!err) {
            if(userAccessDoc == undefined || userAccessDoc.length === 0) {
                res.status(500).json({"loginState" : "failed"});
            } else {
                res.json({"token" : "azHasAIas12dAsdY1Au123ag1hy12", "loginState" : "success", "loginUser" : userAccessDoc});
            }
        }
    });
});

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'College Couch' });
});

module.exports = router;
