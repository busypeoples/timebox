"use strict";

!function(angular) {
	var Module = angular.module('timebox');

	Module.controller('DashboardController', ['$scope', 'Tasks', function($scope, Tasks) {

		var tasks = Tasks.getTasks();
		/**
		 *
		 * @constructor
		 */
		function init() {
			$scope.tasksForToday = tasks;
			$scope.openTasks = tasks;
			$scope.performance = [];
			$scope.overAllStatus = [];
		}

		init();

	}]);
}(angular);