angular.module('adminApp').controller('ClientesCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$rootScope.menuSelecionado = 'clientes';
	$scope.tela = 'Clientes';
	
	var createCliente = function(_codigo, _nome, _email, _telefone, _endereco){
		return {
			codigo: _codigo,
			email: _email,
			nome: _nome,
			telefone: _telefone,
			endereco: _endereco
		};
	};

	$scope.clientes = [];
	$scope.clientes.push(createCliente(1, 'Zé da esquina', 'zeesquina@gmail.com', '8880-2222', 'Rua luiz fagundes, 2367'));
	$scope.clientes.push(createCliente(2, 'Maria do Carmo', 'mariacarmo@gmail.com', '3232-2323', 'Avenida Barão do Rio Branco'));
	$scope.clientes.push(createCliente(3, 'Padaria vó Maria', 'padocamaria@gmail.com', '1212-1212', 'Rua Vereador Arthur Mariano'));
	$scope.clientes.push(createCliente(4, 'Bruce wayne', 'brucebat@wayne.com', '9998-9888', 'Av. Gotham'));

	$scope.editarCliente = function(clienteEditar){
		$scope.cliente = angular.copy(clienteEditar);
	};

	$scope.cancelaEditar = function(){
		$scope.cliente = null;
	};
}]);