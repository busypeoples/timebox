'use strict';

!function(angular) {
	var Module = angular.module('timebox');

	Module.controller('MainController', ['$scope', 'Tasks',function($scope, Tasks) {

		$scope.$watch(activeChanged, setActive);

		function activeChanged() {
			return $scope.currentTask !== Tasks.getActive();
		}

		function setActive() {
			$scope.currentTask = Tasks.getActive();
		}

	}]);

}(angular);