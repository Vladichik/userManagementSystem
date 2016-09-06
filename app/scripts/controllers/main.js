"use strict";

angular.module('userManagementSystemApp')
  .controller('MainCtrl', ['$rootScope', '$scope', 'NgMap', '$filter', '$voice', function ($rootScope, $scope, NgMap, $filter, $voice) {
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

    /**
     * Method that opens DELETE GROUP DIALOG
     */
    $scope.deleteGroupDialog = function(){
      $rootScope.dialogType = "delete-groups";
    };

    /**
     * Method that opens create new user dialog
     */
    $scope.createUserDialog = function(){
      $rootScope.dialogType = "create-users";
    };

    /**
     * This method closes map screen in mobile view
     */
    $scope.closeMap = function(){
      $scope.shouldShowMap = false;
    };

    /**
     * This method performs delete of checked users
     */
    $scope.deleteSelectedUsers = function(){
      var usersToDelete = [];
      angular.forEach($scope.usersData, function(user, index){
        if(user.cb){
          usersToDelete.push(user.id);
        }
      });
      angular.forEach(usersToDelete, function(id){
        var indexToDelete = $filter("getIndex")($scope.usersData, "id", id);
        if(indexToDelete !== null){
          $rootScope.usersData.splice(indexToDelete, 1);
        }
      });
      $scope.deleteButtonIsActive = false;
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
    };

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

        scope.deleteGroups = function(){
          angular.forEach(scope.dg, function(key){
            $rootScope.appStrings[$rootScope.lang].groups.splice($rootScope.appStrings[$rootScope.lang].groups.indexOf(key), 1);
          });

          $rootScope.$$childHead.selectedGroup = APP_STRINGS[$rootScope.lang].groups[0];
          $rootScope.$$childHead.groupFilter = $rootScope.$$childHead.selectedGroup;
          if ($rootScope.$$childHead.selectedGroup.toLowerCase() === "all groups") {
            $rootScope.$$childHead.groupFilter = "";
          } else {
            $rootScope.$$childHead.groupFilter = $rootScope.$$childHead.selectedGroup;
          }
          $rootScope.closeDialog();
        }
      }
    }
  }])
  .directive('createUser', ['$rootScope', '$filter', function($rootScope, $filter){
    return {
      replace: true,
      scope: false,
      templateUrl: "views/dialogs/create_user.html",
      link: function(scope){
        //----- this part generates list of available cities from users list -----//
        scope.cities = [];
        angular.forEach($rootScope.usersData, function (user) {
          if(scope.cities.indexOf(user.city) < 0){
            scope.cities.push(user.city);
          }
        });
        //------------------------------------------------------------------------//

        /**
         * This method creates new user
         */
        scope.createNewUser = function(){
          var reqIndex = $filter("getIndex")($rootScope.usersData, "city", scope.user.city);
          if(reqIndex !== null){
            var reqLat = $rootScope.usersData[reqIndex].latitude;
            var reqLng = $rootScope.usersData[reqIndex].longitude;
            if(reqLat && reqLng){
              scope.user.latitude = reqLat;
              scope.user.longitude = reqLng;
              scope.user.id = Math.floor(Math.random() * 90 + 100); //generating random id
              //$rootScope.usersData.push(scope.user);
              $rootScope.usersData.splice(0, 0, scope.user);
              $rootScope.closeDialog();
            }
          }
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
  }])
  /**
   * Directive that stops propagation of the parent click event
   * Example usage is in row_lead.html "stop-prop"
   */
  .directive("stopProp", function () {
    return function (scope, element) {
      element.on("click", function (event) {
        event.stopPropagation();
      });
    };
  })
  /**
   * This directive sets active user row
   */
  .directive('setSelected', function(){
    return function(scope, element){
      element.on("click", function(){
        scope.$parent.selectedUser = scope.user.id;
        scope.$parent.activeLat = scope.user.latitude;
        scope.$parent.activeLng = scope.user.longitude;
        if(window.innerWidth < 801){
          scope.$parent.shouldShowMap = true;
        }
        scope.$apply();
      });
    }
  })
  /**
   * This directive checks if some user row is
   * checked, if so, the delete button will turn to enabled
   * else it will remain disabled
   */
  .directive("checkedUsers", function(){
    return function(scope, element){
      element.on("change", function(){
        scope.$parent.deleteButtonIsActive = false;
        angular.forEach(scope.usersData, function(user){
          if(user.cb == true){
            scope.$parent.deleteButtonIsActive = true;
          }
        });
        scope.$apply();
      });
    }
  });
