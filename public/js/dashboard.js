/**
 * Created by noz687 on 2/18/2017.
 */


var app = angular.module('ndDashBoard', ['ngAnimate', 'ngCookies']);

app.controller('ngDashBoardCtrl' , function ($scope, $http) {



    $scope.init = function () {
        this.incomingMessages =
            [
                {
                    "phoneNumber" : "312-555-1234",
                    "presentInSystem" : true,
                    "studentName" : "Mickey Mouse",
                    "date" : "02/14/2017",
                    "time" : "7:27 AM",
                    "message" : "College student #Support",
                    "read" : false,
                    "couchName" : "counselor1"
                },
                {
                    "phoneNumber" : "312-555-1267",
                    "presentInSystem" : false,
                    "studentName" : "Unknown",
                    "date" : "02/13/2017",
                    "time" : "8:27 AM",
                    "message" : "Student #Support",
                    "read" : false,
                    "couchName" : "counselor1"
                },
                {
                    "phoneNumber" : "312-555-1267",
                    "presentInSystem" : true,
                    "studentName" : "Donald Duck",
                    "date" : "02/13/2017",
                    "time" : "8:27 AM",
                    "message" : "Student #Support",
                    "read" : true,
                    "couchName" : "counselor1"
                }
            ];
    };

    $scope.init();
});


