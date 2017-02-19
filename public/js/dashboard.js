/**
 * Created by noz687 on 2/18/2017.
 */


var app = angular.module('ndDashBoard', ['ngAnimate', 'ngCookies', 'ui.bootstrap']);

app.controller('ngDashBoardCtrl' , function ($scope, $rootScope ,$http, $uibModal) {



    $http.get('/dashboard/init/incomingMessages').then(function (res) {
        $scope.incomingMessages = res.data.incomingMessages;
    }, function (res) {
        console.log(res);
    });

    $http.get('/dashboard/init/students').then(function (res) {
        $scope.students = res.data.students;
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

    $scope.viewOrCreateStudentProfile = function(_flag, _studentId) {

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
                studentId: function () {
                    return _studentId;
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

app.controller('viewOrCreateStudent' , function ($scope, $http, $uibModalStack, flag, studentId) {

    $scope.cancel = function () {
        $uibModalStack.dismissAll('cancel');
    };

});


