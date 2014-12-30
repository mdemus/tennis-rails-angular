'use strict';
angular.module('tennisContactApp').controller('UserSessionsCtrl', ['$scope', function($scope) {
    $scope.$on('auth:login-error', function(ev, reason) {
  		$scope.$emit('displayError', reason.errors[0]);
    });
}]);



