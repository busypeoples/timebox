'use strict';

!function(angular) {
	var Module = angular.module('timebox');

	Module.controller('MainController', ['$scope', '$location', 'Tasks', 'TimerService', function($scope, $location, Tasks, TimerService) {

		$scope.isActive = isActive;
		$scope.$watch(activeChanged, setActive);
		$scope.$watch(TimerService.getTime, updateTime);

		function activeChanged() {
			return $scope.currentTask !== Tasks.getActive();
		}

		function setActive() {
			$scope.currentTask = Tasks.getActive();
		}
		
		function isActive(location) {
			return location === $location.path();
		}
		
		function updateTime() {
			$scope.formattedTime = TimerService.getFormattedTime();
		}

	}]);

}(angular);