
"use strict";

angular.module('userManagementSystemApp')
.controller('MainCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
  $scope.selectedGroup = APP_STRINGS[$rootScope.lang].groups[0];
}]);
