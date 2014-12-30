'use strict';

/**
 * @ngdoc function
 * @name tennisContactApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tennisContactApp
 */
angular.module('tennisContactApp')
    .controller('MainCtrl', ['$scope', function($scope) {
        
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);