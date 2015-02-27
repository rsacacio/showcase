adminApp.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$rootScope.menuSelecionado = 'home';

	var createPainel = function(_codigo, _count, _caption, _icone, _url){
		return{
			codigo: _codigo,
			count: _count,
			caption: _caption,
			icone: _icone,
			url: _url
		};
	};

	$scope.paineis = [];
	$scope.paineis.push(createPainel(1, '2', 'Usuarios', 'fa-users', 'equipe'));
	$scope.paineis.push(createPainel(1, '5', 'Fornecedores', 'fa-truck', 'fornecedores'));
	$scope.paineis.push(createPainel(1, '30', 'Clientes', 'fa-credit-card', 'clientes'));
	$scope.paineis.push(createPainel(1, '80', 'Produtos', 'fa-archive', 'produtos'));
}]);