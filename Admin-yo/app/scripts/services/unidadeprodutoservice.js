angular.module('adminApp').factory('unidadeProdutoFactory', function($http) {
	function list(){
		return $http.get('http://localhost:8080/unidadeproduto/list');
	};

	return {
		list:list
	};
});