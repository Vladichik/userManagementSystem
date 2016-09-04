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
  /**
   * Here we run all global configurations before application starts
   */
  .run(['$rootScope', '$mobileDetector', function($rootScope, $mobileDetector){
    $rootScope.lang = "en";
    $rootScope.groups = APP_STRINGS[$rootScope.lang].groups;
    $rootScope.appStrings = APP_STRINGS;
    $rootScope.usersData = MOCK_USERS_DATA;
    $rootScope.iAmOnMobile = $mobileDetector.isMobile.any();
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
