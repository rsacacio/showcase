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
      .otherwise({
        redirectTo: '/equipe'
      });
});
  


