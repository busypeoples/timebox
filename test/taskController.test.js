'use strict';

describe('TaskController', function() {

	var scope, Task;

	beforeEach(angular.mock.module('timebox'));

	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('TaskController', { $scope : scope });
	}));

	describe('sortTasksBy', function() {

		it('should sort Tasks by id', function() {
			var tasks = [{id : 3}, {id : 1}, {id : 2}];
			expect(scope.sortTasksBy(tasks, 'id')).toEqual([{id : 1}, {id : 2}, {id : 3}]);
		});

		it('should sort Tasks by title', function() {
			var tasks = [{title : 'foo'}, {title : 'bar'}, {title : 'baz'}];
			expect(scope.sortTasksBy(tasks, 'title')).toEqual([{title : 'bar'}, {title : 'baz'}, {title : 'foo'}]);
		});

		it('should sort Tasks by date', function() {
			var tasks = [{date : new Date('2015-01-01')}, {date : new Date('2013-11-12')}, {date : new Date('2014-08-08')}];
			expect(scope.sortTasksBy(tasks, 'date')).toEqual([{date : new Date('2013-11-12')}, {date : new Date('2014-08-08')}, {date : new Date('2015-01-01')}]);
		});

		it('should not sort anything if a wrong sort property is defined.', function() {
			var tasks = [{title : 'foo'}, {title : 'bar'}, {title : 'baz'}];
			expect(scope.sortTasksBy(tasks, 'fooBar')).toEqual(tasks);
		});

	});

	describe('getTodaysTasks', function() {

		it('should only return tasks that are scheduled for today', function() {
			var tasks = [{id : 1, date : new Date('2012-02-11')}, {id : 2, date : new Date()}, {id : 3, date : new Date('2015-01-01')}];

			expect(scope.getTodaysTasks(tasks).length).toBe(1);
		});

		it('should filter out past tasks', function() {
			var tasks = [{id : 1, date : new Date('2012-02-11')}];

			expect(scope.getTodaysTasks(tasks).length).toBe(0);
		});

		it('should filter out all future tasks', function() {
			var tasks = [{id : 1, date : new Date('2015-01-01')}];

			expect(scope.getTodaysTasks(tasks).length).toBe(0);
		});
	});

	describe('getUpcomingTasks', function() {

		it('should only return tasks that are scheduled in the future', function() {
			var tasks = [{id : 1, date : new Date('2012-02-11')}, {id : 2, date : new Date()}, {id : 3, date : new Date('2015-01-01')}];

			expect(scope.getUpcomingTasks(tasks).length).toBe(1);
		});

		it('should filter out all past tasks', function() {
			var tasks = [{id : 1, date : new Date('2012-02-11')}];

			expect(scope.getUpcomingTasks(tasks).length).toBe(0);
		});

		it('should filter out all tasks for today', function() {
			var tasks = [{id : 1, date : new Date()}];

			expect(scope.getUpcomingTasks(tasks).length).toBe(0);
		});

	});

	describe('getPastTasks', function() {

		it('should only return tasks that are in the past', function() {
			var tasks = [{id : 1, date : new Date('2012-02-11')}, {id : 2, date : new Date()}, {id : 3, date : new Date('2015-01-01')}];

			expect(scope.getPastTasks(tasks).length).toBe(1);
		});

		it('should filter out all future tasks', function() {
			var tasks = [{id : 1, date : new Date('2015-01-01')}];

			expect(scope.getPastTasks(tasks).length).toBe(0);
		});

		it('should filter out all tasks for today', function() {
			var tasks = [{id : 1, date : new Date()}];

			expect(scope.getPastTasks(tasks).length).toBe(0);
		});

	});

	describe('addTask', function() {
		it('should add a task', function() {

		});
	});

	describe('editTask', function() {
		it('should edit a task', function() {

		});
	});

	describe('deleteTask', function() {
		it('should delete a task', function() {

		});
	});

});