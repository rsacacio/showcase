'use strict';

angular.module('adminApp').controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
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
	$scope.paineis.push(createPainel(1, '2', 'Usuários', 'fa-users', 'equipe'));
	$scope.paineis.push(createPainel(1, '80', 'Produtos', 'fa-archive', 'produtos'));
	$scope.paineis.push(createPainel(1, '5', 'Fornecedores', 'fa-truck', 'fornecedores'));
	$scope.paineis.push(createPainel(1, '30', 'Clientes', 'fa-credit-card', 'clientes'));

	$scope.optionsTotalizadores = { scaleShowVerticalLines: false };
	$scope.labelsTotalizadores = ['Usuários', 'Produtos', 'Fornecedores', 'Clientes'];
	$scope.seriesTotalizadores = ['Valor'];
	$scope.dataTotalizadores = [[20, 80, 50, 30]];

	

	$scope.labelsVendas = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
  	$scope.seriesVendas = ['Brahma', 'Skol', 'Coca-cola', 'Água mineral Santa Catarina'];
  	$scope.dataVendas = [
    	[65, 59, 80, 81, 56, 55, 40],
    	[28, 48, 40, 19, 86, 27, 90],
    	[93, 67, 23, 98, 10, 38, 49],
    	[50, 34, 28, 10, 87, 34, 23]
	];
}]);