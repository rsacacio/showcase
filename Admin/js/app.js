'use strict';

/**
 * @ngdoc overview
 * @name portifolioApp
 * @description
 * # portifolioApp
 *
 * Main module of the application.
 */
var adminApp = angular.module('adminApp', ['ngRoute']).config(function ($routeProvider, $httpProvider) {
  	$routeProvider
      .when('/equipe', {
        templateUrl: 'views/equipe.html',
        controller: 'EquipeCtrl'
      })
      .when('/clientes', {
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl'
      })
      .when('/produtos', {
        templateUrl: 'views/produtos.html',
        controller: 'ProdutosCtrl'
      })
      .when('/fornecedores', {
        templateUrl: 'views/fornecedores.html',
        controller: 'FornecedoresCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
});
  


