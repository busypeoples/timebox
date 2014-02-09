'use strict';

!function(angular) {

	var Module = angular.module('timebox');

	Module.service('TimerService', ['$timeout', function($timeout) {

		var counter = 0, timeout;
		function onTimeout() {
			counter++;
			timeout = $timeout(onTimeout,1000);
		}

		this.start = function(time) {
			if (time && time > 0 ) counter = parseInt(time);
			timeout = $timeout(onTimeout,1000);
		};

		this.stop = function(){
			$timeout.cancel(timeout);
			counter = 0;
		};

		this.getTime = function() {
			return counter;
		};

		this.getFormattedTime = function() {
			var hours = Math.floor(counter/3600) % 24;
			var minutes = Math.floor((counter/60) % 60);
			var seconds = Math.floor(counter%60);
			if (minutes < 10) {
				minutes = '0' + minutes;
			}

			if (seconds < 10) {
				seconds = '0' + seconds;
			}
			return hours + ':' + minutes + ':' + seconds;
		};

		this.getPercentage = function() {
			return Math.floor( (counter/ getFullTime()) * 100);
		};

		function getFullTime() {
			return 	25 * 60;
		}

	}]);

}(angular);