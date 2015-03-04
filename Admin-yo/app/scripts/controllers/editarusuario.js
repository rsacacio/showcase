'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:EditarusuarioCtrl
 * @description
 * # EditarusuarioCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('EditarusuarioCtrl', [ '$scope', '$rootScope', '$routeParams', 'equipeFactory', 'cargoFactory', function ($scope, $rootScope, $routeParams, equipeFactory, cargoFactory){
  	$rootScope.menuSelecionado = 'equipe';
    $scope.tela = 'Editar usuário';
    $scope.urlback = 'equipe';

    $scope.save = function(){
    	equipeFactory.save($scope.usuario, function(usuario){
    	});
    };

    $scope.getUsuario = function(){
    	equipeFactory.get($routeParams.id).success(function(data, status){
    		$scope.usuario = data;
    	});
    };

    $scope.listCargo = function(){
    	cargoFactory.list().success(function(data, status){
    		$scope.cargos = data;
    	});
    };

    $scope.listCargo();
    $scope.getUsuario();


}]);
