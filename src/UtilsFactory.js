'use strict';

!function(angular) {

	var Module = angular.module('timebox');

	Module.service('TaskService', function() {

		/**
		 *
		 * @param date
		 *
		 * @returns {boolean}
		 */
		this.isToday = function(date) {
			if (date >= getToday() && date < getTomorrow()) {
				return true;
			}
			return false;
		};

		/**
		 *
		 * @param date
		 *
		 * @returns {boolean}
		 */
		this.isPast = function(date) {
			if (date < getToday()) {
				return true;
			}

			return false;
		};

		/**
		 *
		 * @param date
		 *
		 * @returns {boolean}
		 */
		this.isFuture = function(date) {
			if(date >= getTomorrow()) {
				return true;
			}

			return false;
		};

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

		/**
		 *
		 * @param id
		 * @param tasks
		 *
		 * @returns {boolean}
		 */
		function isActive(id, tasks) {
			tasks = tasks || [];
			for (var i=0; i<tasks.length; i++) {
				if (id == tasks[i].id) {
					return true;
				}
			}

			return false;
		}

	});

}(angular);
