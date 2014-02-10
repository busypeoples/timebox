"use strict";

!function(angular) {

	var Module = angular.module('timebox');

	Module.controller('SettingsController', ['$scope', function($scope) {

		$scope.saveSettings = saveSettings;

		$scope.$watch('settingsForm', function() { init({name : null, email : null}); });

		function init(user) {
			if (! $scope.settingsForm) return;
			$scope.settingsForm.name = user.name || null;
			$scope.settingsForm.email = user.email || null;
		}

		/**
		 *
		 * @returns {boolean}
		 */
		function saveSettings() {
			if (!validate($scope.settingsForm)) {
				$scope.settingsForm.$setValidity('settingsForm', false);
				return false;
			}

			if (! $scope.user) $scope.user = {};

			$scope.user.name = $scope.settingsForm.name;
			$scope.user.email = $scope.settingsForm.email;

			$scope.settingsForm.$setValidity('settingsForm', true);

			return true;
		}

		/**
		 *
		 * @param user
		 *
		 * @returns {boolean}
		 */
		function validate(user) {
			var valid = true;

			if (!user.name || ! user.email) {
				valid = false;
			}

			return valid;
		}

	}]);

}(angular);