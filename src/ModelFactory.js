"use strict";

!function(angular) {

	var Module = angular.module('timebox');
	Module.service('Tasks', function() {
		var _id = 0, tasks = [];
		var Task = function(title, date) {
			this.id = ++_id;
			this.title = title;
			this.date = date || new Date();
		};

		// dummy tasks for now
		tasks.push(new Task('Fix Bug A', new Date('2014-01-08')));
		tasks.push(new Task('Fix Bug B'));
		tasks.push(new Task('Implement Task A'));
		tasks.push(new Task('Implement Task B'));
		tasks.push(new Task('Rewrite Story A'));
		tasks.push(new Task('Implement Task C', new Date('2014-04-11')));
		tasks.push(new Task('Implement Task D', new Date('2014-06-21')));

		/**
		 *
		 * @returns {Array}
		 */
		this.getTasks = function() {
			return tasks;
		};

		/**
		 *
		 */
		this.addTask = function(task) {
			tasks.push(task);
		};

		/**
		 *
		 * @param task
		 */
		this.saveTask = function(task) {
			for (var i =0; i < tasks.length; i++) {
				if (task.id === tasks[i].id) {
					tasks[i] = task;
				}
			}
		}
	});

}(angular);
