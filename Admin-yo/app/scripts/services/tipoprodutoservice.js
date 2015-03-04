angular.module('adminApp').factory('tipoProdutoFactory', function($http) {
	function list(){
		return $http.get('http://localhost:8080/tipoproduto/list');
	};

	return {
		list:list
	};
});