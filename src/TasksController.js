var Module = angular.module('timebox');

Module.controller('TasksController', ['$scope', '$routeParams', 'Tasks', 'TaskService', '$location', function($scope, $routeParams, Tasks, TaskService, $location) {

	$scope.sortTasksBy = sortTasksBy;
	$scope.getTodaysTasks = getTodaysTasks;
	$scope.getUpcomingTasks = getUpcomingTasks;
	$scope.getPastTasks = getPastTasks;
	$scope.deleteTask = deleteTask;

	$scope.$watch(Tasks.getTasks(), init);

	/**
	 * constructor
	 */
	function init() {
		$scope.tasks = Tasks.getTasks();
		$scope.todayTasks = getTodaysTasks($scope.tasks);
		$scope.futureTasks = getUpcomingTasks($scope.tasks);
		$scope.pastTasks = getPastTasks($scope.tasks);
	}

	/**
	 *
	 * @param tasks
	 * @param prop
	 *
	 * @returns {XMLList|XML|copy|*|copy}
	 */
	function sortTasksBy(tasks, prop) {
		var sorted = angular.copy(tasks);
		sorted.sort(function(a, b) {
			if (a[prop] <=  b[prop]) {
				return -1;
			}
			return 1;
		});

		return sorted;
	}

	/**
	 *
	 * @returns {Array}
	 */
	function getTodaysTasks(tasks) {
		var todayTasks = [];
		for (var i=0; i<tasks.length; i++) {
			if (TaskService.isToday(tasks[i].date)) {
				todayTasks.push(tasks[i]);
			}
		}

		return todayTasks;
	}

	/**
	 *
	 * @returns {Array}
	 */
	function getUpcomingTasks(tasks) {
		var futureTasks = [];
		for (var i=0; i<tasks.length; i++) {
			if (TaskService.isFuture(tasks[i].date)) {
				futureTasks.push(tasks[i]);
			}
		}

		return futureTasks;
	}

	/**
	 *
	 * @param tasks
	 *
	 * @returns {Array}
	 */
	function getPastTasks(tasks) {
		var pastTasks = [];
		for (var i=0; i<tasks.length; i++) {
			if (TaskService.isPast(tasks[i].date)) {
				pastTasks.push(tasks[i]);
			}
		}

		return pastTasks;
	}

	/**
	 *
	 * @param task
	 */
	function deleteTask(task) {
		Tasks.removeTask(task);
		init();
	}

}]);
