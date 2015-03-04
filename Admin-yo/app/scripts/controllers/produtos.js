'use strict';

angular.module('adminApp').controller('ProdutosCtrl', ['$scope', '$rootScope', '$timeout', 'produtosFactory', function ($scope, $rootScope, $timeout, produtosFactory) {
	$rootScope.menuSelecionado = 'produtos';
    $scope.tela = 'Produtos';
    $scope.urlback = 'home';
    $scope.icone = 'archive';

    $scope.listProdutos = function(){
		produtosFactory.list().success(function(data, status){
			$scope.produtos = data;
		});
	};

	$scope.deleteProduto = function(id){
		produtosFactory.exclude(id, function(data, status){
			$scope.listProdutos();
		});
	};

	$timeout(function() {
		$scope.listProdutos();	
	}, 100);
}]);