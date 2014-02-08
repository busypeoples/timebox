'use strict';

describe('SettingsController', function() {
	var scope;

	beforeEach(angular.mock.module('timebox'));
	beforeEach(angular.mock.inject(function($rootScope, $controller){
		//create an empty scope
		scope = $rootScope.$new();

		// prepare form
		scope.settingsForm = {};
		scope.settingsForm.$setDirty = function() {};
		scope.settingsForm.$setPristine = function() {};
		scope.settingsForm.$setValidity = function() {};

		//declare the controller and inject our empty scope
		$controller('SettingsController', {$scope: scope});
	}));

	it('can edit a users name', function() {
		angular.extend(scope.settingsForm, {name : 'foo A', email : 'test@test'});
		scope.user = {
			name : 'foo'
		};

		scope.saveSettings();
		expect(scope.user.name).toBe('foo A');
	});

	it('can set a user email', function() {
		angular.extend(scope.settingsForm, {name : 'foo', email : 'test@test'});
		scope.saveSettings();
		expect(scope.user.email).toBe('test@test');
	});

	it('can not save a user if a user has invalid data', function() {
		angular.extend(scope.settingsForm, {test : 'foo A', email : 'test@test'});
		scope.saveSettings();
		expect(scope.user).toBeUndefined();
	});

});