'use strict';

angular.module('adminApp').controller('EquipeCtrl', ['$scope', '$rootScope', '$timeout', 'equipeFactory', function ($scope, $rootScope, $timeout, equipeFactory) {
	$rootScope.menuSelecionado = 'equipe';
	$scope.tela = 'Equipe';
	$scope.urlback = 'home';
	$scope.icone = 'users';

	$scope.listEquipe = function(){
		equipeFactory.list().success(function(data, status){
			$scope.equipe = data;
		});
	};

	$scope.deleteEquipe = function(id){
		equipeFactory.exclude(id, function(data, status){
			$scope.listEquipe();
		});
	};

	$timeout(function() {
		$scope.listEquipe();	
	}, 100);

}]);