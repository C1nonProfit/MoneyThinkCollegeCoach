

exports.getStudents = function() {
    var studentsObj = require('../students.json');
    //var studentsList = JSON.parse(studentsObj);
    return studentsObj.students;
};

exports.getMessages = function() {

};
