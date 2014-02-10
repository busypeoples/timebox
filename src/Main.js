"use strict";

/**
 * simple user handling...
 */
var Module = angular.module('timebox', ['ngResource', 'ngRoute','ui.bootstrap']);
Module.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
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
		
		if(window.history && window.history.pushState){
   			 $locationProvider.html5Mode(true);
  		}
}]);