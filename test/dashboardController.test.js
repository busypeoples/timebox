'use strict';

describe('DashboardController', function() {
	var scope, Tasks;

	beforeEach(angular.mock.module('timebox'));

	beforeEach(angular.mock.inject(function($rootScope, $controller) {

		// simple mock for now...
		Tasks = {
			getTasks : function() { return [{id : 100, 'title' : 'Finish module A', date : getDate() }] }
		};

		scope = $rootScope.$new();
		$controller('DashboardController', { $scope : scope, Tasks : Tasks });
	}));

	function getDate() {
		var date = new Date();
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		return date;
	}

	describe('tasks for today', function() {
		it('should display all scheduled tasks for today', function() {
			scope.$digest();
			expect(scope.tasksForToday.length).toEqual(1);
		});

		it('should filter all tasks that are not scheduled for today', function() {
			var date = new Date();
			date.setDate(date.getDate() + 10);

			Tasks.getTasks = function() {
				return [{id : 100, 'title' : 'Finish module A', date : date }];
			};

			scope.$digest();

			expect(scope.tasksForToday.length).toEqual(0);
		});
	});
});