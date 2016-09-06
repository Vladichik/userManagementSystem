"use strict";

angular.module('userManagementSystemApp')
/**
 * Service that able to detect whether user is on Mobile browser or not
 * and return the value to application $rootScope
 */
  .service('$mobileDetector', function () {
    this.isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
      }
    };
  })
  /**
   * This service initiates voice commands recognition
   */
  .service('$voice', ['$window', '$rootScope', '$filter', function ($window, $rootScope, $filter) {
    var container = angular.element(".ums-users-list");
    var commands = {
      "find *tag": findUser
    };
    annyang.addCommands(commands);

    this.startVoiceRecognition = function(){
      annyang.start();
    };

    this.stopVoiceRecognition = function(){
      annyang.abort();
    };

    function findUser(recognizedName){
      $rootScope.recognizedName = "Looking for " + recognizedName;
      var index = $filter("getIndex")($rootScope.usersData, 'first_name', recognizedName);
      if(index !== null){
        var id = $rootScope.usersData[index].id;
        if(id !== null){
          var element = angular.element("#user_" + id);
          element.trigger('click');
          container.mCustomScrollbar("scrollTo", element);
          $rootScope.recognizedName = recognizedName + " found!!!";
        }
      }
      $rootScope.$apply();
    }

    this.startVoiceRecognition();
  }]);
