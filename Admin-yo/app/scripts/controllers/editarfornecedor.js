'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:EditarfornecedorCtrl
 * @description
 * # EditarfornecedorCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('EditarfornecedorCtrl', [ '$scope', '$rootScope', '$routeParams', 'fornecedorFactory', function ($scope, $rootScope, $routeParams, fornecedorFactory){
  	$rootScope.menuSelecionado = 'fornecedores';
    $scope.tela = 'Fornecedores';
	$scope.urlback = 'fornecedores';

	$scope.save = function(){
    	fornecedorFactory.save($scope.fornecedor, function(produto){
    	});
    };

    $scope.getFornecedor = function(){
    	fornecedorFactory.get($routeParams.id).success(function(data, status){
    		$scope.fornecedor = data;
    	});
    };

    $scope.getFornecedor();

}]);
