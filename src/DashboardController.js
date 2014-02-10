"use strict";

!function(angular) {
	var Module = angular.module('timebox');

	Module.controller('DashboardController', ['$scope', 'Tasks', function($scope, Tasks) {

		var tasks = [];

		$scope.scheduleTaskForToday = scheduleTaskForToday;
		$scope.isToday = isToday;

		$scope.$watch(Tasks.getTasks(), function() {  tasks = Tasks.getTasks(); init(); });

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
				if ( isToday(tasks[i].date)) {
					filteredTasks.push(tasks[i]);
				}
			}

			return filteredTasks;
		}

		/**
		 *
		 * @param task
		 */
		function scheduleTaskForToday(task) {
			if (isToday(task.date)) return;
			task.date = new Date();
			Tasks.saveTask(task);
			Tasks.getTasks();
			init();
		}

		/**
		 *
		 * @param date
		 * @returns {boolean}
		 */
		function isToday(date) {
			if (date > getToday() && date < getTomorrow()) {
				return true;
			}
			return false;
		}

		/**
		 *
		 * @returns {Date}
		 */
		function getToday() {
			var today = new Date();
			today.setHours(0);
			today.setMinutes(0);
			today.setSeconds(0);

			return today;
		}


		/**
		 *
		 * @returns {Date}
		 */
		function getTomorrow() {
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