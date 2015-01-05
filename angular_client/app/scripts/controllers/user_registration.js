'use strict'; /** * @ngdoc function * @name tennisContactApp.controller:UserRegistrationsCtrl * @description * # UserRegistrationsCtrl * Controller of the tennisContactApp */
angular.module('tennisContactApp').controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', 'vcRecaptchaService', function($scope, $location, $auth, vcRecaptchaService) {
    $scope.model = {
        key: '6LfM2P8SAAAAALpd2kFeOEwgXZhLG736-wmIBX8o'
    };
    $scope.onSuccess = function(response) {
        $scope.registrationForm.recaptachaResponse = response;
    };

    $scope.handleRegBtnClick = function(response) {
        $scope.registrationForm.recaptachaResponse = '';
        while ($scope.registrationForm.recaptachaResponse === '') {
            $scope.registrationForm.recaptachaResponse = vcRecaptchaService.getResponse();
            if ($scope.registrationForm.recaptachaResponse === '') {
                $scope.registrationForm.recaptachaResponse = response;
            }
        }
        $auth.submitRegistration($scope.registrationForm).then(function() {
            $location.path('/');
            $scope.$emit('displaySuccess', 'email emvoye');


        });
    };
    $scope.$on('auth:registration-email-error', function(ev, reason) {
        $scope.$emit('displayError', reason.errors[0]);
    });
}]);

