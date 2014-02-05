var Module = angular.module('timebox');

Module.controller('UserController', ['$scope', function($scope) { 
	$scope.users = [{name : 'UserA', email : 'foo@foo', id: 1}, 
					{name : 'userB', email : 'foo@foo2', id : 2}];
	
	$scope.save = save;
	$scope.edit = edit;
	$scope.remove = remove;
	var id = 100;
	
	function save(data) {
		var user = {};
		user.name = data.name;
		user.email = data.email;
		user.id = data.id || null;
		if (user.id) {
			update(user);	
		} else {
			add(user);
		}
		reset(data);
	}
	
	function add(user) {
		user.id = ++id;
		$scope.users.push(user);	
	}
	
	function update(user) {
		console.log('update', user);
		for (var i=0; i <$scope.users.length; i++) {
			if (user.id === $scope.users[i].id) {
				$scope.users[i] = user;
			}
		}
	}
	
	function edit(user) {
		if (!$scope.data) $scope.data = {};
		$scope.data.name = user.name;
		$scope.data.email = user.email;
		$scope.data.id = user.id;
	}
	
	function remove(user) {
		for (var i=0; i < $scope.users.length; i++) {
			if ($scope.users[i].id == user.id) {
				$scope.users.splice(i,1);
			}
		}
	}
	
	function reset(data) {
		// reset...
		data.email = null;
		data.name = '';
		data.id = null;
	}
	
}]);
