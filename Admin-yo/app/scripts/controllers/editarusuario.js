'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:EditarusuarioCtrl
 * @description
 * # EditarusuarioCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('EditarusuarioCtrl', [ '$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams){
  	$rootScope.menuSelecionado = 'equipe';
    $scope.tela = 'Editar usuário';
    $scope.urlback = 'equipe';

    var createUsuario = function(_codigo, _nome, _email, _telefone, _cargo, _login){
		return {
			codigo: _codigo,
			nome: _nome,
			email: _email,
			telefone: _telefone,
			cargo: _cargo,
			login: _login
		};
	};

	var createCargo= function(_codigo, _nome){
		return {
			codigo: _codigo,
			nome: _nome
		};
	};

    $scope.equipe = [];
	$scope.equipe.push(createUsuario(1, 'Rangel Acácio de Souza','rs.acacio@gmail.com','8831-1107','Vendedor', 'rsacacio'));
	$scope.equipe.push(createUsuario(2, 'Patricia Mattos Medeiros','patricia@gmail.com','8808-7227','Gerente', 'patriciamm'));
	$scope.equipe.push(createUsuario(1, 'Rangel Acácio de Souza','rs.acacio@gmail.com','8831-1107','Vendedor', 'rsacacio'));
	$scope.equipe.push(createUsuario(1, 'Rangel Acácio de Souza','rs.acacio@gmail.com','8831-1107','Vendedor', 'rsacacio'));

	$scope.cargos = [];
	$scope.cargos.push(createCargo(1, 'Vendedor'));
	$scope.cargos.push(createCargo(2, 'Gerente'));
	$scope.cargos.push(createCargo(3, 'Entregador'));

	angular.forEach($scope.equipe, function(usuario){
		if(usuario.codigo === $routeParams.id){
			$scope.usuario = usuario;
			return;
		}
	});	

}]);
