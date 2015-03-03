'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:EditarprodutoCtrl
 * @description
 * # EditarprodutoCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('EditarprodutoCtrl', [ '$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams){
  	$rootScope.menuSelecionado = 'produtos';
    $scope.tela = 'Editar produto';
    $scope.urlback = 'produtos';

    var createProduto = function(_codigo, _descricao, _tipo, _unidade, _valor){
		return {
			codigo: _codigo,
			descricao: _descricao,
			tipo: _tipo,
			unidade: _unidade,
			valor: _valor
		};
	};

	var createTipo = function(_codigo, _nome){
		return {
			codigo: _codigo,
			nome: _nome
		};
	};

	var createUnidade = function(_codigo, _nome){
		return{
			codigo: _codigo,
			nome: _nome
		};
	};

	$scope.produtos = [];
	$scope.produtos.push(createProduto(1, 'Skol', createTipo(1, 'Cerveja'), createUnidade(1, 'Caixa'), 90.0));
	$scope.produtos.push(createProduto(2, 'Brahma', createTipo(1, 'Cerveja'), createUnidade(1, 'Caixa'), 94.0));
	$scope.produtos.push(createProduto(3, 'Coca-cola', createTipo(2, 'Refrigerante'), createUnidade(2, 'Fardo'), 35.0));

	$scope.tipos = [];
	$scope.tipos.push(createTipo(1, 'Cerveja'));
	$scope.tipos.push(createTipo(2, 'Refrigerante'));
	$scope.tipos.push(createTipo(3, 'Água'));

	$scope.unidades = [];
	$scope.unidades.push(createUnidade(1, 'Caixa'));
	$scope.unidades.push(createUnidade(2, 'Fardo'));
	$scope.unidades.push(createUnidade(3, 'Litro'));

	angular.forEach($scope.produtos, function(produto){
		if(produto.codigo == $routeParams.id){
			$scope.produto = produto;
			return;
		}
	});	
}]);
