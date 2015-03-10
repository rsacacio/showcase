'use strict';

angular.module('adminApp').controller('FornecedoresCtrl', ['$scope', '$rootScope', '$timeout', 'fornecedorFactory', function ($scope, $rootScope, $timeout, fornecedorFactory) {
	$rootScope.menuSelecionado = 'fornecedores';
	$scope.tela = 'Fornecedores';
	$scope.urlback = 'home';
	$scope.icone = 'truck';

	$scope.listFornecedores = function(){
		fornecedorFactory.list().success(function(data, status){
			$scope.fornecedores = data;
		});
	};

	$scope.deleteEquipe = function(id){
		fornecedorFactory.exclude(id, function(data, status){
			$scope.listFornecedores();
		});
	};

	$timeout(function() {
		$scope.listFornecedores();	
	}, 100);
	
}]);