var students = require('../routes/students');

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

     app.get('/students/:studentId', function(req, res) {
        var studentsArray = students.getStudents();
        res.send(JSON.stringify(studentsArray));
    });


}

