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


		// set the second task to active -- for testing purposes
		tasks[1].active = true;

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
			task.id = ++_id;
			task.date = new Date(task.date);
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
		};

		/**
		 *
		 * @param task
		 */
		this.removeTask = function(task) {
			for (var i =0; i < tasks.length; i++) {
				if (task.id === tasks[i].id) {
					tasks.splice(i, 1);
				}
			}
		};

		/**
		 *
		 * @param id
		 *
		 * @returns {id|*|id|id|id|id}
		 */
		this.get = function(id) {
			for (var i =0; i < tasks.length; i++) {
				if (id == tasks[i].id) {
					return tasks[i];
				}
			}

			return null;
		};

		this.setActive = function(task) {
			unsetAllActive();
			task.active = true;
		};

		function unsetAllActive() {
			for (var i=0; i<tasks.length; i++) {
				tasks[i].active = false;
			}
		}
	});

}(angular);
