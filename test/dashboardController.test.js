'use strict';

describe('DashboardController', function() {
	var scope;

	beforeEach(angular.mock.module('timebox'));

	beforeEach(angular.mock.inject(function($rootScope, $controller) {

		// simple mock for now...
		var Tasks = {
			getTasks : function() { return [{id : 100, 'title' : 'Finish module A'}] }
		};

		scope = $rootScope.$new();
		$controller('DashboardController', { $scope : scope, Tasks : Tasks });
	}));

	describe('tasks for today', function() {
		it('should display all scheduled tasks for today', function() {
			var taskForToday = [{id : 100, 'title' : 'Finish module A'}];
			expect(scope.tasksForToday).toEqual(taskForToday);
		});

		it('', function() {

		});

		it('', function() {

		});
	});
});