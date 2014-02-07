'use strict';

describe('UserController', function(){
	var scope;

	beforeEach(angular.mock.module('timebox'));
	//mock the controller for the same reason and include $rootScope and $controller
	beforeEach(angular.mock.inject(function($rootScope, $controller){
		//create an empty scope
		scope = $rootScope.$new();
		//declare the controller and inject our empty scope
		$controller('UserController', {$scope: scope});
	}));

	it('should save a new user', function(){
		var user = {name : 'blaFoo'};
		scope.users = [];
		scope.save(user);
		expect(scope.users.length).toEqual(1);
	});

	it('should remove an existing user', function(){
		var user = {id : 1};
		scope.users = [{id : 1}];
		scope.remove(user);
		expect(scope.users.length).toEqual(0);
	});
});