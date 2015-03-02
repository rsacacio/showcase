'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular.module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .when('/equipe/editar/:id', {
        templateUrl: 'views/editarusuario.html',
        controller: 'EditarusuarioCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
