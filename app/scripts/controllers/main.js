"use strict";

angular.module('userManagementSystemApp')
  .controller('MainCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.selectedGroup = APP_STRINGS[$rootScope.lang].groups[0];

    /**
     * This method closes any dialog in the app
     */
    $rootScope.closeDialog = function () {
      $rootScope.dialogType = null;
    };

    /**
     * Method that opens CREATE NEW GROUP dialog
     */
    $scope.createListDialog = function () {
      $rootScope.dialogType = "create-group";
    };

  }])
  /**
   * This directive creates CREATE NEW GROUP DIALOG
   * with all functionality
   */
  .directive('createGroup', function(){
    return {
      replace: true,
      scope: false,
      templateUrl: "views/dialogs/create_group.html",
      link: function(scope){
        console.log(scope);
      }
    }
  });
