/**
 * Created by noz687 on 2/18/2017.
 */


var app = angular.module('ndDashBoard', ['ngAnimate', 'ngCookies', 'ui.bootstrap']);

app.controller('ngDashBoardCtrl' , function ($scope, $rootScope ,$http, $uibModal) {



    $http.get('/dashboard/init/incomingMessages').then(function (res) {
        $scope.incomingMessages = res.data.incomingMessages;
        $http.get('/dashboard/init/students').then(function (res) {
            $scope.students = res.data.students;
            for(var i = 0; i < $scope.incomingMessages.length; i++){
                $scope.incomingMessages[i].presentInSystem = false;
                for(var j = 0; j < $scope.students.length; j++) {
                    if($scope.incomingMessages[i].phoneNumber === $scope.students[j].contact.phone.cell){
                        $scope.incomingMessages[i].student = $scope.students[j];
                        $scope.incomingMessages[i].presentInSystem = true;
                        break;
                    }
                }
            }
        }, function (res) {
            console.log(res);
        });
    }, function (res) {
        console.log(res);
    });

    $scope.checkUnreadMessage = function () {
        if(this.incomingMessages == undefined)
            return;
        for(var i = 0; i < this.incomingMessages.length; i++){
            if(this.incomingMessages[i].read === false){
                return true;
            }
        }
        return false;
    };

    $scope.viewOrCreateStudentProfile = function(_flag, _student) {

        var viewOrCreateStudent = $uibModal.open({
            templateUrl: 'public/templates/viewOrCreateStudent.html',
            controller: 'viewOrCreateStudent',
            backdrop: 'static',
            size: 'lg',
            windowClass: 'my-modal',
            resolve: {
                flag: function () {
                    return _flag;
                },
                student: function () {
                    return _student;
                }
            }
        });

        viewOrCreateStudent.rendered.then(function () {

        });

        viewOrCreateStudent.result.then(function (result) {
            console.log(result);
        });
    }

});


$(document).on('click', '.panel-heading span.clickable', function(event){
    var $this = $(this);
    if(!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    }
    event.preventDefault();
});

app.controller('viewOrCreateStudent' , function ($scope, $http, $uibModalStack, flag, student) {

    $scope.flag = flag;

    if(flag) {
        $scope.student = student;
    } else {
        $scope.student = {};
    }

    $scope.addLog = false;

    $scope.resetToNewLog = function () {
        $scope.newInteraction = {};
        $scope.newInteraction.media = "Select";
        $scope.newInteraction.date = {};
        $scope.newInteraction.date.day = "02/19/2019";
        $scope.newInteraction.date.time = "01:20 PM";
        $scope.newInteraction.date.time = "01:20 PM";
        $scope.newInteraction.message = "";
    }

    $scope.resetToNewLog();

    $scope.addNewLog = function () {
        $scope.addLog = true;
    };

    $scope.saveNewLog = function () {
        $scope.addLog = false;
        if(flag) {
            student.interactions.push($scope.newInteraction);
        }
        $scope.resetToNewLog();
    };

    $scope.cancelNewLog = function () {
        $scope.addLog = false;
        $scope.resetToNewLog();
    };

    $scope.cancel = function () {
        $uibModalStack.dismissAll('cancel');
    };

});


