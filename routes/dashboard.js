/**
 * Created by noz687 on 2/19/2017.
 */

var express = require('express');
var router = express.Router();


router.get('/init/incomingMessages', function(req, res, next) {
    var db = req.db;
    var incomingMessages = db.get("incoming_messages");
    incomingMessages.find({}, {}, function (err, incomingMessagesDoc) {
        if(!err) {
            res.json({"Status" : "Completed", "incomingMessages" : incomingMessagesDoc});
        }
    });
});

router.get('/init/students', function(req, res, next) {
    var db = req.db;
    var students = db.get("students");
    students.find({}, {}, function (err, studentsDoc) {
        if(!err) {
            res.json({"Status" : "Completed", "students" : studentsDoc});
        }
    });
});

router.get('/student', function(req, res, next) {

});

router.post('/student', function(req, res, next) {

});

router.post('/student/logbook', function(req, res, next) {

});


module.exports = router;
