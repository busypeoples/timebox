var Module = angular.module('timebox');

Module.controller('TasksController', ['$scope', '$routeParams', '$location','Tasks', 'TaskService', 'TimerService',
	function($scope, $routeParams, $location, Tasks, TaskService, TimerService) {

	$scope.sortTasksBy = sortTasksBy;
	$scope.getTodaysTasks = getTodaysTasks;
	$scope.getUpcomingTasks = getUpcomingTasks;
	$scope.getPastTasks = getPastTasks;
	$scope.deleteTask = deleteTask;
	$scope.activateTask = activateTask;
	$scope.deActivateTask = deActivateTask;

	$scope.$watch(Tasks.getTasks(), init);
	$scope.$watch(TimerService.getTime, updateTime);

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

	/**
	 *
	 * @param task
	 */
	function activateTask(task) {
		if (task.active) return;
		TimerService.stop();
		Tasks.setActive(task);
		TimerService.start(task.time || 0);
		task.time = TimerService.getTime();
		init();
	}

	function deActivateTask(task) {
		TimerService.stop();
		task.active = false;
		init();
	}

	function updateTime() {
		if (! Tasks.getActive()) return;
		var task = Tasks.getActive();
		task.time = TimerService.getTime();
		task.formattedTime = TimerService.getFormattedTime();
		task.percentage = TimerService.getPercentage();
	}

}]);
