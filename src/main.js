"use strict";

/**
 * simple user handling...
 */
var Module = angular.module('timebox', ['ngResource', 'ngRoute']);
Module.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/timeboxApp/view/dashboard.html',
			controller : 'DashboardController'
		})
		.when('/users', {
			templateUrl : '/timeboxApp/view/users.html',
			controller : 'UserController'
		})
		.when('/tasks', {
			templateUrl : '/timeboxApp/view/tasks.html',
			controller : 'TaskController'
		})
		.when('/settings', {
			templateUrl : '/timeboxApp/view/settings.html',
			controller : 'SettingsController'
		});
		
}]);

Module.controller('MainController', ['$scope', function($scope) {
}]);
