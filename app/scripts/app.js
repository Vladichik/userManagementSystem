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
  .run(['$rootScope', function($rootScope){
    $rootScope.lang = "en";
    $rootScope.groups = APP_STRINGS[$rootScope.lang].groups;
    $rootScope.appStrings = APP_STRINGS;
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
