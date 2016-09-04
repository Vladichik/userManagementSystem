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

    $scope.setFilterModel = function () {
      if ($scope.selectedGroup.toLowerCase() === "all groups") {
        $scope.groupFilter = "";
      } else {
        $scope.groupFilter = $scope.selectedGroup;
      }
    }

  }])
  /**
   * Directive that creates fancy scroll
   */
  .directive('cscroll', function ($rootScope) {
    return function (scope, element, attrs) {
      if (!$rootScope.iAmOnMobile) {
        element.mCustomScrollbar({
          theme: "dark",
          moveDragger: true,
          autoHideScrollbar: true,
          updateOnContentResize: true,
          scrollInertia: 500
        });
      }
    };
  })
  /**
   * This directive creates CREATE NEW GROUP DIALOG
   * with all functionality
   */
  .directive('createGroup', ['$rootScope', function ($rootScope) {
    return {
      replace: true,
      scope: false,
      templateUrl: "views/dialogs/create_group.html",
      link: function (scope) {
        scope.saveGroup = function () {
          $rootScope.appStrings[$rootScope.lang].groups.push(scope.newGroupName);
          console.log($rootScope.appStrings);
        }
      }
    }
  }])
  /**
   * This directive is responsible to update userData object when user group
   * has changed and notify scope about the change to update filtered list
   */
  .directive("changeGroup", ['$filter', '$rootScope', function($filter, $rootScope){
    return function(scope, element){
      element.on('change', function(){
        var requiredUser = $filter("getById")($rootScope.usersData, scope.user.id);
        if(requiredUser !== null){
          requiredUser.group = scope.userGroup;
        }
        $rootScope.$apply();
      });
    }
  }]);
