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
		load();

		function save() {
			if (!window.localStorage) return;
			console.log('yes');
			var storage = window.localStorage;
			storage.setItem('tasks', JSON.stringify(tasks)); 
		}
		
		function load() {
			var storage = window.localStorage, storedTasks = null;
			if (storedTasks = storage.getItem('tasks')) {
				tasks = JSON.parse(storedTasks);	
			}
			
			// quick fix for now...
			for (var i=0; i < tasks.length; i++) {
				tasks[i].date = new Date(tasks[i].date);
			}
		
			console.log(tasks);
		}

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
			tasks.push(task);
			save();
		};

		/**
		 *
		 * @param task
		 */
		this.saveTask = function(task) {
			for (var i =0; i < tasks.length; i++) {
				if (task.id == tasks[i].id) {
					tasks[i] = task;
				}
			}
			
			save();
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
			save();
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
			save();
		};

		/**
		 *
		 * @returns {*}
		 */
		this.getActive = function() {
			for (var i =0; i < tasks.length; i++) {
				if (tasks[i].active) {
					return tasks[i];
				}
			}

			return null;
		};

		function unsetAllActive() {
			for (var i=0; i<tasks.length; i++) {
				tasks[i].active = false;
			}
		}
	});

}(angular);
