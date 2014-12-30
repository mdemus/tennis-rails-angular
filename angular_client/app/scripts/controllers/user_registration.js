'use strict'; /** * @ngdoc function * @name tennisContactApp.controller:UserRegistrationsCtrl * @description * # UserRegistrationsCtrl * Controller of the tennisContactApp */
angular.module('tennisContactApp').controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', 'vcRecaptchaService', function($scope, $location, $auth, vcRecaptchaService) {
    $scope.model = {
        key: '6LfM2P8SAAAAALpd2kFeOEwgXZhLG736-wmIBX8o'
    };
    $scope.onSuccess = function (response) {
        $scope.registrationForm.recaptachaResponse = response;
    };

    $scope.handleRegBtnClick = function() {
        $scope.registrationForm.recaptachaResponse = vcRecaptchaService.getResponse();
        $auth.submitRegistration($scope.registrationForm).then(function() {
            $auth.submitLogin({
                email: $scope.registrationForm.email,
                password: $scope.registrationForm.password
            });
        });
    };
     $scope.$on('auth:registration-email-error', function(ev, reason) {
  		$scope.$emit('displayError', reason.errors[0]);
    });
}]);