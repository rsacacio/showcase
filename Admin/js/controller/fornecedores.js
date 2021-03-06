adminApp.controller('FornecedoresCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$rootScope.menuSelecionado = 'fornecedores';

	var createFornecedor = function(_codigo, _nome, _cnpj, _representante, _endereco){
		return {
			codigo: _codigo,
			nome: _nome,
			cnpj: _cnpj,
			representante: _representante,
			endereco: _endereco
		};
	};

	var createRepresentante = function(_codigo, _nome, _email, _telefone){
		return{
			codigo: _codigo,
			nome: _nome,
			email: _email,
			telefone: _telefone
		};
	};

	$scope.fornecedores = [];
	$scope.fornecedores.push(createFornecedor(1, 'Fornecedor 1', '212121121/21212', createRepresentante(1, 'Alexsandro PFleger', 'alex@fornecedor1.com', '9888-8799'), 'São Pedro de Alcântara'));
	$scope.fornecedores.push(createFornecedor(1, 'Fornecedor 2', '343243434/34343', createRepresentante(2, 'Marilda Valéria Rios de Souza', 'mara@fornecedor2.com', '9888-8799'), 'São Pedro de Alcântara'));
	$scope.fornecedores.push(createFornecedor(1, 'Fornecedor 3', '867564434/44232', createRepresentante(3, 'José Nazareno de Souza', 'josé@fornecedor3.com', '9888-8799'), 'São Pedro de Alcântara'));
	
	$scope.editarFornecedor = function(fornecedorEditar){
		$scope.fornecedor = angular.copy(fornecedorEditar);
	}

	$scope.cancelaEditar = function(){
		$scope.fornecedor = null;
	}
}]);