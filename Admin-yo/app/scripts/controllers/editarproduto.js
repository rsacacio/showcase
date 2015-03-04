'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:EditarprodutoCtrl
 * @description
 * # EditarprodutoCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('EditarprodutoCtrl', [ '$scope', '$rootScope', '$routeParams', 'produtosFactory', 'unidadeProdutoFactory', 'tipoProdutoFactory', function ($scope, $rootScope, $routeParams, produtosFactory, unidadeProdutoFactory, tipoProdutoFactory){
  	$rootScope.menuSelecionado = 'produtos';
    $scope.tela = 'Editar produto';
    $scope.urlback = 'produtos';

	$scope.save = function(){
    	produtosFactory.save($scope.produto, function(produto){
    	});
    };

    $scope.getProduto = function(){
    	produtosFactory.get($routeParams.id).success(function(data, status){
    		$scope.produto = data;
    	});
    };

    $scope.listTipoProduto = function(){
    	tipoProdutoFactory.list().success(function(data, status){
    		$scope.tiposProduto = data;
    	});
    };

 	$scope.listUnidades = function(){
    	unidadeProdutoFactory.list().success(function(data, status){
    		$scope.unidades = data;
    	});
    };

	$scope.listUnidades();
    $scope.listTipoProduto();
    $scope.getProduto();
}]);
