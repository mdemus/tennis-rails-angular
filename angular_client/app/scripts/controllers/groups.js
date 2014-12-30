'use strict';
 
/**
 * @ngdoc function
 * @name tennisContactApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the tennisContactApp
 */
angular.module('tennisContactApp')
  .controller('GroupsCtrl', ['$scope', 'Group', function ($scope, Group) {
    $scope.groups = Group.query();
  }]);