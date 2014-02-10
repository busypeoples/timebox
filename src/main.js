"use strict";

/**
 * simple user handling...
 */
var Module = angular.module('timebox', ['ngResource', 'ngRoute','ui.bootstrap']);
Module.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/view/dashboard.html',
			controller : 'DashboardController'
		})
		.when('/users', {
			templateUrl : '/view/users.html',
			controller : 'UserController'
		})
		.when('/tasks', {
			templateUrl : '/view/tasks.html',
			controller : 'TasksController'
		})
		.when('/task/:id?', {
			templateUrl : 'view/task.html',
			controller : 'TaskController'
		})
		.when('/settings', {
			templateUrl : '/view/settings.html',
			controller : 'SettingsController'
		});
}]);