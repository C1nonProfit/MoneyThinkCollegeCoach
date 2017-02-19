/**
 * Created by noz687 on 2/18/2017.
 */


var app = angular.module('ngLogin', ['ngAnimate', 'ngCookies']);

app.controller('ngLoginCtrl' , function ($scope, $http, $location) {

    $scope.login = function () {

        var data = {
                    'userName': $scope.userName,
                    "password" : $scope.password
                };

        $http.post('/login', data).then(function (res) {
            console.log(res);
            window.location = "/dashboard";
        }, function (res) {
            console.log(res);
        });
    };
});