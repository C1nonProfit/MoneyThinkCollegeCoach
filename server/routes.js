var students = require('../routes/students');

var messages = require('../routes/newMessages');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.send('Hello, world!');
    });

    app.get('/students', function(req, res) {
        var studentsArray = students.getStudents((studentsArray) => {
            console.log(studentsArray);
            res.send(JSON.stringify(studentsArray));
        });

    });

     app.get('/messages', function(req, res) {
         var messagesArray = messages.getMessages((messagesArray) => {
            console.log(messagesArray);
            res.send(JSON.stringify(messagesArray));
        });

    });


}

