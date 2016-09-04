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
    $scope.createGroupDialog = function () {
      $rootScope.dialogType = "create-group";
    };

    $scope.deleteGroupDialog = function(){
      $rootScope.dialogType = "delete-groups";
    };

    /**
     * This method sets filter variable according to picked group
     */
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
          if($rootScope.appStrings[$rootScope.lang].groups.indexOf(scope.newGroupName) <= 0) {
            $rootScope.appStrings[$rootScope.lang].groups.push(scope.newGroupName);
            $rootScope.closeDialog();
          } else {
            alert("Group with this name already exists");
          }
        }
      }
    }
  }])
  /**
   * This directive creates DELETE GROUPS DIALOG
   * with all functionality
   */
  .directive('deleteGroups', ['$rootScope', '$filter', function ($rootScope, $filter) {
    return {
      replace: true,
      scope: false,
      templateUrl: "views/dialogs/delete_groups.html",
      link: function (scope) {
        scope.groupsToDelete = [];
        angular.forEach($rootScope.groups, function(group){
          var index = $filter("getIndex")($rootScope.usersData, "group", group);
          if(index === null && group.toLowerCase() !== "all groups"){
            scope.groupsToDelete.push(group);
          }
        });
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
