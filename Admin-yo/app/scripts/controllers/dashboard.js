adminApp.controller('DashboardCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
	$rootScope.menuSelecionado = 'dashboard';

	var createGraficoTotalizadores = function(_descricao, _valor){
		return {
			descricao: _descricao,
			valor: _valor
		};
	};

	var graficoTotalizadores = [];
	graficoTotalizadores.push(createGraficoTotalizadores('Usuários', '20'));
	graficoTotalizadores.push(createGraficoTotalizadores('Produtos', '80'));
	graficoTotalizadores.push(createGraficoTotalizadores('Fornecedores', '50'));
	graficoTotalizadores.push(createGraficoTotalizadores('Clientes', '30'));

	$timeout(function() {
         Morris.Bar({
            element: 'hero-bar-totalizadores',
            data: graficoTotalizadores,
            xkey: 'descricao',
            ykeys: ['valor'],
            labels: ['Valor'],
            hideHover: 'auto',
            resize: true,
            pointSize: 2,
            barRatio: 0.4,
		    xLabelAngle: 35
        });
     }, 100);


    var createGraficoVendas = function(_mes, _produto1, _produto2, _produto3, _produto4){
    	return {
    		mes: _mes,
    		produto1: _produto1,
    		produto2: _produto2,
    		produto3: _produto3,
    		produto4: _produto4
    	};
    };

	var graficoVendas = [];
	graficoVendas.push(createGraficoVendas('2010', 50, 10, 70, 150));
	graficoVendas.push(createGraficoVendas('2011', 65, 30, 75, 120));
	graficoVendas.push(createGraficoVendas('2012', 81, 50, 15, 90));
	graficoVendas.push(createGraficoVendas('2013', 20, 15, 18, 50));
	graficoVendas.push(createGraficoVendas('2014', 90, 33, 26, 105));

	$timeout(function() {
         Morris.Area({
            element: 'hero-area-vendas',
            data: graficoVendas,
            xkey: 'mes',
            ykeys: ['produto1', 'produto2', 'produto3', 'produto4'],
            labels: ['Brahma' , 'Skol', 'Coca-cola', 'Água mineral Santa Catarina'],
            hideHover: 'auto',
            resize: true,
	        pointSize: 2
        });
     }, 100);
}]);