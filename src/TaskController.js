var Module = angular.module('timebox');

Module.controller('TaskController', ['$scope', '$routeParams', 'Tasks', 'TaskService', '$location', function($scope, $routeParams, Tasks, TaskService, $location) {

	$scope.saveTask = saveTask;
	$scope.deleteTask = deleteTask;

	init();

	function init() {
		if (! $routeParams.id) $location.path('/tasks');

		$scope.addMode = ($routeParams.id == 'add')? true : false;
		$scope.task= Tasks.get($routeParams.id);

		initDatePicker();
	}

	function initDatePicker() {
		$scope.toggleMin = function() {
			$scope.minDate = ( $scope.minDate ) ? null : new Date();
		};
		$scope.toggleMin();

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = true;
		};

		$scope.dateOptions = {
			'year-format': "'yy'",
			'starting-day': 1
		};
	}

	function saveTask(task) {
		if (task.id) {
			Tasks.saveTask(task);
		} else {
			Tasks.addTask(task);
		}

		$location.path('/tasks');
	}

	function deleteTask(task) {
		Tasks.removeTask(task);
		$location.path('/tasks');
	}

	function validate(task) {

	}

}]);
