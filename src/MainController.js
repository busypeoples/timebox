'use strict';

!function(angular) {
	var Module = angular.module('timebox');

	Module.controller('MainController', ['$scope', '$location', 'Tasks',function($scope, $location, Tasks) {

		$scope.isActive = isActive;
		$scope.$watch(activeChanged, setActive);


		function activeChanged() {
			return $scope.currentTask !== Tasks.getActive();
		}

		function setActive() {
			$scope.currentTask = Tasks.getActive();
		}
		
		function isActive(location) {
			return location === $location.path();
		}

	}]);

}(angular);