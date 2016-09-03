'use strict';

/**
 * @ngdoc overview
 * @name userManagementSystemApp
 * @description
 * # userManagementSystemApp
 *
 * Main module of the application.
 */
angular
  .module('userManagementSystemApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
