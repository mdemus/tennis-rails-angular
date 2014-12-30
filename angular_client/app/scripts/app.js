'use strict';

/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */
var app = angular.module('fakeLunchHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/sign_in', {
            templateUrl: 'views/user_sessions/new.html',
            controller: 'UserSessionsCtrl'
        })
        .when('/sign_up', {
            templateUrl: 'views/user_registrations/new.html',
            controller: 'UserRegistrationsCtrl'
        })
        .when('/groups', {
            templateUrl: 'views/groups.html',
            controller: 'GroupsCtrl',
            resolve: {
                auth: ['$auth', function($auth) {
                    return $auth.validateUser();
                }]
            }
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.factory('Group', ['$resource', function($resource) {
    return $resource('/api/groups/:id.json', null, {
        'update': {
            method: 'PUT'
        }
    });
}]);

app.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", function(angularEvent, currentRoute, previousRoute) {
        $rootScope.isActive = function(viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    });
    $rootScope.$on('auth:login-success', function() {
        $location.path('/');
        $rootScope.$broadcast('displaySuccess', 'logged in');
    });
    $rootScope.$on('displayError', function(event, data) {
        $rootScope.errorMessage = data; // 'Data to send'
    });
    $rootScope.$on('displaySuccess', function(event, data) {
        $rootScope.errorSuccess = data; // 'Data to send'
    });
    $rootScope.$on('displayWarning', function(event, data) {
        $rootScope.errorWarning = data; // 'Data to send'
    });
    $rootScope.$on('displayInfo', function(event, data) {
        $rootScope.errorInfo = data; // 'Data to send'
    });
}]);