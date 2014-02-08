"use strict";

!function(angular) {

	var Module = angular.module('timebox');
	Module.service('Tasks', function() {
		var _id = 0, tasks = [];
		var Task = function(title) {
			this.id = +_id;
			this.title = title;
			this.date = new Date();
		};

		// dummy tasks for now
		tasks.push(new Task('Fix Bug A'));
		tasks.push(new Task('Implement Task B'));
		tasks.push(new Task('Rewrite Story A'));
		tasks.push(new Task('Implement Task A'));
		tasks.push(new Task('Implement Task C'));

		this.getTasks = function() {
			return tasks;
		};

		this.addTask = function(task) {
			tasks.push(task);
		};
	});

}(angular);
