angular.module('adminApp').factory('cargoFactory', function($http) {
	function list(){
		return $http.get('http://localhost:8080/cargo/list');
	};

	return {
		list:list
	};
});