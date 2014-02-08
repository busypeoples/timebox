"use strict";

!function(angular) {
	var Module = angular.module('timebox');

	Module.controller('DashboardController', ['$scope', 'Tasks', function($scope, Tasks) {

		var tasks = [];

		$scope.$watch(Tasks.getTasks(), function() { tasks = Tasks.getTasks(); init(); });

		/**
		 *
		 * @constructor
		 */
		function init() {
			$scope.tasksForToday = filterToday(tasks);
			$scope.openTasks = tasks;
			$scope.performance = [];
			$scope.overAllStatus = [];
		}

		/**
		 *
		 * @returns {Array}
		 */
		function filterToday(tasks) {
			var filteredTasks = [];

			for ( var i=0; i < tasks.length; i++ ) {
				if ( tasks[i].date < getToday() ) {
					filteredTasks.push(tasks[i]);
				}
			}

			return filteredTasks;
		}

		/**
		 *
		 * @returns {Date}
		 */
		function getToday() {
			var today = new Date();
			today.setDate(today.getDate() + 1);
			today.setHours(0);
			today.setMinutes(0);
			today.setSeconds(0);

			return today;
		}

		init();

	}]);

}(angular);