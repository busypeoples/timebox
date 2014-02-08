var Module = angular.module('timebox');

Module.controller('TaskController', ['$scope', 'Tasks', 'TaskService', function($scope, Tasks, TaskService) {

	// scope
	$scope.sortTasksBy = sortTasksBy;
	$scope.getTodaysTasks = getTodaysTasks;
	$scope.getUpcomingTasks = getUpcomingTasks;
	$scope.getPastTasks = getPastTasks;
	$scope.addTask = addTask;
	$scope.editTask = editTask;
	$scope.deleteTask = deleteTask;

	$scope.$watch(Tasks.getTasks(), init);

	function init() {
		$scope.tasks = Tasks.getTasks();
		$scope.todayTasks = getTodaysTasks($scope.tasks);
		$scope.futureTasks = getUpcomingTasks($scope.tasks);
		$scope.pastTasks = getPastTasks($scope.tasks);
	}

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

	function getPastTasks(tasks) {
		var pastTasks = [];
		for (var i=0; i<tasks.length; i++) {
			if (TaskService.isPast(tasks[i].date)) {
				pastTasks.push(tasks[i]);
			}
		}

		return pastTasks;
	}

	function addTask(task) {

	}

	function editTask(task) {

	}

	function deleteTask(task) {

	}

	function validate(task) {

	}

}]);
