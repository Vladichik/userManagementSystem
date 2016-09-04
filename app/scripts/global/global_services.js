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
  });
