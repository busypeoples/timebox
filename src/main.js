"use strict";

/**
 * simple user handling...
 */
var Module = angular.module('timebox', ['ngResource', 'ngRoute']);
Module.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/users', {
			templateUrl : 'view/users.html',
			controller : 'UserController'
		})
		.when('/tasks', {
			templateUrl : 'view/tasks.html',
			controller : 'TaskController'
		});
		
}]);

Module.controller('MainController', ['$scope', function($scope) {
}]);
