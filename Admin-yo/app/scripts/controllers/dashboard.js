'use strict';

angular.module('adminApp').controller('DashboardCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$rootScope.menuSelecionado = 'dashboard';
    $scope.tela = 'Dashboard';
    $scope.urlback = 'home';

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